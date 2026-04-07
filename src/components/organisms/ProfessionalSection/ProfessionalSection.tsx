import { useEffect, useState } from "react";
import { getProfessionalExperienceInfo } from "../../../services/professionalServices";
import type { ProfessionalExperienceInfo } from "../../../types/serviceTypes";
import "./ProfessionalSection.css";

const ProfessionalSection = () => {
  const [professionalInfo, setProfessionalInfo] = useState<ProfessionalExperienceInfo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const data = await getProfessionalExperienceInfo();
        console.log("Experiências profissionais carregadas:", data);
        setProfessionalInfo(data);
      } catch (error) {
        console.error("Erro ao carregar experiências profissionais:", error);
        setError("Erro ao carregar informações profissionais.");
      } finally {
        setLoading(false);
      }
    }

    fetchExperiences();
  }, []);

  if (loading) return <p className="loading-state">Carregando experiências...</p>;
  if (error) return <p className="error-state">{error}</p>;
  return (
    <>
      {professionalInfo ?
        <ul className="experience">
          {professionalInfo?.experiences?.map((experience) => {
            const impactfulDescription = experience.description;

            return (
              <li key={experience.id} className="experience-item fade-in-section">
                <div className="experience-header">
                  <h3 className="title"><a className="title-link" rel="noopener noreferrer" href={experience.link} target="_blank">{experience.name}</a></h3>
                  <span className="period">{experience.period}</span>
                </div>
                <p className="impact-description">{impactfulDescription}</p>
              </li>
            );
          })}
        </ul>
        :
        <p className="error-state">Erro ao carregar!</p>
      }
    </>
  )
}

export default ProfessionalSection;