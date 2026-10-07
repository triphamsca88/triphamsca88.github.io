# Hướng dẫn dựng portfolio bằng Claude Code trong VS Code

Bộ này gồm 4 file đặt ở thư mục gốc của project:

| File | Vai trò |
|---|---|
| `CLAUDE.md` | Luật chơi cho Claude Code: thiết kế, công nghệ, quyền riêng tư, văn phong. Claude Code tự đọc file này ở đầu mỗi phiên. |
| `NOI_DUNG_PORTFOLIO.md` | Toàn bộ nội dung đã đối chiếu từ CV, LinkedIn và chứng chỉ gốc. Muốn sửa chữ trên web thì sửa ở đây trước. |
| `HUONG_DAN_PROMPT.md` | File bạn đang đọc: các bước và prompt để copy. |
| `hero_supply_chain.svg` | Ảnh hero động chủ đề supply chain analyst, thay cho 3 ảnh carousel của trang mẫu. |

---

## Bước 0: Chuẩn bị (tự làm, không cần prompt)

1. Cài **Node.js bản LTS** (20 trở lên), **Git**, **VS Code** và extension **Claude Code**.
2. Sắp xếp thư mục `PORTFOLIO` như sau rồi mở cả thư mục này trong VS Code (File, Open Folder):

```
PORTFOLIO/
├── CLAUDE.md
├── NOI_DUNG_PORTFOLIO.md
├── HUONG_DAN_PROMPT.md
├── hero_supply_chain.svg
└── _source/
    ├── avatar.jpg          (ảnh đại diện vuông, nền gọn gàng, bạn tự thêm)
    ├── CV/
    ├── Certificate/
    └── Logo/
```

3. Trên GitHub (tài khoản `triphamsca88`), tạo repo **trống** tên chính xác `triphamsca88.github.io`, để Public, không tick thêm README. Tên này giúp web chạy ở địa chỉ gốc `https://triphamsca88.github.io/`.
4. Trả lời các mục **[CẦN XÁC NHẬN]** ở cuối file này (có thể làm song song).

**Cách dùng mỗi prompt:** copy nguyên khối prompt, dán vào khung chat Claude Code, đợi xong, mở `http://localhost:5173` xem kết quả. Chưa ưng thì nói tiếp ngay trong phiên đó (ví dụ "chữ ở sidebar nhỏ quá, tăng lên"). Ưng rồi mới sang bước sau. Mỗi bước kết thúc bằng một commit nên lỡ hỏng vẫn quay lại được.

---

## Bước 1: Dọn thư mục, khởi tạo project

```
Đọc kỹ CLAUDE.md và NOI_DUNG_PORTFOLIO.md trước. Chưa viết giao diện ở bước này.

Việc cần làm:
1. Kiểm tra thư mục _source có đủ CV, Certificate, Logo. Nếu các thư mục CV, Certificate, Logo đang nằm ở gốc thì chuyển vào _source.
2. Khởi tạo git, tạo .gitignore có node_modules, dist, .env và _source/.
3. Khởi tạo project React + Vite (JavaScript) ngay tại thư mục gốc, giữ nguyên 4 file của tôi. Cài react-i18next, i18next, bootstrap và thư viện icon theo CLAUDE.md.
4. Tạo khung thư mục: src/components, src/data, src/i18n (en.json, vi.json), src/styles, public/img/logo, public/img/certificates, public/img/awards.
5. Chuyển hero_supply_chain.svg vào public/img/.
6. Tạo src/styles/theme.css chứa toàn bộ CSS variables màu và font trong CLAUDE.md, nạp Google Fonts Sora, Be Vietnam Pro, JetBrains Mono.
7. Tạo workflow GitHub Actions deploy lên GitHub Pages (build bằng Vite, base '/').
8. Chạy npm run dev, xác nhận trang trắng chạy được, rồi npm run build.

Cuối cùng liệt kê cây thư mục, xác nhận _source không bị git theo dõi (git status), rồi commit với thông điệp "step 1: project setup".
```

**Bạn kiểm tra:** chạy `git status` thấy không có `_source` trong danh sách là đạt.

---

## Bước 2: Xử lý ảnh, logo, chứng chỉ (có che thông tin cá nhân)

