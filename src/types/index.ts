export interface Project {
  id: string;
  title: string;
  description: string;
  previewImage: string;
  technologies: string[];
  role: string;
  category: string;
  featured: boolean;
  detailedImages: string[];
  overview: string;
  problem: string;
  solution: string;
  implementation: string;
  outcome: string;
  longCaseStudy?: string;
  relatedProjects?: string[];
}

export interface ReadingItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  date: string;
  link: string;
  detailedImages: string[];
  overview: string;
  keyPoints: {
    title: string;
    description: string;
  }[];
  insights: string;
  takeaways: string[];
}

export interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}