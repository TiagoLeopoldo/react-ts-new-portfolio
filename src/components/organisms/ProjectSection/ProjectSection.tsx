import { useEffect, useState } from "react";
import type { ProjectsInfo } from "../../../types/serviceTypes";
import { getProjectsService } from "../../../services/projectsServices";
import ProjectList from "../ProjectList/ProjectList";

const ProjectSection = () => {

  const [projectsInfo, setProjectsInfo] = useState<ProjectsInfo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const data = await getProjectsService();
        setProjectsInfo(data);
      } catch (error) {
        console.error("Erro ao carregar dados dos projetos:", error);
        setError("Erro ao carregas as informações de projetos.");
      } finally {
        setLoading(false);
      }
    }

    fetchProject();
  }, []);

  if (loading) return <p className="loading-state">Carregando projetos...</p>;
  if (error) return <p className="error-state">Erro ao carregar projetos</p>;

  return <ProjectList projects = {projectsInfo?.projects || []} />

}

export default ProjectSection;