import { useEffect, useState } from "react";
import "./Contact.css";
import type { ProfileInfo } from "../../../types/serviceTypes";
import { getProfileInfo } from "../../../services/profileInfoServices";

const Contact = () => {
  const [contactInfo, setContactInfo] = useState<ProfileInfo | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
  
    useEffect(() => {
      const fetchProfileInfo = async () => {
        try {
          const data = await getProfileInfo();
          setContactInfo(data);
        } catch (error) {
          console.error("Erro ao carregar informações do profile", error);
          setError("Erro ao carregar informações do profile");
        } finally {
          setLoading(false);
        }
      }
      fetchProfileInfo();
    }, [])
  
    if (loading) return <p className="loading-state">Carregando...</p>;
    if (error) return <p className="error-state">{error}</p>;

  return (
    <section id="contact" className="contact shadow-premium fade-in-section">
      <div className="contact-container">
        <h2 className="contact-title">Vamos construir algo incrível juntos?</h2>
        <p className="contact-description">
          Estou sempre em busca de novos desafios e parcerias para desenvolver produtos que impactam pessoas. Se você tem um projeto em mente ou apenas quer trocar uma ideia, entre em contato!
        </p>
        
        <div className="contact-actions">
          <a href={`mailto:${contactInfo?.email}`} className="btn-contact-primary">
            Enviar E-mail
          </a>
          <div className="contact-social">
            <a href={contactInfo?.linkedin} target="_blank" rel="noopener noreferrer" className="btn-contact-secondary">
              LinkedIn
            </a>
            <a href={contactInfo?.github} target="_blank" rel="noopener noreferrer" className="btn-contact-secondary">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
