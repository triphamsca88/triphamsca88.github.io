// Source of truth: NOI_DUNG_PORTFOLIO.md, section 6.

const awards = [
  {
    id: 'ctd-scholars-2025',
    rank: { en: 'Second Prize (Giải B)', vi: 'Giải B (Giải Nhì)' },
    title: 'Student Scientific Research Award, CTD Scholars Student Awards 2025',
    theme: { en: 'Theme: Technology and Sustainable Development', vi: 'Chủ đề: Công nghệ và Phát triển bền vững' },
    org: 'Youth Union and Student Association of UEH, UEH College of Technology and Design',
    logo: 'img/logo/ctd_scholars.webp',
    date: '2026-04-17', // decision date on the certificate; award edition 2025
    description: {
      en: 'Research topic: Application of AI and IoT in Verifying the Transparency of Clean Food Supply Chains with Blockchain Technology Integration. Led the IoT and Data workstream; built a real time monitoring dashboard and a quantitative model to forecast product shelf life.',
      vi: 'Đề tài: Ứng dụng AI và IoT trong xác thực tính minh bạch của chuỗi cung ứng thực phẩm sạch tích hợp công nghệ Blockchain. Phụ trách mảng IoT và Dữ liệu; xây dựng dashboard giám sát theo thời gian thực và mô hình định lượng dự báo hạn sử dụng sản phẩm.',
    },
    image: 'img/awards/ctd_scholars_2025_unmasked.webp',
    thumb: 'img/awards/ctd_scholars_2025_unmasked_thumb.webp',
    alt: 'CTD Scholars Student Awards 2025 certificate, Second Prize',
  },
  {
    id: 'scmission-2026',
    rank: { en: 'Top 20', vi: 'Top 20' },
    title: 'SCMission 2026: The Vanguard (team SOTA)',
    org: 'Logistics Studying Club, FTU HCMC',
    logo: 'img/logo/scmission.webp',
    date: '2026-05',
    description: {
      en: 'Analysed bottlenecks in material supply, production capacity and logistics; formulated MPS/MRP schedules, capacity based production plans and optimised distribution strategies across multiple distribution centres.',
      vi: 'Phân tích điểm nghẽn trong cung ứng nguyên vật liệu, năng lực sản xuất và logistics; lập lịch MPS/MRP, kế hoạch sản xuất theo năng lực và tối ưu chiến lược phân phối qua nhiều trung tâm phân phối.',
    },
    image: 'img/awards/scmission_2026.webp',
    thumb: 'img/awards/scmission_2026_thumb.webp',
    alt: 'SCMission 2026 certificate of appreciation, Top 20, team SOTA',
  },
  {
    id: 'last-mile-2025',
    rank: { en: 'Third Prize', vi: 'Giải Ba' },
    title: 'Last Mile Delivery Optimizer 2025',
    org: 'Institute of Intelligent and Interactive Technologies (I3T), UEH College of Technology and Design',
    logo: 'img/logo/i3t_lastmile.webp',
    date: '2025-12-28',
    description: {
      en: 'Applied quantitative models and data analytics to solve vehicle routing problems and minimise last mile delivery costs.',
      vi: 'Ứng dụng mô hình định lượng và phân tích dữ liệu để giải bài toán định tuyến phương tiện và tối thiểu hóa chi phí giao hàng chặng cuối.',
    },
    image: 'img/awards/last_mile_optimizer_2025.webp',
    thumb: 'img/awards/last_mile_optimizer_2025_thumb.webp',
    alt: 'Last Mile Delivery Optimizer 2025 certificate of participation, Third Prize',
  },
  {
    id: 'hackathon-digiport-2025',
    rank: { en: 'Top 10 Semifinalist', vi: 'Top 10 Bán kết' },
    title: 'Hackathon Digiport Logistics 2025',
    theme: {
      en: 'Theme: Digital Transformation for the Future of Seaports',
      vi: 'Chủ đề: Chuyển đổi số cho tương lai cảng biển',
    },
    org: 'UMT University, with Consulate General of the Netherlands and Tan Cang STC',
    logo: 'img/logo/umt_hackathon.webp',
    date: '2025-11-11',
    description: {
      en: 'Pitched a data driven barge scheduling algorithm (BOE) to maximise fleet capacity utilisation and relieve port congestion, earning an early Supply Chain Intern offer from Cofano Software Solutions Asia.',
      vi: 'Trình bày thuật toán điều độ sà lan dựa trên dữ liệu (BOE) nhằm tối đa hóa hiệu suất sử dụng đội tàu và giảm ùn tắc cảng, nhận lời mời thực tập Supply Chain sớm từ Cofano Software Solutions Asia.',
    },
    image: 'img/awards/hackathon_digiport_2025.webp',
    thumb: 'img/awards/hackathon_digiport_2025_thumb.webp',
    alt: 'Hackathon Digiport Logistics 2025 certificate of achievement, Top 10 Semifinalist',
  },
  {
    id: 'lsmse-2025',
    rank: { en: 'Scholarship', vi: 'Học bổng' },
    title: 'LSMSE Scholar, Le So Memorial Scholarship of Excellence',
    org: 'Sunflower Mission',
    logo: 'img/logo/lsmse.webp',
    date: '2025-10-19',
    description: {
      en: 'Awarded the title LSMSE Scholar in recognition of academic excellence.',
      vi: 'Được trao danh hiệu LSMSE Scholar nhằm ghi nhận thành tích học tập xuất sắc.',
    },
    image: 'img/awards/lsmse_scholar_2025.webp',
    thumb: 'img/awards/lsmse_scholar_2025_thumb.webp',
    alt: 'Le So Memorial Scholarship of Excellence certificate, LSMSE Scholar, Sunflower Mission',
  },
]

export default awards
