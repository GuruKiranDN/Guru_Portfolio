export interface WebDevImage {
  url: string;
  legend: string;
}

export interface WebDevProject {
  id: string;
  title: string;
  description: string;
  previewImage: string;
  modalType: string; // 'unicorn-mark' | 'artemis' | '3dgs-explained'
  category: string;
  coverImage: string;
  images: WebDevImage[];
  theme: string;
  researchQuestion: string;
  methods: string;
  mediumsMaterials: string | string[];
  techniquesTechnologies: string;
  audienceImpact: string;
  downloadUrl?: string;
}

