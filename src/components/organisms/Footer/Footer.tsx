import { useState, useEffect } from "react";
import { getProfileInfo } from "../../../services/profileInfoServices";
import type { ProfileInfo } from "../../../types/serviceTypes";
import "./Footer.css";

const Footer = () => {
  const [profileInfo, setProfileInfo] = useState<ProfileInfo | null>(null);

  useEffect(() => {
    const fetchProfileInfo = async () => {
      try {
        const data = await getProfileInfo();
        setProfileInfo(data);
      } catch (error) {
        console.error("Erro ao carregar informações no footer", error);
      }
    };
    fetchProfileInfo();
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer shadow-premium">
      <div className="footer-container">
        <div className="footer-content">

          <div className="footer-brand">
            <h2 className="footer-logo">
              {profileInfo?.name || "Tiago Leopoldo"}<span>.</span>
            </h2>
            <p className="footer-job">{profileInfo?.job || "Desenvolvedor Fullstack"}</p>
          </div>

          <div className="footer-nav">
            <h3 className="footer-title">Navegação</h3>
            <ul className="footer-links">
              <li><a href="#hero">Início</a></li>
              <li><a href="#projects">Projetos</a></li>
              <li><a href="#experience">Experiência</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </div>

          <div className="footer-social">
            <h3 className="footer-title">Redes</h3>
            <div className="footer-social-links">
              <a href={profileInfo?.linkedin || "#"} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href={profileInfo?.github || "#"} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
            <a href="#hero" className="back-to-top">
              Voltar ao topo ↑
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} {profileInfo?.name || "Tiago Leopoldo"}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
