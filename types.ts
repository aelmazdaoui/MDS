
export type Language = 'en' | 'fr';

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  details: string[];
  tools: string[];
}

export interface ProjectItem {
  title: string;
  type: string;
  description: string;
  tech: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  school: string;
  period: string;
  location: string;
}

export interface LanguageItem {
  language: string;
  level: string;
}

export interface ServiceItem {
  id?: string;
  title: string;
  description: string;
  price: string;
  features: string[];
  icon: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  content: string;
  avatarLetter: string;
}

export interface StatItem {
  value: string;
  label: string;
  icon: string;
}

// NEW TYPES
export interface ProcessStep {
  title: string;
  description: string;
  icon: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface QuoteServiceOption {
  id: string;
  label: string;
  baseRate: number; // hourly rate
}

export interface QuoteComplexity {
  id: string;
  label: string;
  hoursMultiplier: number;
  desc: string;
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
}
