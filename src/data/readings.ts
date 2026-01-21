import { ReadingItem } from '../types';

export const readings: ReadingItem[] = [
  {
    id: 'reading-1',
    title: 'How to take the Stanford D-School approach to solve any design problem.',
    description: 'A walkthrough of the five-step Stanford D-School process using a coffee mug redesign example.',
    imageUrl: 'https://res.cloudinary.com/dkv4qdfkz/image/upload/v1768863260/Design_Thinking_joedzf.png',
    category: 'Design',
    date: 'Jan 21, 2026',
    link: '#',
    detailedImages: [
      'https://res.cloudinary.com/dkv4qdfkz/image/upload/v1768863260/Design_Thinking_joedzf.png'
    ],
    overview: 'Certain human-centric problems require a design-centric approach. The Stanford Design School provides a five-step guide—empathize, define, ideate, prototype, and test—to help frame the problem, broaden solution space, and iterate toward outcomes that fit real user needs.',
    keyPoints: [
      {
        title: 'Empathize With The User',
        description: 'Observe and listen to understand the user\'s context, needs, and constraints before deciding what to build.'
      },
      {
        title: 'Define The Problem Clearly',
        description: 'Translate observations into a sharp problem statement that explains what the user needs and why.'
      },
      {
        title: 'Ideate Widely',
        description: 'Generate many ideas—even unconventional ones—to stretch the solution space before selecting a direction.'
      },
      {
        title: 'Prototype And Test',
        description: 'Build fast, low-cost prototypes and test repeatedly to learn what works and what doesn\'t.'
      }
    ],
    insights: 'The process shifts focus from the artifact to the human problem it serves. Iteration and feedback are the mechanisms that turn assumptions into evidence, especially when the problem is ambiguous or user needs are nuanced.',
    takeaways: [
      'Start with empathy to avoid solving the wrong problem',
      'Problem definition is the bridge between research and ideas',
      'Divergent ideation produces better options than linear thinking',
      'Prototyping helps you fail cheaply and learn faster',
      'Testing reveals how users actually use what you build'
    ]
  },
  {
    id: 'reading-2',
    title: 'Why are most binary search algorithms broken?',
    description: 'A simple but critical overflow bug in binary search mid calculation and how to fix it.',
    imageUrl: 'https://res.cloudinary.com/dkv4qdfkz/image/upload/v1768863260/binarySearch_zlgckg.png',
    category: 'Development',
    date: 'Jan 21, 2026',
    link: '#',
    detailedImages: [
      'https://res.cloudinary.com/dkv4qdfkz/image/upload/v1768863260/binarySearch_zlgckg.png',
      'https://res.cloudinary.com/dkv4qdfkz/image/upload/v1768864257/binarySearch_1_x4pgfj.png'
    ],
    overview: 'Many binary search implementations compute the midpoint as `(low + high) / 2`, which can overflow for large arrays. When `low + high` exceeds the maximum integer, the sum can wrap to a negative value and break the search logic.',
    keyPoints: [
      {
        title: 'Overflow Happens At Scale',
        description: 'The bug appears when array sizes approach 2^30 or more, where integer addition overflows.'
      },
      {
        title: 'Safer Midpoint Formula',
        description: 'Use `low + (high - low) / 2` to avoid overflow while preserving correct mid calculation.'
      },
      {
        title: 'Small Change, Big Impact',
        description: 'A single-line fix prevents incorrect indices and infinite loops in edge cases.'
      }
    ],
    insights: 'Classic algorithms still hide edge-case failures when implementation details are ignored. The safest patterns should be taught and reused consistently, especially in foundational code.',
    takeaways: [
      'Avoid `(low + high) / 2` in production code',
      'Prefer `low + (high - low) / 2` for safety',
      'Edge cases often show up only at scale',
      'Algorithm correctness includes implementation details'
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