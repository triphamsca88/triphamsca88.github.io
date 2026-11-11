// Source of truth: NOI_DUNG_PORTFOLIO.md, section 8.
// Each project renders as a case study: text on the left, a media viewer on the right.
// When the list is empty the Projects section shows the "In transit" state instead.
//
// media items: { type: 'image' | 'video', src, thumb, poster (video), duration (video), caption, alt }

const projects = [
  {
    id: 'aiot-clean-food',
    code: 'CASE 01',
    stream: 'AIoT',
    date: '2026-04-17', // CTD Scholars decision date; award edition 2025
    year: '2025',
    title: { en: 'AIoT Traceability for Clean Food Supply Chains' },
    topic: {
      en: 'Research topic: Application of AI and IoT in Verifying the Transparency of Clean Food Supply Chains with Blockchain Technology Integration',
    },
    award: { en: 'Second Prize, CTD Scholars Student Awards 2025' },
    tags: ['IoT', 'Data', 'Cold chain monitoring', 'Traceability'],
    overview: {
      en: 'A student research project that applies AI and IoT to verify transparency in the clean food supply chain, with blockchain integration. The team built a web platform that connects suppliers, carriers, central warehouses, supermarkets, consumers and regulators: goods carry QR codes, camera based AI checks them at warehouse and supermarket receiving, and IoT sensors monitor them in transit.',
    },
    problem: {
      en: 'Fresh produce loses quality quickly when temperature and humidity drift during transport, and buyers have little way to verify how a product was handled before it reached the shelf.',
    },
    role: [
      { en: 'Led the IoT and Data workstream of the project.' },
      { en: 'Built the real time monitoring dashboard for container temperature and humidity.' },
      { en: 'Developed a quantitative model to forecast product shelf life, shown as remaining shelf life (RSL) and TTE for each product.' },
      { en: 'Designed the Level 0 data flow diagram (DFD) for the platform’s information system.' },
    ],
    pipeline: [
      { code: 'SENSE', title: { en: 'DHT11 sensor' }, detail: { en: 'Reads temperature and relative humidity every 2 seconds.' } },
      { code: 'EDGE', title: { en: 'ESP8266 edge node' }, detail: { en: 'Validates each reading, filters missing values, logs sensor errors and computes a first dew risk.' } },
      { code: 'PIPELINE', title: { en: 'IoT data layer' }, detail: { en: 'Processes the validated readings for the application layer.' } },
      { code: 'API', title: { en: 'HTTP API' }, detail: { en: 'GET /api/now returns the latest record as JSON.' } },
      { code: 'DASHBOARD', title: { en: 'Real time dashboard' }, detail: { en: 'React interface that refreshes every 2 seconds and tracks current, average, minimum and maximum values.' } },
      { code: 'ALERT', title: { en: 'Rule engine' }, detail: { en: 'Flags dew and shrivel risk, targeting detection within 10 seconds and a false alarm rate of 5% or less, then shows alerts and exports logs.' } },
    ],
    tools: ['ESP8266', 'DHT11', 'React', 'Chart.js', 'HTTP API (JSON)', 'Data flow diagram'],
    results: [
      { en: 'Second Prize, Student Scientific Research Award, CTD Scholars Student Awards 2025.' },
      { en: 'Working prototype: the sensor kit placed in a foam box that simulates a container, tested with mandarins, red apples and golden pears.' },
      { en: 'In the recorded demo the dashboard tracked the container between 26.4°C and 33.2°C while estimating RSL and TTE for each fruit.' },
    ],
    github: 'https://github.com/triphamsca88/AIOT-Project',
    certificate: {
      image: 'img/awards/ctd_scholars_2025_unmasked.webp',
      alt: 'CTD Scholars Student Awards 2025 certificate, Second Prize',
      caption: 'Second Prize, Student Scientific Research Award, CTD Scholars Student Awards 2025',
    },
    media: [
      {
        type: 'image',
        src: 'img/projects/aiot/dashboard.webp',
        thumb: 'img/projects/aiot/dashboard_thumb.webp',
        caption: 'Real time dashboard: container temperature and humidity, with RSL and TTE for each product (interface in Vietnamese).',
        alt: 'Monitoring dashboard with temperature and humidity charts and three fruit orders with shelf life figures',
      },
      {
        type: 'video',
        src: 'video/aiot_iot_demo.mp4',
        poster: 'img/projects/aiot/poster_iot.webp',
        thumb: 'img/projects/aiot/poster_iot_thumb.webp',
        duration: '1:04',
        caption: 'IoT demo: the sensor kit, the container test and the live dashboard.',
        alt: 'IoT demo video',
      },
      {
        type: 'image',
        src: 'img/projects/aiot/hardware.webp',
        thumb: 'img/projects/aiot/hardware_thumb.webp',
        caption: 'Hardware kit: ESP8266 board and DHT11 sensor on a breadboard, powered by a power bank.',
        alt: 'ESP8266 board and DHT11 sensor wired on a breadboard next to a power bank',
      },
      {
        type: 'image',
        src: 'img/projects/aiot/foam_container.webp',
        thumb: 'img/projects/aiot/foam_container_thumb.webp',
        caption: 'The sensor kit inside a foam box with fruit, simulating a container.',
        alt: 'Foam box with mandarins, apples and pears and the sensor kit',
      },
      {
        type: 'image',
        src: 'img/projects/aiot/mobile_kpi.webp',
        thumb: 'img/projects/aiot/mobile_kpi_thumb.webp',
        caption: 'Mobile view: live temperature and humidity KPIs with shelf life for each product.',
        alt: 'Mobile dashboard view with temperature KPIs and three products',
      },
      {
        type: 'image',
        src: 'img/projects/aiot/dfd_level0.webp',
        thumb: 'img/projects/aiot/dfd_level0_thumb.webp',
        caption: 'Level 0 data flow diagram of the platform (labels in Vietnamese).',
        alt: 'Level 0 data flow diagram linking the system with suppliers, carriers, warehouse, supermarket, consumers, regulators and blockchain',
      },
      {
        type: 'video',
        src: 'video/aiot_full_demo.mp4',
        poster: 'img/projects/aiot/poster_full.webp',
        thumb: 'img/projects/aiot/poster_full_thumb.webp',
        duration: '8:47',
        caption: 'Full system demo by the team: roles, camera based AI checks and IoT monitoring.',
        alt: 'Full system demo video',
      },
      {
        type: 'image',
        src: 'img/awards/ctd_scholars_2025_unmasked.webp',
        thumb: 'img/awards/ctd_scholars_2025_unmasked_thumb.webp',
        caption: 'Certificate: Second Prize, CTD Scholars Student Awards 2025.',
        alt: 'CTD Scholars Student Awards 2025 certificate, Second Prize',
      },
    ],
  },
]

export default projects
