// Source of truth: NOI_DUNG_PORTFOLIO.md, section 4.
// An organisation may hold several roles (shown grouped, like LinkedIn).

const leadership = [
  {
    id: 'vscc',
    org: 'VILAS Supply Chain Club (VSCC)',
    logo: 'img/logo/vscc.webp',
    roles: [
      {
        title: {
          en: 'Vice Head of Academy Department',
          vi: 'Phó Trưởng ban Học thuật',
        },
        context: { en: 'Vietnam Supply Chain Challenge 2027', vi: 'Vietnam Supply Chain Challenge 2027' },
        start: '2026-08',
        end: '2026-09',
        description: {
          en: 'Directed Business Case formulation and executed data quality checks for a national logistics competition; coordinated collaboration across departments to secure strategic sponsorships and onboard industry experts as mentors and panel judges.',
          vi: 'Chỉ đạo xây dựng Business Case và kiểm tra chất lượng dữ liệu cho một cuộc thi logistics cấp quốc gia; điều phối phối hợp liên ban để kêu gọi nhà tài trợ chiến lược và mời chuyên gia ngành tham gia làm mentor và giám khảo.',
        },
      },
      {
        title: {
          en: 'Organising Committee, Planning and Academy Department',
          vi: 'Ban Tổ chức, Ban Kế hoạch và Học thuật',
        },
        context: { en: 'VSCC Internal Competition (VIC)', vi: 'VSCC Internal Competition (VIC)' },
        workType: { en: 'Part time', vi: 'Bán thời gian' },
        start: '2026-08',
        end: '2026-09',
        description: {
          en: 'Designed the overall framework, competition format and rulebook for the VSCC Internal Case; directed event planning from end to end, from venue sourcing and timelines to onsite operations.',
          vi: 'Thiết kế khung tổng thể, thể thức thi và thể lệ cho VSCC Internal Case; chỉ đạo lập kế hoạch sự kiện end to end, từ tìm địa điểm, xây dựng timeline đến vận hành tại chỗ.',
        },
      },
      {
        title: {
          en: 'Member of Operations Department',
          vi: 'Thành viên Ban Vận hành',
        },
        workType: { en: 'Part time', vi: 'Bán thời gian' },
        start: '2026-05',
        end: '2026-07',
        description: {
          en: 'Developed timelines, allocated resources and coordinated end to end event operations to ensure timely delivery.',
          vi: 'Xây dựng timeline, phân bổ nguồn lực và điều phối vận hành sự kiện end to end để đảm bảo tiến độ.',
        },
      },
    ],
  },
  {
    id: 'lsmse',
    org: 'LSMSE (Sunflower Mission)',
    logo: 'img/logo/lsmse.webp',
    roles: [
      {
        title: { en: 'Project Leader' },
        context: { en: 'Scholarship Award Ceremony 2025 to 2026' },
        start: '2025-10',
        end: '2026-05',
        bullets: [
          { en: 'Managed end to end planning, budgeting and task allocation across the Design, Logistics and Content departments.' },
          { en: 'Directed event operations, from venue sourcing and onsite technical control to risk mitigation.' },
          { en: 'Facilitated stakeholder relations by preparing recipient certificates and coordinating online attendance for international alumni and guests.' },
        ],
      },
      {
        title: { en: 'Logistics Team Lead' },
        context: { en: 'Ba Lô Ba Miền 2025, Phan Thiet' },
        start: '2025-07',
        end: '2025-08',
        bullets: [
          { en: 'Directed logistics operations and budget estimation for team building activities, covering equipment procurement, venue bookings and vendor management.' },
          { en: 'Formulated risk mitigation plans for weather and technical contingencies.' },
          { en: 'Coordinated event scripts to ensure seamless execution.' },
        ],
      },
    ],
  },
  {
    id: 'kindnom',
    org: 'Kindnom Volunteer Club (VNV)',
    logo: 'img/logo/vnv.webp',
    roles: [
      {
        title: { en: 'Project Coordinator', vi: 'Điều phối viên Dự án' },
        context: { en: 'Mầm Thương Project', vi: 'Dự án Mầm Thương' },
        start: '2026-03',
        end: '2026-03',
        description: {
          en: 'Managed planning, budgeting and risk mitigation for charity projects; organised scholarship award ceremonies.',
          vi: 'Quản lý lập kế hoạch, ngân sách và giảm thiểu rủi ro cho các dự án thiện nguyện; tổ chức các lễ trao học bổng.',
        },
      },
    ],
  },
]

export default leadership
