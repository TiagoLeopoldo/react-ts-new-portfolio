import { useState, useEffect } from "react";
import type { ProfileInfo } from "../../../types/serviceTypes";
import "./HeroSection.css";
import { getProfileInfo } from "../../../services/profileInfoServices";

const HeroSection = () => {
  const [profileInfo, setProfileInfo] = useState<ProfileInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfileInfo = async () => {
      try {
        const data = await getProfileInfo();
        setProfileInfo(data);
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
    <header id="hero" className="header hero-section fade-in-section">
      {profileInfo ? <>
        <div className="hero-photo-area">
          <div className="photo-container">
            <img src={profileInfo.photo} alt={profileInfo.name} className="photo" />
          </div>
        </div>

        <div className="hero-text-area">
          <div className="identity">
            <h1 className="name">{profileInfo.name}</h1>
            <h2 className="job">{profileInfo.job}</h2>
            <p className="value-prop">
              Desenvolvedor Fullstack focado em aplicações escaláveis e experiências digitais de alta performance, transformando desafios complexos em produtos intuitivos e eficientes.
            </p>
          </div>

          <div className="actions">
            <a href={profileInfo.curriculum} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Download Currículo
            </a>
            <a href={profileInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              LinkedIn
            </a>
          </div>

          <div className="contact-details">
            <div className="quick-links">
              <a href={`mailto:${profileInfo.email}`}>{profileInfo.email}</a>
              <a href={`tel:+55${profileInfo.phone}`}>{profileInfo.phone}</a>
            </div>
          </div>
        </div>
      </>
        : <p className="error-state">Erro ao carregar!</p>
      }
    </header>
  );
}

export default HeroSection;