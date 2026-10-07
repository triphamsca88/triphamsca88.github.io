"""Process raw assets in _source/ into optimised web images in public/img/.

Never modifies files in _source/. Run from the project root:
    python scripts/process_images.py
Requires Pillow and PyMuPDF.
"""
from __future__ import annotations

import io
import os
from collections import deque
from pathlib import Path

import pymupdf
from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "_source"
OUT = ROOT / "public" / "img"
MAX_BYTES = 300 * 1024
REDACT_FILL = (17, 48, 77)  # --navy-700, solid block (never a blur)

LOGOS = {
    "3Itech lastmile.jpg": "i3t_lastmile",
    "COFANO.png": "cofano",
    "CSCMP.jpg": "cscmp",
    "CTD SCHOLARS.png": "ctd_scholars",
    "Data Science Academy.png": "data_science_academy",
    "Google.webp": "google",
    "IDP.jpg": "idp",
    "LSMSE.png": "lsmse",
    "Linkedin.png": "linkedin",
    "NP.png": "np_english",
    "NTU.png": "ntu",
    "RMUTL.png": "rmutl",
    "UEH.png": "ueh",
    "Udemy.png": "udemy",
    "VILAS.png": "vilas",
    "VSCC.png": "vscc",
    "hackathong UMT.jpg": "umt_hackathon",
    "scmission.png": "scmission",
}

# (source file, output folder, output name)
CERTS = [
    ("LEAN6SIGMALINKEDINLEARNING.jpg", "certificates", "lean_six_sigma_linkedin"),
    ("CSCMP DEMAND PLANNING.jpg", "certificates", "cscmp_demand_planning"),
    ("AI Google.pdf", "certificates", "google_ai_professional"),
    ("AIFORDA.pdf", "certificates", "google_ai_for_data_analysis"),
    ("DA Google.pdf", "certificates", "google_data_analytics"),
    ("VILAS.pdf", "certificates", "vilas_supply_chain_essentials"),
    ("OR_NTU.pdf", "certificates", "ntu_operations_research"),
    ("ielts 7.5.jpg", "certificates", "ielts_academic"),
    ("COFANO CERTIFICATION.jpg", "certificates", "cofano_internship"),
    ("EXCHANGE_RMUTL.jpg", "certificates", "rmutl_exchange"),
    ("CTDSCHOLARS.jpg", "awards", "ctd_scholars_2025"),
    ("SCMISSION.jpg", "awards", "scmission_2026"),
    ("LASTMILE3I.jpg", "awards", "last_mile_optimizer_2025"),
    ("HACKATHONDIGIPORTUMT.jpg", "awards", "hackathon_digiport_2025"),
    # LSMSESCHOLAR.jpg intentionally not published: mentions "financial hardship" (pending owner decision).
]

# Solid redaction boxes in source pixel coordinates (x0, y0, x1, y1), padded generously.
REDACTIONS = {
    "ielts 7.5.jpg": [
        (742, 212, 868, 264),    # Candidate Number value
        (672, 268, 862, 456),    # portrait photo
        (176, 392, 456, 447),    # Candidate ID value
        (197, 458, 388, 512),    # Date of Birth value
        (658, 993, 876, 1050),   # Test Report Form Number value
    ],
    "CTDSCHOLARS.jpg": [
        (180, 322, 290, 360),    # Date of birth value
        (396, 322, 548, 352),    # Place of birth value, line 1
        (412, 350, 548, 380),    # Place of birth value, line 2
    ],
}


def load_source(name: str, width: int = 1400) -> Image.Image:
    path = SRC / "Certificate" / name
    if path.suffix.lower() == ".pdf":
        doc = pymupdf.open(path)
        page = doc[0]
        zoom = width / page.rect.width
        pix = page.get_pixmap(matrix=pymupdf.Matrix(zoom, zoom), alpha=False)
        return Image.open(io.BytesIO(pix.tobytes("png"))).convert("RGB")
    return Image.open(path).convert("RGB")


def redact(img: Image.Image, name: str) -> Image.Image:
    boxes = REDACTIONS.get(name)
    if not boxes:
        return img
    img = img.copy()
    draw = ImageDraw.Draw(img)
    for box in boxes:
        draw.rectangle(box, fill=REDACT_FILL)
    return img


