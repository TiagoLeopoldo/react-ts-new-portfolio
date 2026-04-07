export interface ProfileInfo {
  name: string;
  photo: string;
  job: string;
  linkedin: string;
  curriculum: string;
  phone: string;
  email: string;
  github: string;
}

export interface ProfileResponse {
  personalInfos: ProfileInfo;
}

interface HardSkills {
  id: string;
  name: string;
  logo: string;
}

interface SoftSkills {
  id: string;
  name: string;
}

export interface SkillsInfo {
  hardSkills: HardSkills[];
  softSkills: SoftSkills[];
}

interface Language {
  id: string;
  language: string;
}

export type LanguagesInfo = Language[];

interface ExperiencesInfo {
  id: string,
  name: string;
  period: string;
  link: string;
  description: string;
}

export interface ProfessionalExperienceInfo {
  experiences: ExperiencesInfo[];
}

export interface ProjectChallenge {
  title: string;
  description: string;
}

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectArchitecture {
  techStack: string[];
  description: string;
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  img: string;
  description: string;
  longDescription?: string;
  context?: string;
  challenges?: ProjectChallenge[];
  architecture?: ProjectArchitecture;
  features?: ProjectFeature[];
  repository?: string;
  deploy: string;
  github: boolean;
  gallery?: string[];
}

export interface ProjectsInfo {
  projects: Project[];
}

interface Course {
  id: string;
  name: string;
  period: string;
}

export interface AcademicInfo {
  course: Course[];
}