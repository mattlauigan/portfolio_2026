
export const PROJECTS = [
  {
    title: 'Core Banker v.2',
    shortDescription:
      'Core Banker is a project of the Coreware that is implemented on the website, where all the customer records, daily process, batch process, back office, supervisor, teller management, system configuration, access management, and transactions comprising of loan, savings, share, and time deposit were provided to meet the demands of the clients. ',
    fullDescription:
      'Under this project, there is a term called as CASA (Current Account, Savings Account) comprising of; all bankers (client), loans, savings, time deposit, share, and amount information for debit and credit. Current Account focuses on business transactions (non-personal/corporate), while Savings Account focuses on personal transactions (personal/individual) depending on the client request. Microfinance is a sub-project under Core Banker that has cluster list, center list, and membership development officer (area officer). In computer discipline, the sub-project is called as Management Information System (MIS), as it bridges the business needs with computing technology where it provides software solution to collect, and analyze data to support business operations and decision-making.',
    contribution:
      'Redesigned the Core Banker front-end interface using Figma, creating modern and user-friendly UI layouts that improved the overall user experience. Translated the approved designs into responsive and reusable components using Svelte, TypeScript, and Tailwind CSS. Integrated the front-end application with the back-end services through REST APIs, enabling seamless data retrieval, processing, and interaction across banking modules. Contributed to the modernization of the existing system by improving interface consistency, usability, and maintainability.',
    stack: ['Svelte', 'Typescript', 'Laravel', 'Tailwind CSS', 'Docker', 'Redis', 'REST APIs'],
    category: 'Web App',
    year: '2026',
    image: 'https://github.com/mattlauigan/portfolio_2026/blob/main/src/assets/banker.png',
  },
  {
    title: 'Philippine Port Authority Web Portal',
    shortDescription:
      'A backend API solution designed to connect POS applications with third-party services. It supports transaction processing, inventory management, sales reporting, receipt generation, and customer data handling through REST APIs, enabling efficient operations and reliable data synchronization.',
    fullDescription:
      'A POS (Point of Sale) System API application enables seamless integration between retail or service businesses and their point-of-sale software. It allows third-party applications to interact with the POS system for tasks such as processing transactions, managing inventory, generating receipts, tracking sales data, and handling customer information. By providing real-time data synchronization and automation, this API enhances operational efficiency, improves reporting accuracy, and allows businesses to streamline their sales processes, inventory management, and customer engagement.',
    contribution:
      'Developed multiple modules across the front-end application and backend API. Implemented end-to-end features, connecting front-end interfaces to backend services through REST API integration. Contributed to the development of application functionalities, ensuring seamless data flow and reliable communication between the front-end, application, and API layers.',
    stack: ['React.js', 'TypeScript', 'Redis', 'Docker', 'Tailwind CSS', 'Laravel', 'MySQL', 'Rest APIs'],
    category: 'Web Platform',
    year: '2024',
    image: 'https://images.pexels.com/photos/2680058/pexels-photo-2680058.jpeg?_gl=1*yje4w8*_ga*MzcxNTk2OTY5LjE3OTMyNDU2NjI.*_ga_8JE65Q40S6*czE3OTMyNDU2NjEkbzEkZzEkdDE3OTMyNDU3ODkkajU5JGwwJGgw'
    // image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Painting & Decoration Website',
    shortDescription:
      'A professional website for Painting & Decoration Compoany, showcasing painting services, completed projects, and the company’s commitment to delivering high-quality painting solutions across New South Wales, Australia.',
    fullDescription:
      'A business website developed to showcase the services and expertise of an established painting and decorating company in New South Wales, Australia, with 11 years of industry experience. The website highlights its painting and decorating services, presents its commitment to quality workmanship, and provides potential clients with an accessible way to explore its offerings. Designed to establish trust and strengthen the company’s online presence, the website delivers a professional and user-friendly experience.',
    contribution:
      'Translated the website design from Adobe XD into a functional web application, accurately implementing the approved layouts, visual elements, and styling to create a user-friendly website that reflects the company’s brand and services.',
    stack: ['HTML', 'CSS', 'WordPress'],
    category: 'Website',
    year: '2023',
    image: 'https://github.com/mattlauigan/portfolio_2026/blob/main/src/assets/peacock.png',
  },
  // {
  //   title: 'E-Commerce Dashboard',
  //   shortDescription:
  //     'A multi-vendor marketplace dashboard providing real-time analytics, inventory management, and order processing for a retail brand operating across Southeast Asia.',
  //   fullDescription:
  //     'Built an advanced analytics and management dashboard for a multi-vendor marketplace. Features include real-time sales analytics, inventory tracking across multiple warehouses, order fulfillment workflows, and vendor performance metrics.',
  //   contribution:
  //     'Developed the React frontend with interactive charts and real-time data visualization. Implemented GraphQL APIs for efficient data fetching and mutations. Set up Redis caching layer to optimize performance for heavy analytics queries. Designed the database schema for scalability.',
  //   stack: ['React', 'Tailwind CSS', 'GraphQL', 'Redis', 'Node.js', 'MongoDB', 'Chart.js'],
  //   category: 'Dashboard',
  //   year: '2023',
  //   image: 'https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=800',
  // },
  {
    title: 'Brand Identity & Design System',
    shortDescription:
      "Comprehensive brand identity design including logo, typography, color system, and a reusable component library for a fintech startup's product suite.",
    fullDescription:
      'Designed a cohesive brand identity and component system for a fintech startup launching multiple products. Created a complete design system with 50+ components, comprehensive style guide, and implementation documentation for developers.',
    contribution:
      'Led the entire design process from brand strategy through execution. Created logo variations, defined typography hierarchy, built a 6-color system with accessibility considerations. Designed all UI components and documented specifications for developer handoff. Ensured consistency across web and mobile platforms.',
    stack: ['Figma', 'Adobe XD', 'Design Systems', 'Prototyping', 'User Testing', 'Design Handoff'],
    category: 'Design',
    year: '2023',
    image: 'https://github.com/mattlauigan/portfolio_2026/blob/main/src/assets/polaroid.png',
    hasLink: true
  },
  {
    title: 'Inventory & POS System',
    shortDescription:
      'A point-of-sale and inventory management system for a chain of retail stores, featuring barcode scanning, low-stock alerts, and daily revenue reports.',
    fullDescription:
      'Developed a desktop POS and inventory system for a retail chain with 15 stores. System includes real-time inventory sync, barcode scanning, sales reporting, and admin management tools for centralized control.',
    contribution:
      'Designed the POS application interface in Figma and translated the designs into a functional desktop application using Kotlin, Webpack, and Compose. Developed the user interface and implemented core point-of-sale features, focusing on usability, consistent design, and efficient workflows for retail operations.',
    stack: [
      'Figma',
      'Kotlin',
      'Webpack Compose',
    ],
    category: 'Mobile App',
    year: '2026',
    image: 'https://github.com/mattlauigan/portfolio_2026/blob/main/src/assets/possale.png',
  },
];

