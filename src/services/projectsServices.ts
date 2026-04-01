import data from "../data/infos.json";
import type { ProjectsInfo } from "../types/serviceTypes";

export const getProjectsService = async (): Promise<ProjectsInfo> => {
  try {
    const portfolioData = data.portfolio;

    if (!portfolioData) {
      throw new Error("Seção portfolio não encontrada no JSON");
    }

    return portfolioData as ProjectsInfo;
  } catch (error) {
    console.error(error);
    throw new Error("Erro ao buscar dados do portfólio.");
  }
};