```
Xử lý toàn bộ ảnh trong _source sang public/img bằng Python (Pillow, PyMuPDF; tự cài nếu thiếu). Không sửa file gốc trong _source.

1. Logo: copy từ _source/Logo sang public/img/logo, đổi tên viết thường, dùng dấu gạch dưới thay khoảng trắng (ví dụ "hackathong UMT.jpg" thành umt_hackathon.jpg, "Data Science Academy.png" thành data_science_academy.png). Chuẩn hóa về PNG hoặc WebP, cạnh dài tối đa 256px. Riêng Linkedin.png đang có nền ô caro giả trong suốt bị in sẵn vào ảnh: hãy xóa nền đó hoặc báo tôi để tôi thay logo khác. Google.webp thu nhỏ còn 256px.
2. Chứng chỉ dạng PDF (AI Google, AIFORDA, DA Google, OR_NTU, VILAS): render trang 1 thành WebP rộng 1400px.
3. Tất cả chứng chỉ: tạo 2 bản, bản lớn (rộng tối đa 1400px) và bản thumbnail (rộng 480px), dạng WebP, mỗi file dưới 300KB. Chứng chỉ thuộc giải thưởng để trong public/img/awards, còn lại để trong public/img/certificates.
4. Che thông tin cá nhân bằng khối màu đặc (đọc ảnh để xác định đúng vị trí):
   a. ielts 7.5.jpg: phủ kín Candidate Number, Candidate ID, Date of Birth, ảnh chân dung, Test Report Form Number. Giữ lại tên, ngày thi, điểm 4 kỹ năng, Overall và CEFR.
   b. CTDSCHOLARS.jpg: phủ kín ô Ngày sinh và Nơi sinh.
5. Mở lại từng ảnh đã che để tự kiểm tra không còn lộ chữ số nào, rồi tạo file public/img/_preview.html hiển thị mọi ảnh đã xử lý kèm tên file để tôi duyệt.

Cuối cùng in bảng: tên file gốc, tên file mới, kích thước, dung lượng. DỪNG lại chờ tôi xem _preview.html, CHƯA commit.
```

**Bạn kiểm tra:** mở `http://localhost:5173/img/_preview.html`, soi kỹ ảnh IELTS và CTD. Ổn thì gõ: `Ảnh ổn rồi, xóa _preview.html và commit "step 2: processed images"`.

---

## Bước 3: Đổ dữ liệu và cài song ngữ

```
Tạo các file dữ liệu trong src/data theo đúng cấu trúc ở CLAUDE.md, lấy nội dung từ NOI_DUNG_PORTFOLIO.md, gắn đường dẫn ảnh và logo đã xử lý ở bước 2.

Yêu cầu:
1. Chép nguyên câu chữ tiếng Anh từ NOI_DUNG_PORTFOLIO.md, không tự thêm thành tích hay kỹ năng.
2. Viết bản tiếng Việt cho mọi trường văn bản, giọng chuyên nghiệp, giữ thuật ngữ chuyên ngành bằng tiếng Anh khi tự nhiên hơn (KPI, dashboard, S&OP, MPS/MRP).
3. Không dùng dấu gạch nối hay gạch ngang để nối từ, nối ý trong bất kỳ câu chữ nào.
4. Mục [CẦN XÁC NHẬN] thì bỏ qua và liệt kê lại cho tôi; mục chưa có file ảnh thì để trường ảnh trống.
5. Cấu hình react-i18next: tiếng Anh mặc định, nhớ lựa chọn ngôn ngữ bằng localStorage, chuỗi giao diện (tên mục, nút) nằm trong en.json và vi.json.
6. Viết một hàm nhỏ sắp xếp theo ngày mới nhất trước và hàm đếm số chứng chỉ, số giải thưởng.

Sau đó tạm render dữ liệu dạng danh sách thô trên trang để tôi đối chiếu đủ và đúng. Build không lỗi thì commit "step 3: data and i18n".
```

**Bạn kiểm tra:** đọc lướt danh sách thô, so với CV. Sai chữ nào thì sửa ở `NOI_DUNG_PORTFOLIO.md` rồi bảo Claude Code cập nhật lại dữ liệu.

---

## Bước 4: Sidebar, hero, dải KPI, About me

```
Dựng bố cục chính theo CLAUDE.md, tham khảo bố cục trang https://phuc16102001.github.io/ (sidebar cố định trái, nội dung cuộn phải) nhưng dùng màu, font và chi tiết supply chain của tôi.

1. Sidebar (nền navy): ảnh đại diện tròn viền teal (dùng avatar trong _source sau khi tối ưu sang public/img/avatar.webp; nếu chưa có thì hiện vòng tròn chữ "PT"), tên Pham Duc Tri, nhãn chức danh kiểu tem container, menu các mục đặt dọc theo đường tuyến nét đứt có scrollspy, hàng icon liên hệ (Email, LinkedIn, GitHub), nút chuyển EN/VI.
2. Hero: một ảnh public/img/hero_supply_chain.svg phủ ngang, cao khoảng 85vh, khung chữ chào ở bên trái gồm lời chào, một câu giới thiệu ngắn lấy từ Summary, hai nút "About me" và "Experience". Không làm carousel.
3. Dải KPI ngay dưới hero: GPA, thời gian thực tập, số giải thưởng, số chứng chỉ (tự đếm), số chạy từ 0 lên khi cuộn tới (tắt hiệu ứng nếu người dùng bật reduced motion).
4. Mục About me với tiêu đề có mã "01 · ABOUT".
5. Trên điện thoại sidebar thành thanh trên cùng có nút menu thu gọn.

Chụp màn hình bản desktop 1440px và mobile 390px bằng trình duyệt nếu có công cụ, tự sửa chỗ vỡ bố cục, rồi commit "step 4: layout, hero, about".
```

