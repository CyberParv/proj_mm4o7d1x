export interface NavItem {
  label: string;
  href: string;
}

export interface CtaLink {
  label: string;
  href: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon?: string;
}

export interface ClassItem {
  name: string;
  duration: string;
  intensity?: string;
  level?: string;
  calories?: string;
  instructor?: string;
  description?: string;
  image?: string;
}

export interface ScheduleEntry {
  time: string;
  class: string;
  instructor: string;
  duration: string;
}

export interface TrainerProfile {
  name: string;
  role: string;
  image: string;
  specialty?: string;
  bio?: string;
  certifications?: string[];
  specialties?: string[];
  experience?: string;
  philosophy?: string;
  achievements?: string[];
}

export interface PricingPlan {
  name: string;
  price: string;
  period?: string;
  description?: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
}

export interface TransformationStory {
  name: string;
  duration: string;
  quote: string;
  beforeImage: string;
  afterImage: string;
  program?: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface BlogArticle {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime?: string;
  category?: string;
  image?: string;
  slug?: string;
}

export interface BmiCategory {
  range: string;
  category: string;
  color: string;
  description: string;
}
