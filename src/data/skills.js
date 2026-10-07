// Source of truth: NOI_DUNG_PORTFOLIO.md, section 5.
// `icon` keys map to small inline SVG marks in components/ToolIcon.jsx.

const skills = [
  {
    id: 'data',
    code: 'DA',
    title: { en: 'Data Analytics', vi: 'Phân tích dữ liệu' },
    items: [
      { icon: 'sql', label: { en: 'SQL (MySQL)', vi: 'SQL (MySQL)' } },
      { icon: 'powerbi', label: { en: 'Power BI', vi: 'Power BI' } },
      {
        icon: 'excel',
        label: {
          en: 'Advanced Excel (Pivot Tables, XLOOKUP, Power Query, DAX)',
          vi: 'Excel nâng cao (Pivot Tables, XLOOKUP, Power Query, DAX)',
        },
      },
      { icon: 'python', label: { en: 'Python (basic)', vi: 'Python (cơ bản)' } },
    ],
  },
  {
    id: 'supply_chain',
    code: 'SC',
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
    code: 'SS',
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
    code: 'LG',
    title: { en: 'Languages', vi: 'Ngôn ngữ' },
    items: [
      { label: { en: 'English (IELTS Academic 7.5, CEFR C1)', vi: 'Tiếng Anh (IELTS Academic 7.5, CEFR C1)' } },
      { label: { en: 'Vietnamese (Native)', vi: 'Tiếng Việt (Bản ngữ)' } },
    ],
  },
]

export default skills
