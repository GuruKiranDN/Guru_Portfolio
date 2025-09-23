import { ReadingItem } from '../types';

export const readings: ReadingItem[] = [
  {
    id: 'reading-1',
    title: 'The Future of User Interface Design',
    description: 'Exploring upcoming trends in UI design and how they will shape the digital landscape in the coming years.',
imageUrl:'https://res.cloudinary.com/dkv4qdfkz/image/upload/v1750219035/pictures/comingSoon/obpknbg58lnqts9rlxjh.jpg',
    category: 'Design',
    date: 'June 15, 2023',
    link: '#',
    detailedImages: [
'https://res.cloudinary.com/dkv4qdfkz/image/upload/v1750219035/pictures/comingSoon/chehqrnqmtym9qbq898o.jpg',
'https://res.cloudinary.com/dkv4qdfkz/image/upload/v1750219035/pictures/comingSoon/ahjyeqndk68yuqe61qnd.jpg',
'https://res.cloudinary.com/dkv4qdfkz/image/upload/v1750219035/pictures/comingSoon/chehqrnqmtym9qbq898o.jpg'
    ],
    overview: 'The landscape of user interface design is rapidly evolving, driven by technological advances, changing user expectations, and emerging interaction paradigms. This comprehensive analysis explores the key trends that will define the future of UI design, from voice interfaces and gesture-based interactions to AI-powered personalization and immersive experiences.',
    keyPoints: [
      {
        title: 'Voice-First Interfaces',
        description: 'The rise of voice assistants and smart speakers is pushing designers to think beyond visual interfaces. Voice-first design requires understanding natural language patterns, conversation flows, and audio feedback systems.'
      },
      {
        title: 'Gesture-Based Interactions',
        description: 'With the advancement of computer vision and sensor technology, gesture-based interfaces are becoming more sophisticated. Designers must consider spatial interactions and haptic feedback in their design process.'
      },
      {
        title: 'AI-Powered Personalization',
        description: 'Machine learning algorithms are enabling interfaces that adapt to individual user preferences and behaviors in real-time, creating more intuitive and efficient user experiences.'
      },
      {
        title: 'Immersive Technologies',
        description: 'AR and VR technologies are creating new possibilities for interface design, requiring designers to think in three dimensions and consider spatial relationships in digital environments.'
      }
    ],
    insights: 'The future of UI design lies not in replacing traditional interfaces, but in creating seamless experiences that blend multiple interaction modalities. Designers must develop skills in understanding human psychology, emerging technologies, and accessibility principles to create interfaces that are both innovative and inclusive. The most successful interfaces of the future will be those that feel invisible to users while providing powerful functionality.',
    takeaways: [
      'Voice interfaces require careful consideration of conversation design and error handling',
      'Gesture-based interactions must be intuitive and culturally appropriate',
      'AI personalization should enhance rather than replace user control',
      'Immersive interfaces need to consider user comfort and motion sickness',
      'Accessibility must be built into new interaction paradigms from the ground up',
      'Cross-platform consistency becomes more challenging but more important'
    ]
  },
  {
    id: 'reading-2',
    title: 'Optimizing React Performance for Enterprise Applications',
    description: 'A deep dive into advanced techniques for optimizing React applications at scale.',
imageUrl:'https://res.cloudinary.com/dkv4qdfkz/image/upload/v1750219035/pictures/comingSoon/ahjyeqndk68yuqe61qnd.jpg',
    category: 'Development',
    date: 'May 22, 2023',
    link: '#',
    detailedImages: [
      'https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    overview: 'Enterprise React applications face unique challenges in terms of scale, complexity, and performance requirements. This article explores advanced optimization techniques, architectural patterns, and best practices for building high-performance React applications that can handle thousands of users and complex business logic.',
    keyPoints: [
      {
        title: 'Code Splitting and Lazy Loading',
        description: 'Implementing strategic code splitting using React.lazy() and dynamic imports to reduce initial bundle size and improve loading times. This includes route-based splitting and component-based splitting strategies.'
      },
      {
        title: 'Memory Management',
        description: 'Understanding React\'s memory usage patterns, identifying memory leaks, and implementing proper cleanup strategies for event listeners, subscriptions, and timers in enterprise applications.'
      },
      {
        title: 'State Management Optimization',
        description: 'Choosing the right state management solution for enterprise needs, optimizing Redux performance with selectors and normalization, and implementing efficient data fetching patterns.'
      },
      {
        title: 'Rendering Performance',
        description: 'Advanced techniques for optimizing React rendering including memoization strategies, virtual scrolling for large datasets, and proper use of React.memo and useMemo hooks.'
      }
    ],
    insights: 'Performance optimization in enterprise React applications is not just about technical implementation—it\'s about understanding business requirements, user workflows, and scalability needs. The key is to measure first, optimize second, and always consider the trade-offs between performance and maintainability. Many performance issues in enterprise applications stem from architectural decisions made early in the project lifecycle.',
    takeaways: [
      'Always measure performance before and after optimizations',
      'Code splitting should be based on user journey analysis, not just technical convenience',
      'Memory leaks in enterprise apps often come from third-party integrations',
      'State normalization is crucial for applications with complex data relationships',
      'Virtual scrolling is essential for handling large datasets in enterprise UIs',
      'Performance budgets should be established and monitored continuously'
    ]
  },
  {
    id: 'reading-3',
    title: 'The Psychology of Effective UX Design',
    description: 'Understanding how cognitive principles can be applied to create more intuitive and engaging user experiences.',
imageUrl:'https://res.cloudinary.com/dkv4qdfkz/image/upload/v1750219035/pictures/comingSoon/chehqrnqmtym9qbq898o.jpg',
    category: 'UX',
    date: 'April 8, 2023',
    link: '#',
    detailedImages: [
      'https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    overview: 'Effective UX design goes beyond aesthetics and usability—it taps into fundamental principles of human psychology to create experiences that feel natural and intuitive. This exploration delves into cognitive psychology, behavioral economics, and neuroscience research to understand how users think, feel, and behave when interacting with digital products.',
    keyPoints: [
      {
        title: 'Cognitive Load Theory',
        description: 'Understanding how the human brain processes information and designing interfaces that minimize cognitive burden. This includes managing intrinsic, extraneous, and germane cognitive load in user interfaces.'
      },
      {
        title: 'Behavioral Psychology Principles',
        description: 'Applying principles like the paradox of choice, loss aversion, and social proof to guide user behavior and decision-making in digital products.'
      },
      {
        title: 'Emotional Design',
        description: 'Leveraging emotional responses to create memorable and engaging experiences. Understanding the role of emotions in decision-making and how design elements can evoke specific emotional states.'
      },
      {
        title: 'Mental Models and Metaphors',
        description: 'Designing interfaces that align with users\' existing mental models and using appropriate metaphors to make complex functionality more understandable and predictable.'
      }
    ],
    insights: 'The most successful UX designs are those that work with, rather than against, human psychology. Users don\'t always behave rationally, and effective design acknowledges and accommodates these cognitive biases and limitations. The challenge for UX designers is to balance psychological principles with business goals and technical constraints while maintaining ethical design practices.',
    takeaways: [
      'Reduce cognitive load by chunking information and using progressive disclosure',
      'Leverage familiar patterns and metaphors to reduce learning curves',
      'Use social proof and authority to build trust and guide behavior',
      'Design for emotional states, not just functional requirements',
      'Consider cultural differences in psychological responses to design elements',
      'Test designs with real users to validate psychological assumptions'
    ]
  }
];

export const getReadingById = (id: string): ReadingItem | undefined => {
  return readings.find(reading => reading.id === id);
};

export const getRelatedReadings = (readingId: string, count: number = 2): ReadingItem[] => {
  const currentReading = getReadingById(readingId);
  if (!currentReading) return [];
  
  return readings
    .filter(reading => reading.id !== readingId && reading.category === currentReading.category)
    .slice(0, count);
};

export const getReadingCategories = (): string[] => {
  const categories = new Set(readings.map(reading => reading.category));
  return Array.from(categories);
};