import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getProjectBySlugService } from "../services/projectsServices";
import type { Project } from "../types/serviceTypes";
import Navbar from "../components/molecules/Navbar/Navbar";
import Footer from "../components/organisms/Footer/Footer";
import ProjectDetails from "../components/organisms/ProjectDetails/ProjectDetails";
import "./ProjectDetailsPage.css";

const ProjectDetailsPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProject = async () => {
      if (!slug) return;
      try {
        const data = await getProjectBySlugService(slug);
        if (data) {
          setProject(data);
        } else {
          setError("Projeto não encontrado.");
        }
      } catch (err) {
        console.error(err);
        setError("Erro ao carregar detalhes do projeto.");
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
    window.scrollTo(0, 0);
  }, [slug]);

  if (loading) return (
    <div className="page-state">
      <p>Carregando detalhes do projeto...</p>
    </div>
  );

  if (error || !project) return (
    <div className="page-state">
      <h1>Ops!</h1>
      <p>{error || "Projeto não encontrado."}</p>
      <Link to="/" className="btn-back">Voltar para Home</Link>
    </div>
  );

  return (
    <div className="project-details-page">
      <Navbar />
      
      <main className="project-details-container">
        <ProjectDetails project={project} />
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetailsPage;
