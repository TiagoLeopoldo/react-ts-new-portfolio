import data from "../data/infos.json";
import type { ProfileInfo, ProfileResponse } from "../types/serviceTypes";

export const getProfileInfo = async (): Promise<ProfileInfo> => {
  try {
    const typedData = data as ProfileResponse;

    if (!typedData?.personalInfos) {
      throw new Error("Estrutura inválida: personalInfos não encontrado");
    }

    return typedData.personalInfos;
  } catch (error) {
    console.error(error);
    throw new Error("Erro ao buscar profile.");
  }
};