---

## Bước 5: Học vấn, kinh nghiệm, hoạt động

```
Làm 3 mục dạng timeline "tuyến vận chuyển" theo CLAUDE.md: 02 · EDUCATION, 03 · EXPERIENCE, 04 · LEADERSHIP & ACTIVITIES.

1. Mỗi mốc: logo tổ chức, tên vị trí hoặc bằng cấp, tên tổ chức, địa điểm, thời gian căn phải, các gạch đầu dòng mô tả.
2. Mốc Cofano nổi bật hơn: thêm huy hiệu "Live in Gemadept ecosystem" và chip KPI (Turnaround Time, OTP, Ballast Ratio); có nút xem chứng nhận thực tập mở lightbox.
3. Mốc RMUTL có nút xem chứng nhận trao đổi.
4. VSCC gom 3 vai trò dưới một tổ chức giống cách LinkedIn hiển thị.
5. Nút xem chứng nhận và lightbox viết thành component dùng chung để bước sau tái sử dụng; lightbox đóng được bằng phím Esc và bấm ra ngoài.

Kiểm tra cả hai ngôn ngữ, build không lỗi, commit "step 5: timelines".
```

---

## Bước 6: Kỹ năng, chứng chỉ, giải thưởng, dự án, footer

```
Làm các mục còn lại theo CLAUDE.md:

1. 05 · SKILLS: 4 nhóm (Data Analytics, Supply Chain, Soft skills, Languages), mỗi kỹ năng là chip; nhóm Data Analytics có icon công cụ (SQL, Power BI, Excel, Python).
2. 06 · PROJECTS: dữ liệu đang trống nên hiện thẻ "In transit: projects arriving soon" có container nhỏ chuyển động nhẹ. Khi projects.js có phần tử thì tự hiện lưới thẻ dự án (ảnh, tên, mô tả, công cụ, link GitHub hoặc demo).
3. 07 · CERTIFICATIONS: lưới thẻ (logo đơn vị, tên, đơn vị, ngày, mã nếu có, nút Verify nếu có link), chip lọc All / Supply Chain / Data / AI / Language, bấm thumbnail mở lightbox ảnh lớn. Thẻ không có ảnh vẫn đẹp.
4. 08 · HONORS & AWARDS: thẻ hoặc timeline có huy hiệu hạng giải màu amber, mô tả, nút xem chứng nhận.
5. Footer: bản quyền năm hiện tại, dòng "Last updated" lấy theo thời điểm build.

Build không lỗi, commit "step 6: skills, certificates, awards, projects".
```

---

## Bước 7: Hoàn thiện, kiểm tra chất lượng và quyền riêng tư

```
Rà soát toàn site trước khi đưa lên mạng:

1. Responsive ở 360, 390, 768, 1024, 1440px; sửa mọi chỗ tràn ngang hoặc chữ đè nhau.
2. Accessibility: alt cho mọi ảnh, focus nhìn thấy được khi dùng bàn phím, tương phản đạt WCAG AA, lightbox giữ focus bên trong.
3. Hiệu năng: lazy load ảnh, font có display swap, chạy Lighthouse nếu có công cụ và báo điểm.
4. SEO và chia sẻ: title "Pham Duc Tri | Supply Chain Analyst", meta description từ Summary, ảnh Open Graph PNG 1200x630 xuất từ hero, favicon hình container nhỏ theo màu teal và amber.
5. Văn phong: quét en.json, vi.json và src/data, liệt kê mọi chỗ có dấu gạch nối hoặc gạch ngang trong câu chữ hiển thị và sửa lại (giữ nguyên URL, tên thư viện).
6. Quyền riêng tư: chạy lệnh quét chuỗi cấm trong CLAUDE.md trên toàn repo (trừ _source và node_modules), xác nhận _source không được git theo dõi, xác nhận ảnh IELTS và CTD trong public là bản đã che.

Báo cáo từng mục đạt hay chưa, sửa xong thì commit "step 7: polish and checks".
```

---

## Bước 8: Đưa lên GitHub Pages

