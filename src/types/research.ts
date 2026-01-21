export interface ResearchImage {
  url: string;
  legend: string;
}

export interface ResearchQuestion {
  type: string; // 'Primary' | 'Secondary' | 'Tertiary' | 'RQ1' | 'RQ2' | 'RQ3' | 'Ethical'
  question: string;
}

export interface SourceMaterial {
  source: string;
  domain: string;
  contribution: string;
}

export interface ResearchProject {
  id: string;
  title: string;
  description: string;
  previewImage: string;
  modalType: string; // 'smart-device-cognition' | 'ai-learning-impact' | 'cultural-dark-patterns'
  category: string;
  images: ResearchImage[];
  theme: string;
  researchQuestions: ResearchQuestion[];
  methods: string;
  mediumsMaterials: string | SourceMaterial[];
  techniquesTechnologies: string | string[];
  audienceImpact: string | string[];
  downloadUrl?: string;
}

