export interface SpaceItem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  aspects: string[];
}

export interface BespokeStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  visualType: 'sketch' | 'grid' | 'photo';
}

export interface CraftStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  materials: string[];
}

export interface WhyReason {
  number: string;
  title: string;
  summary: string;
  detail: string;
  image?: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}
