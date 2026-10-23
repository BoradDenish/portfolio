export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectChallenge {
  challenge: string;
  solution: string;
}

export interface ArchitectureNode {
  title: string;
  role: string;
  tech: string;
  description: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'Enterprise & ERP' | 'IoT & Systems' | 'Logistics & SaaS' | 'Automation & Desktop' | 'Messaging & AI' | 'Hospitality & Retail';
  role: string;
  featured: boolean;
  year?: string;
  summary: string;
  description: string;
  problemStatement: string;
  solutionOverview: string;
  architectureNotes?: string;
  tech: string[];
  metrics: ProjectMetric[];
  features: string[];
  challenges?: ProjectChallenge[];
  verifiedResults?: string[];
  architectureNodes?: ArchitectureNode[];
  githubUrl?: string;
  liveUrl?: string;
  docSlug?: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  type: string;
  description: string;
  highlights: string[];
  skills: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  score: string;
  period: string;
  courses: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level?: string;
    highlight?: boolean;
  }[];
}

export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}
