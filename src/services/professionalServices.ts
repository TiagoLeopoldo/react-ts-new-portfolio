import data from "../data/infos.json";
import type { ProfessionalExperienceInfo } from "../types/serviceTypes";

export const getProfessionalExperienceInfo = async (): Promise<ProfessionalExperienceInfo> => {
  try {
    const experiencesData = data.professionalExperiences;

    if (!experiencesData) {
      throw new Error("Seção professionalExperiences não encontrada no JSON");
    }

    return experiencesData;
  } catch (error) {
    console.error(error);
    throw new Error("Erro ao buscar experiências profissionais.");
  }
};