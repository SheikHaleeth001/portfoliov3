// Central type definitions used across the portfolio components.
// Keeping these in one file makes it easy to update the content
// shape without hunting through every component.

export interface Skill {
  name: string;
  icon: string;
}

export interface TechCategory {
  category: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  emoji: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  date: string;
  logo: string; // short text/initials shown in the timeline logo box
  points: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  issued: string;
  icon: string;
}

export interface Achievement {
  icon: string;
  title: string;
  description: string;
}

export interface StatItem {
  icon: string;
  label: string;
  value: number;
  suffix: string;
}

export interface GithubStat {
  icon: string;
  label: string;
  value: number;
  suffix: string;
}

export interface LanguageItem {
  name: string;
  level: number;
  label: string;
}
