import { useEffect, useState } from "react";
import type { SkillsInfo } from "../../../types/serviceTypes";
import "./SkillsSection.css";
import { getSkillsInfo } from "../../../services/skillsServices";

const SkillsContent = () => {
  const [skillsInfo, setSkillsInfo] = useState<SkillsInfo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchSkills = async () => {
      try {
        const data = await getSkillsInfo();
        if (isMounted) {
          setSkillsInfo(data);
        }
      } catch (err: any) {
        if (isMounted) {
          setError(err.message ?? "Erro ao carregar Skills");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchSkills();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;
  if (!skillsInfo) return null;

  return (
    <div className="skills">
      <section className="tools">
        <h3>Hard Skills:</h3>
        <ul>
          {skillsInfo.hardSkills.map((skill) => (
            <li key={skill.name} data-skill={skill.name}>
              <img src={skill.logo} alt={skill.name} />
            </li>
          ))}
        </ul>
      </section>

      <section className="personal">
        <h3>Soft Skills:</h3>
        <ul>
          {skillsInfo.softSkills.map((skill) => (
            <li key={skill.id}>{skill.name}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default SkillsContent;
