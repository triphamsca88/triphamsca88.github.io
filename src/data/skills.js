// Source of truth: NOI_DUNG_PORTFOLIO.md, section 5.
// Data Analytics tools show the software's own logo (public/img/tools).
// Languages show the CEFR level and IELTS band scores (out of 9).

const skills = [
  {
    id: 'data',
    icon: 'data',
    layout: 'tools',
    title: { en: 'Data Analytics', vi: 'Phân tích dữ liệu' },
    items: [
      { logo: 'img/tools/mysql.svg', name: 'SQL', detail: { en: 'MySQL' } },
      { logo: 'img/tools/powerbi.svg', name: 'Power BI' },
      { logo: 'img/tools/excel.svg', name: { en: 'Advanced Excel' }, detail: { en: 'Pivot Tables, XLOOKUP, Power Query, DAX' } },
      { logo: 'img/tools/python.svg', name: 'Python', detail: { en: 'Basic' } },
    ],
  },
  {
    id: 'supply_chain',
    icon: 'supply',
    title: { en: 'Supply Chain', vi: 'Chuỗi cung ứng' },
    items: [
      { label: { en: 'End to End Supply Chain Overview', vi: 'Tổng quan chuỗi cung ứng end to end' } },
      { label: { en: 'Demand Forecasting', vi: 'Dự báo nhu cầu' } },
      { label: { en: 'S&OP', vi: 'S&OP' } },
      { label: { en: 'Inventory Management', vi: 'Quản trị tồn kho' } },
      { label: { en: 'Lean Six Sigma', vi: 'Lean Six Sigma' } },
      { label: { en: 'Network Optimisation', vi: 'Tối ưu mạng lưới' } },
      { label: { en: 'Warehouse Operations', vi: 'Vận hành kho' } },
      { label: { en: 'Logistics Management', vi: 'Quản trị logistics' } },
      { label: { en: 'Vehicle Routing', vi: 'Định tuyến phương tiện' } },
    ],
  },
  {
    id: 'soft',
    icon: 'soft',
    title: { en: 'Soft skills', vi: 'Kỹ năng mềm' },
    items: [
      { label: { en: 'Project Management', vi: 'Quản lý dự án' } },
      { label: { en: 'Risk Management', vi: 'Quản trị rủi ro' } },
      { label: { en: 'Stakeholder Management', vi: 'Quản lý các bên liên quan' } },
      { label: { en: 'Team Coordination', vi: 'Điều phối nhóm' } },
      { label: { en: 'Problem Solving', vi: 'Giải quyết vấn đề' } },
      { label: { en: 'Planning and Execution', vi: 'Lập kế hoạch và triển khai' } },
    ],
  },
  {
    id: 'languages',
    icon: 'languages',
    layout: 'languages',
    title: { en: 'Languages', vi: 'Ngôn ngữ' },
    items: [
      {
        name: { en: 'English' },
        cefr: 'C1',
        test: 'IELTS Academic',
        overall: 7.5,
        bands: [
          { label: 'Listening', score: 7.5 },
          { label: 'Reading', score: 7.5 },
          { label: 'Writing', score: 6.5 },
          { label: 'Speaking', score: 7.5 },
        ],
      },
    ],
  },
]

export default skills
