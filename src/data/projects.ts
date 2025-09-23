import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Software Engineer',
    description: 'Developed full-stack solutions with existing ERP & CRM products.',
    previewImage: 'https://res.cloudinary.com/dkv4qdfkz/image/upload/v1747864994/pictures/oflguwfeii9ncbzmavkz.jpg',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Figma'],
    role: 'Full-Stack Web Developer',
    category: 'Web Development',
    featured: true,
    detailedImages: [
      'https://res.cloudinary.com/dkv4qdfkz/image/upload/v1747864537/pictures/arkiyq41hv73okwfmnc1.png',
      'https://res.cloudinary.com/dkv4qdfkz/image/upload/v1747864599/pictures/lt4r6rahf1mwyge0lbpk.png',
      'https://res.cloudinary.com/dkv4qdfkz/image/upload/v1747864633/pictures/fj50v2moinn8gdzdouaa.png'
    ],
    overview: 'Enhancing Financial System ERP and CRM through Custom Solutions and API Optimization',
    problem: 'Financial institutions operate on legacy mainframe systems that connect to virtual machines for data access. Pre-2008 systems relied on on-premises data storage, while modern architectures utilize both centralized and decentralized approaches for effective distribution. Organizations access this data through various CRM and ERP systems (Oracle, Workday, SAP, D365), but face significant challenges balancing intuitive user interfaces with stringent security requirements. Traditional approaches prioritize security at the expense of user experience, resulting in inefficient workflows, excessive load times, and reduced operational efficiency in transaction monitoring systems.',
    solution: 'I developed bespoke bank entities for four major insurance clients, enabling their onboarding to 13 US-based banks through customized D365 implementations. The approach focused on streamlining case management, implementing efficient data validation, and creating intuitive fraud detection interfaces while maintaining PCI compliance for systems handling over 700 million USD in transaction volume. My work specifically addressed everyday data processing and software engineering challenges in these complex environments.',
    implementation: 'Custom JavaScript solutions were implemented for case title editing and number updating, with optimized regex patterns for data validation. Carriage return values were removed to reduce page weight, while RESTful API calls were developed for efficient data retrieval and front-end loading. The D365 architecture was customized with specialized entity relationships to support fraud detection workflows between mainframe systems and modern distribution platforms.',
    outcome: 'The implementation resulted in reducing front-end load time from 13 seconds to 2 seconds (85% improvement), expanding client capacity by 13x through efficient entity management, and maintaining system integrity for monitoring 700 million USD worth of fraudulent transactions. These improvements significantly enhanced user experience while maintaining the high security standards required for financial applications that bridge legacy mainframe systems with modern data distribution approaches.'
  },
  {
    id: 'project-2',
    title: 'MyCareerShapers Performance Optimization',
    description: 'Transformed mentor gallery from 45-second load times to sub-3-second performance through advanced image optimization and lazy loading techniques.',
    previewImage: 'https://res.cloudinary.com/dkv4qdfkz/image/upload/v1749945770/pictures/myCShapers/wh1v4x2liulyvkrfzwsy.png',
    technologies: ['React', 'JavaScript', 'DOM Optimization', 'Virtual DOM', 'BlurHash', 'Lazy Loading'],
    role: 'Frontend Performance Engineer',
    category: 'Web Development',
    featured: true,
    detailedImages: [
      'https://res.cloudinary.com/dkv4qdfkz/image/upload/v1749945770/pictures/myCShapers/nsstkajkfofy6rtxbud3.png',
      'https://res.cloudinary.com/dkv4qdfkz/image/upload/v1749945770/pictures/myCShapers/vh8jfolcaz0giuteebio.png',
      'https://res.cloudinary.com/dkv4qdfkz/image/upload/v1749945770/pictures/myCShapers/wh1v4x2liulyvkrfzwsy.png'
    ],
    overview: 'MyCareerShapers Mentor Gallery Performance Crisis - From 45s Load Times to Sub-3s Performance. As a Frontend Engineer at MyCareerShapers, I inherited a critical performance issue where the mentor showcase page was causing browser crashes and user abandonment. The page displayed 500+ mentor profiles, each containing 15-30 high-resolution images (certificates, testimonials, achievements).',
    problem: 'The mentor showcase page with 500+ mentor profiles was causing severe performance issues including browser crashes, 45-second load times, and poor scroll performance. Each mentor profile contained 15-30 high-resolution images including certificates, testimonials, and achievements. The traditional DOM approach was loading all images simultaneously, consuming over 15GB of memory and making the application unusable for users. This resulted in high bounce rates and user abandonment, directly impacting the platform\'s ability to connect mentors with students.',
    solution: 'I implemented a comprehensive performance optimization strategy focusing on intelligent image loading and memory management. The solution involved implementing viewport-based lazy loading (only loading images within 200px of viewport), automatic memory cleanup using setTimeout and clearTimeout for non-visible images after 1.5s scroll pause, and BlurHash placeholders with staggered loading to provide immediate visual feedback while maintaining perceived performance.',
    implementation: 'The technical implementation leveraged React\'s Virtual DOM concept for efficient DOM manipulation and updates. I developed a custom lazy loading system that monitors viewport intersection and dynamically loads/unloads images based on user scroll behavior. BlurHash placeholders were integrated to provide instant visual feedback, while the staggered loading system prevented overwhelming the browser with simultaneous image requests. Memory management was handled through automatic cleanup of non-visible images using JavaScript timers, though I noted that modern async/await approaches would be preferred over the legacy setTimeout/clearTimeout pattern used.',
    outcome: 'The optimization achieved remarkable results: Load time reduced from 45 seconds to 2.8 seconds (94% improvement), Memory usage decreased from 15GB to 200MB (98% reduction), and eliminated browser crashes entirely. The mentor gallery became fully functional and responsive, significantly improving user experience and platform usability. This performance transformation enabled MyCareerShapers to effectively showcase their mentor network without technical barriers, directly contributing to improved user engagement and platform growth.'
  },
  {
    id: 'project-3',
    title: 'Cultural Models & Dark Patterns',
    description: 'An interactive dashboard for financial analysis and portfolio management with real-time data visualization.',
    previewImage: 'https://res.cloudinary.com/dkv4qdfkz/image/upload/v1750215393/pictures/researchWork/kzcdtkjhkj9m89xwii9z.png',
    technologies: ['Vue.js', 'D3.js', 'Node.js', 'PostgreSQL', 'Sketch'],
    role: 'Frontend Developer & Data Visualization Specialist',
    category: 'Web Development',
    featured: false,
    detailedImages: [
'https://res.cloudinary.com/dkv4qdfkz/image/upload/v1750201331/pictures/researchWork/gxlibfzyfsxjr5ushnht.png',
'https://res.cloudinary.com/dkv4qdfkz/image/upload/v1750201331/pictures/researchWork/zmobj4aophunjp8epflk.png',
'https://res.cloudinary.com/dkv4qdfkz/image/upload/v1750201331/pictures/researchWork/zdrgkmfmkqvjcetddunj.png',
    ],
    overview: 'This research project investigates the intersection of cultural psychology and deceptive web design, exploring how cultural background influences user susceptibility to dark patterns in digital interfaces.',
   problem:'The current dark pattern studies fail to take into account core cultural aspects of the eastern and western societies. The existing research assumes the psychology is the same across all cultures. There is a general lack of responsive design accounting for eastern society.',
    outcome: 'Understanding both the theoretical contributions and practical implications of understanding cultural differences in dark pattern susceptibility. '
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getRelatedProjects = (projectId: string, count: number = 2): Project[] => {
  const currentProject = getProjectById(projectId);
  if (!currentProject) return [];
  
  return projects
    .filter(project => project.id !== projectId && project.category === currentProject.category)
    .slice(0, count);
};

export const getProjectCategories = (): string[] => {
  const categories = new Set(projects.map(project => project.category));
  return Array.from(categories);
};