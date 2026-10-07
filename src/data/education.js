// Source of truth: NOI_DUNG_PORTFOLIO.md, section 2.

const education = [
  {
    id: 'ueh',
    org: 'University of Economics Ho Chi Minh City (UEH)',
    logo: 'img/logo/ueh.webp',
    location: { en: 'Ho Chi Minh City, Vietnam', vi: 'TP. Hồ Chí Minh, Việt Nam' },
    title: {
      en: 'Bachelor of Engineering in Logistics Technology (155 credits)',
      vi: 'Kỹ sư Công nghệ Logistics (155 tín chỉ)',
    },
    start: '2024-08',
    end: null, // ongoing
    highlight: { label: 'GPA', value: '3.89/4.00 (9.1/10)' },
    bullets: [
      {
        en: 'Track: Data Analytics, Demand Forecasting, Inventory Management, Lean Six Sigma, AI and IoT Applications',
        vi: 'Định hướng: Phân tích dữ liệu, Dự báo nhu cầu, Quản trị tồn kho, Lean Six Sigma, Ứng dụng AI và IoT',
      },
    ],
  },
  {
    id: 'rmutl',
    org: 'Rajamangala University of Technology Lanna (RMUTL)',
    logo: 'img/logo/rmutl.webp',
    location: { en: 'Chiang Mai, Thailand', vi: 'Chiang Mai, Thái Lan' },
    title: {
      en: 'International Student Exchange Program',
      vi: 'Chương trình Trao đổi Sinh viên Quốc tế',
    },
    subtitle: {
      en: 'Faculty of Engineering RMUTL in collaboration with UEH College of Technology and Design',
      vi: 'Khoa Kỹ thuật RMUTL phối hợp cùng Trường Công nghệ và Thiết kế UEH',
    },
    start: '2026-06-24',
    end: '2026-07-02',
    bullets: [
      {
        en: 'Applied research on Automated Guided Vehicles and Autonomous Mobile Robots (AGV/AMR) for smart warehouse operations and storage automation; completed academic lectures, laboratory practice, robotics and automation workshops and cultural exchange activities.',
        vi: 'Nghiên cứu ứng dụng xe tự hành dẫn hướng và robot di động tự hành (AGV/AMR) cho vận hành kho thông minh và tự động hóa lưu trữ; hoàn thành các bài giảng học thuật, thực hành phòng thí nghiệm, workshop robot và tự động hóa cùng các hoạt động giao lưu văn hóa.',
      },
    ],
    certificate: {
      image: 'img/certificates/rmutl_exchange.webp',
      thumb: 'img/certificates/rmutl_exchange_thumb.webp',
      label: { en: 'Exchange certificate', vi: 'Chứng nhận trao đổi' },
      alt: 'RMUTL International Student Exchange Program certificate of participation',
    },
  },
]

export default education
