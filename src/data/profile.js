// Source of truth: NOI_DUNG_PORTFOLIO.md, section 1.
// Never add home address, phone number, date or place of birth here.

const profile = {
  name: 'Pham Duc Tri',
  nameVi: 'Phạm Đức Trí',
  initials: 'PT',
  avatar: 'img/avatar.webp', // from _source/avatar.png via scripts/process_images.py
  title: {
    en: 'Supply Chain Analyst Intern',
    vi: 'Thực tập sinh Phân tích Chuỗi cung ứng',
  },
  tagline: {
    en: 'Logistics Technology student at UEH',
    vi: 'Sinh viên Công nghệ Logistics tại UEH',
  },
  email: 'tripham.sca79@gmail.com',
  linkedin: 'https://www.linkedin.com/in/duc-tri-pham-210730393/',
  github: 'https://github.com/triphamsca88',
  facebook: 'https://www.facebook.com/pham.uc.tri.444071',
  summary: {
    en: 'Third year Logistics Technology student with a proactive, improvement driven mindset and a solid foundation in supply chain data analytics. Completed a four month internship at Cofano, contributing to a performance analytics dashboard for barge fleet operations that now runs in live operation within the Gemadept ecosystem. Aiming to become a Supply Chain Analyst who uses data to support optimal decision making in demand forecasting, inventory management, process streamlining and operational efficiency.',
    vi: 'Sinh viên năm ba ngành Công nghệ Logistics với tư duy chủ động, luôn hướng đến cải tiến và nền tảng vững về phân tích dữ liệu chuỗi cung ứng. Đã hoàn thành kỳ thực tập bốn tháng tại Cofano, đóng góp vào dashboard phân tích hiệu suất cho hoạt động đội sà lan, hiện đang vận hành thực tế trong hệ sinh thái Gemadept. Mục tiêu trở thành Supply Chain Analyst dùng dữ liệu để hỗ trợ ra quyết định tối ưu trong dự báo nhu cầu, quản trị tồn kho, tinh gọn quy trình và nâng cao hiệu quả vận hành.',
  },
  // Phrases of the Summary emphasised in About (verbatim substrings). tone: 'strong' = navy, 'accent' = teal marker.
  summaryHighlights: [
    { text: 'proactive, improvement driven mindset', tone: 'strong' },
    { text: 'supply chain data analytics', tone: 'accent' },
    { text: 'four month internship at Cofano', tone: 'strong' },
    { text: 'live operation within the Gemadept ecosystem', tone: 'accent' },
    { text: 'Supply Chain Analyst', tone: 'strong' },
    { text: 'optimal decision making', tone: 'accent' },
  ],
  // Short line for the hero, the closing sentence of the Summary verbatim.
  intro: {
    en: 'Aiming to become a Supply Chain Analyst who uses data to support optimal decision making in demand forecasting, inventory management, process streamlining and operational efficiency.',
    vi: 'Mục tiêu trở thành Supply Chain Analyst dùng dữ liệu để hỗ trợ ra quyết định tối ưu trong dự báo nhu cầu, quản trị tồn kho, tinh gọn quy trình và nâng cao hiệu quả vận hành.',
  },
  // KPI strip. Awards and certificates are counted from data, never hard coded.
  gpa: { value: 3.89, decimals: 2, suffix: '/4.00', note: '9.1/10' },
  internshipMonths: 4,
}

export default profile
