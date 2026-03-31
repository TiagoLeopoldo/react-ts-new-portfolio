export interface ProfileInfo {
  name: string;
  photo: string;
  job: string;
  linkedin: string;
  curriculum: string;
  phone: string;
  email: string;
  github?: string;
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
  description: string;
}

export interface ProfessionalExperienceInfo {
  experiences: ExperiencesInfo[];
}

interface Projects {
  id:string;
  name: string;
  description: string;
  repositorie: string;
  deploy: string;
  github: boolean;
}

export interface ProjectsInfo {
  projects: Projects[];
}

interface Course {
  id: string;
  name: string;
  period: string;
}

export interface AcademicInfo {
  course: Course[];
}