def save_webp(img: Image.Image, path: Path, max_width: int) -> tuple[int, int, int]:
    if img.width > max_width:
        h = round(img.height * max_width / img.width)
        img = img.resize((max_width, h), Image.LANCZOS)
    quality = 86
    while True:
        buf = io.BytesIO()
        img.save(buf, "WEBP", quality=quality, method=6)
        if buf.tell() <= MAX_BYTES or quality <= 40:
            break
        quality -= 6
    path.write_bytes(buf.getvalue())
    return img.width, img.height, buf.tell()


def remove_fake_checkerboard(img: Image.Image) -> Image.Image:
    """Flood fill from the borders, turning light, low saturation pixels transparent.

    The LinkedIn logo ships with a fake transparency checkerboard baked into the pixels.
    The white letters sit inside the blue tile, so they are not reachable from the border.
    """
    img = img.convert("RGBA")
    w, h = img.size
    px = img.load()

    def is_bg(p):
        r, g, b, a = p
        return a == 0 or (min(r, g, b) > 180 and max(r, g, b) - min(r, g, b) < 24)

    seen = bytearray(w * h)
    q = deque()
    for x in range(w):
        q.extend([(x, 0), (x, h - 1)])
    for y in range(h):
        q.extend([(0, y), (w - 1, y)])
    while q:
        x, y = q.popleft()
        i = y * w + x
        if seen[i]:
            continue
        seen[i] = 1
        if not is_bg(px[x, y]):
            continue
        px[x, y] = (255, 255, 255, 0)
        for nx, ny in ((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)):
            if 0 <= nx < w and 0 <= ny < h and not seen[ny * w + nx]:
                q.append((nx, ny))
    # Letters inside the tile still carry the baked checkerboard: paint them solid white.
    for y in range(h):
        for x in range(w):
            if not seen[y * w + x] or px[x, y][3] != 0:
                r, g, b, a = px[x, y]
                if a and min(r, g, b) > 150 and max(r, g, b) - min(r, g, b) < 30:
                    px[x, y] = (255, 255, 255, 255)
    return img.crop(img.getchannel("A").getbbox())


def process_logos(rows):
    out_dir = OUT / "logo"
    out_dir.mkdir(parents=True, exist_ok=True)
    for src_name, out_name in LOGOS.items():
        img = Image.open(SRC / "Logo" / src_name)
        if src_name == "Linkedin.png":
            img = remove_fake_checkerboard(img)
        img = img.convert("RGBA")
        bbox = img.getchannel("A").getbbox()
        if bbox:
            img = img.crop(bbox)
        img.thumbnail((256, 256), Image.LANCZOS)
        dest = out_dir / f"{out_name}.webp"
        img.save(dest, "WEBP", lossless=True, method=6)
        rows.append((f"Logo/{src_name}", f"img/logo/{dest.name}", f"{img.width}x{img.height}", dest.stat().st_size))

    # Square mark for wide wordmarks, so they stay legible inside small square tiles.
    for src_name, out_name, x_end in (("COFANO.png", "cofano_mark", 610),):
        img = Image.open(SRC / "Logo" / src_name).convert("RGBA")
        img = img.crop((0, 0, x_end, img.height))
        img = img.crop(img.getchannel("A").getbbox())
        img.thumbnail((256, 256), Image.LANCZOS)
        dest = out_dir / f"{out_name}.webp"
        img.save(dest, "WEBP", lossless=True, method=6)
        rows.append((f"Logo/{src_name} (mark)", f"img/logo/{dest.name}", f"{img.width}x{img.height}", dest.stat().st_size))


def process_certs(rows):
    for src_name, folder, out_name in CERTS:
        out_dir = OUT / folder
        out_dir.mkdir(parents=True, exist_ok=True)
        img = redact(load_source(src_name), src_name)
        for suffix, width in (("", 1400), ("_thumb", 480)):
            dest = out_dir / f"{out_name}{suffix}.webp"
            w, h, size = save_webp(img, dest, width)
            rows.append((f"Certificate/{src_name}", f"img/{folder}/{dest.name}", f"{w}x{h}", size))


def main():
    rows = []
    process_logos(rows)
    process_certs(rows)
    print(f"{'source':48} {'output':58} {'size':>11} {'KB':>6}")
    for src, out, dim, size in rows:
        print(f"{src:48} {out:58} {dim:>11} {size / 1024:6.1f}")
    too_big = [r for r in rows if r[3] > MAX_BYTES]
    print("All files under 300KB." if not too_big else f"OVER LIMIT: {too_big}")


if __name__ == "__main__":
    main()
