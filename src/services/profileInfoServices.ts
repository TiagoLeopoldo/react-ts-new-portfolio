import type { ProfileInfo, ProfileResponse } from "../types/serviceTypes";
import api from "./api";

export const getProfileInfo = async (): Promise<ProfileInfo> => {
  try {
    const { data } = await api.get<ProfileResponse>("/api/list");

    if (!data?.personalInfos) {
      throw new Error("Resposta inválida da API pesonalInfos");
    }

    return data.personalInfos;
  } catch (error) {
    throw new Error("Falha ao buscar informações de profile.");
  }
};
