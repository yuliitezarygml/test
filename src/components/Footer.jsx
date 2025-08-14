import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer-main bg-color-1">
        <div className="footer-top section-space-medium">
          <div className="small-container">
            <div className="row g-4">
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                <div className="footer-widget-1">
                  <figure className="image">
                    <img src="/assets/imgs/logo/1.png" alt="EternaWorks Logo" />
                  </figure>
                  <p className="mt-40 mb-40">
                    Construim, digitalizăm și promovăm afaceri. Soluții complete: 
                    dezvoltare web, marketing digital, branding și consultanță pentru finanțări.
                  </p>
                  <div className="footer-socials">
                    <span><a href="#"><i className="fab fa-facebook-f"></i></a></span>
                    <span><a href="#"><i className="fab fa-whatsapp"></i></a></span>
                    <span><a href="#"><i className="fab fa-instagram"></i></a></span>
                    <span><a href="#"><i className="fab fa-telegram"></i></a></span>
                  </div>
                </div>
              </div>
              
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                <div className="footer-widget-2 text-center">
                  <h4 className="mb-20 footer-title">Serviciile noastre</h4>
                  <div className="row">
                    <div className="col-md-6">
                      <ul className="service-list">
                        <li><Link to="/service-details/1">Dezvoltare website-uri & aplicații web</Link></li>
                        <li><Link to="/service-details/2">Automatizări, CRM & mentenanță IT</Link></li>
                        <li><Link to="/service-details/3">Marketing digital & publicitate online</Link></li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="service-list">
                        <li><Link to="/service-details/4">Identitate vizuală & branding</Link></li>
                        <li><Link to="/service-details/5">Consultanță pentru afaceri & finanțări</Link></li>
                        <li><Link to="/service-details/6">Scriere proiecte & management granturi</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                <div className="footer-widget-4 pr-30">
                  <h4 className="mb-20 footer-title">Buletin informativ</h4>
                  <p>Abonează-te pentru noutăți și obține 30% reducere pentru utilizatorii noi.</p>
                  <div className="footer-subscribe">
                    <form action="#">
                      <input type="email" name="email" placeholder="Adresa ta de email" required />
                      <button type="submit" className="primary-btn-1 btn-hover">
                        ABONEAZĂ-TE ACUM
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="small-container">
          <div className="footer-bottom pt-30 pb-30">
            <div className="left-area">
              <span>© Toate drepturile rezervate 2024 de <Link to="/">EternaWorks</Link></span>
            </div>
            <div className="right-area">
              <span><Link to="#">Termeni & Condiții</Link></span>
              <span><Link to="#">Politica de Confidențialitate</Link></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;