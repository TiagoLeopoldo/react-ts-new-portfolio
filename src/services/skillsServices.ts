import data from "../data/infos.json";
import type { SkillsInfo } from "../types/serviceTypes";

export const getSkillsInfo = async (): Promise<SkillsInfo> => {
  try {
    const skillsData = data.skills;

    if (!skillsData) {
      throw new Error("Seção portfolio não encontrada no JSON");
    }

    return skillsData;
  } catch (error) {
    console.error(error);
    throw new Error("Erro ao buscar dados do portfólio.");
  }
};
