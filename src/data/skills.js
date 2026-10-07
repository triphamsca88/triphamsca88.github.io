// Source of truth: NOI_DUNG_PORTFOLIO.md, section 5.
// `icon` on a group maps to a lucide icon in components/Skills.jsx;
// `icon` on a tool maps to a small brand style mark in components/ToolIcon.jsx.
// Language `cefr` positions the level on the A1 to C2 scale ('native' fills it).

const skills = [
  {
    id: 'data',
    icon: 'data',
    layout: 'tools',
    title: { en: 'Data Analytics', vi: 'Phân tích dữ liệu' },
    items: [
      { icon: 'sql', name: 'SQL', detail: { en: 'MySQL', vi: 'MySQL' } },
      { icon: 'powerbi', name: 'Power BI' },
      {
        icon: 'excel',
        name: { en: 'Advanced Excel', vi: 'Excel nâng cao' },
        detail: { en: 'Pivot Tables, XLOOKUP, Power Query, DAX', vi: 'Pivot Tables, XLOOKUP, Power Query, DAX' },
      },
      { icon: 'python', name: 'Python', detail: { en: 'Basic', vi: 'Cơ bản' } },
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
      { label: { en: 'MPS/MRP', vi: 'MPS/MRP' } },
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
        name: { en: 'English', vi: 'Tiếng Anh' },
        detail: { en: 'IELTS Academic 7.5, CEFR C1', vi: 'IELTS Academic 7.5, CEFR C1' },
        cefr: 'C1',
      },
      {
        name: { en: 'Vietnamese', vi: 'Tiếng Việt' },
        detail: { en: 'Native', vi: 'Bản ngữ' },
        cefr: 'native',
      },
    ],
  },
]

export const CEFR_LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']

export default skills