```
Đưa site lên GitHub:
1. Thêm remote https://github.com/triphamsca88/triphamsca88.github.io.git, đổi nhánh chính thành main, push.
2. Hướng dẫn tôi từng thao tác bật GitHub Pages với nguồn GitHub Actions (Settings, Pages, Build and deployment) nếu cần làm trên web.
3. Theo dõi workflow chạy xong, mở https://triphamsca88.github.io/ kiểm tra ảnh, font, chuyển ngôn ngữ đều hoạt động.
4. Nếu lỗi đăng nhập git, hướng dẫn tôi đăng nhập (GitHub CLI hoặc Git Credential Manager), không yêu cầu tôi dán token vào chat.
```

Xong bước này, gắn link `https://triphamsca88.github.io/` vào mục Website/Contact info trên LinkedIn và vào CV.

---

## Phụ lục: prompt cập nhật về sau

### Thêm chứng chỉ mới

```
Tôi vừa thêm file chứng chỉ mới vào _source/Certificate/<TÊN FILE>.
Thông tin: tên "<...>", đơn vị cấp "<...>", ngày "<...>", mã "<...>", link xác minh "<...>", nhóm "<supply chain / data / ai / language>".
Hãy: cập nhật NOI_DUNG_PORTFOLIO.md, xử lý ảnh như bước 2 (bản lớn và thumbnail WebP, che thông tin cá nhân nếu có), thêm vào src/data/certificates.js kèm mô tả tiếng Việt, kiểm tra build, commit "add certificate: <tên ngắn>" và push.
```

### Thêm giải thưởng hoặc cuộc thi

```
Tôi vừa đạt giải "<hạng>" tại "<tên cuộc thi>" do "<đơn vị>" tổ chức, ngày "<...>". Vai trò và đóng góp của tôi: "<2 đến 3 câu>". File chứng nhận: _source/Certificate/<...>, logo: _source/Logo/<...>.
Cập nhật NOI_DUNG_PORTFOLIO.md, xử lý ảnh, thêm vào awards.js (song ngữ, không dùng dấu gạch nối trong câu), kiểm tra build, commit và push.
```

### Thêm dự án đầu tiên

```
Thêm dự án vào mục Projects:
Tên "<...>", bối cảnh và vấn đề "<...>", cách làm và công cụ "<SQL, Power BI, Python...>", kết quả đo được "<...>", link GitHub "<...>", ảnh minh họa _source/Projects/<...>.
Viết mô tả song ngữ theo cấu trúc Problem, Approach, Result; tối ưu ảnh; khi đã có dự án thì thẻ "In transit" phải tự ẩn. Kiểm tra build, commit và push.
```

### Cập nhật kinh nghiệm hoặc hoạt động

```
Cập nhật mục <Experience / Leadership>: <mô tả thay đổi>. Sửa NOI_DUNG_PORTFOLIO.md trước rồi đồng bộ sang src/data, giữ văn phong không gạch nối, kiểm tra build, commit và push.
```

---

## [CẦN XÁC NHẬN] trước hoặc trong lúc làm

1. **Ảnh đại diện:** chưa có trong zip. Thêm `_source/avatar.jpg`.
2. **Google Project Management:** CV có ghi nhưng không có file và không có trên LinkedIn; trên LinkedIn lại có **Google AI Professional Certificate** (đúng với file `AI Google.pdf`). Bộ nội dung đang dùng Google AI và tạm bỏ Project Management.
3. **5 chứng chỉ chưa có file:** CSCMP Inventory Management, Excel Supply Chain Analysis: Solving Inventory Problems, Excel Data Analysis for Supply Chain: Forecasting (LinkedIn Learning), Udemy Data Processing & Dashboard Building, Data Science Academy Certified Data Analyst Foundation. Vẫn hiện trên web dạng thẻ không ảnh; bổ sung ảnh và link "Show credential" khi có.
4. **NP English Academy (Teaching Assistant):** có trên LinkedIn nhưng không có trong CV. Đang đưa vào Experience; nếu muốn bỏ hoặc thêm mô tả thì báo.
5. **Kindnom Volunteer Club:** thiếu thời gian tham gia và logo.
6. **Ngày LSMSE:** LinkedIn ghi May 2025, chứng nhận ghi 19 Oct 2025; đang dùng ngày trên chứng nhận.
7. **Ảnh chứng nhận LSMSE** có cụm "financial hardship"; bạn quyết định có hiển thị ảnh hay chỉ ghi tên học bổng.
8. **IELTS:** ngày thi 26 Aug 2023, theo quy ước bảng điểm có giá trị tham chiếu 2 năm. Vẫn liệt kê bình thường kèm năm thi.
9. **Nút tải CV:** cả 3 bản CV đều có địa chỉ nhà và số điện thoại. Nếu muốn có nút tải CV, hãy chuẩn bị một bản chỉ giữ email và LinkedIn.
