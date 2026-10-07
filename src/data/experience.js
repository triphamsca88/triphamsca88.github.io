// Source of truth: NOI_DUNG_PORTFOLIO.md, section 3.

const experience = [
  {
    id: 'cofano',
    featured: true,
    title: { en: 'Supply Chain Analyst Intern', vi: 'Thực tập sinh Phân tích Chuỗi cung ứng' },
    org: 'Cofano Software Solutions Asia (Cofano Asia)',
    logo: 'img/logo/cofano.webp',
    location: { en: 'Binh Thanh, Ho Chi Minh City', vi: 'Bình Thạnh, TP. Hồ Chí Minh' },
    workType: { en: 'Hybrid', vi: 'Hybrid' },
    start: '2026-04',
    end: '2026-07',
    badge: { en: 'Live in Gemadept ecosystem', vi: 'Đang vận hành trong hệ sinh thái Gemadept' },
    project: {
      en: 'Project: Performance and Optimization Dashboard for barge fleet operations, running live within the Gemadept ecosystem.',
      vi: 'Dự án: Dashboard Hiệu suất và Tối ưu cho hoạt động đội sà lan, đang vận hành thực tế trong hệ sinh thái Gemadept.',
    },
    kpis: ['Turnaround Time', 'OTP', 'Ballast Ratio'],
    bullets: [
      {
        en: 'Established the calculation logic for barge fleet operational KPIs (Turnaround Time, OTP, Ballast Ratio) from raw data to accurately measure inland waterway supply chain performance.',
        vi: 'Xây dựng logic tính toán các KPI vận hành đội sà lan (Turnaround Time, OTP, Ballast Ratio) từ dữ liệu thô nhằm đo lường chính xác hiệu suất chuỗi cung ứng đường thủy nội địa.',
      },
      {
        en: 'Developed an interactive dashboard visualising cargo flows and vessel status in real time, enabling management to filter data by ICD, route and customer.',
        vi: 'Phát triển dashboard tương tác trực quan hóa dòng hàng và trạng thái phương tiện theo thời gian thực, giúp ban quản lý lọc dữ liệu theo ICD, tuyến và khách hàng.',
      },
      {
        en: 'Analysed transaction data to identify bottlenecks, waste ratios and anomalies, supporting capacity optimisation and reducing the cargo rejection rate.',
        vi: 'Phân tích dữ liệu giao dịch để nhận diện điểm nghẽn, tỷ lệ lãng phí và bất thường, hỗ trợ tối ưu công suất và giảm tỷ lệ từ chối hàng.',
      },
      {
        en: 'Produced detailed analysis reports and a User Guide that enabled the Barge Dispatch and Voyage Management teams to turn data into effective execution decisions.',
        vi: 'Soạn báo cáo phân tích chi tiết và tài liệu User Guide, giúp đội Điều phối Sà lan và Quản lý Chuyến đi chuyển dữ liệu thành quyết định thực thi hiệu quả.',
      },
    ],
    certificate: {
      image: 'img/certificates/cofano_internship.webp',
      thumb: 'img/certificates/cofano_internship_thumb.webp',
      label: { en: 'Internship certificate', vi: 'Chứng nhận thực tập' },
      alt: 'Cofano Asia certificate of participation, Internship Program, Project: Performance and Optimization Dashboard',
    },
  },
  {
    id: 'np-english',
    title: { en: 'Teaching Assistant', vi: 'Trợ giảng' },
    org: 'NP English Academy',
    logo: 'img/logo/np_english.webp',
    location: { en: 'Ho Chi Minh City', vi: 'TP. Hồ Chí Minh' },
    workType: { en: 'Part time, Hybrid', vi: 'Bán thời gian, Hybrid' },
    start: '2024-07',
    end: '2025-12',
    bullets: [
      { en: 'Supported English language teaching.', vi: 'Hỗ trợ giảng dạy tiếng Anh.' },
    ],
  },
]

export default experience
