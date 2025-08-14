import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      {/* Search area */}
      {isSearchOpen && (
        <div className="df-search-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="df-search-form">
                  <div className="df-search-close text-center mb-20">
                    <button 
                      className="df-search-close-btn"
                      onClick={() => setIsSearchOpen(false)}
                    ></button>
                  </div>
                  <form action="#">
                    <div className="df-search-input mb-10">
                      <input type="text" placeholder="Căutați aici..." />
                      <button type="submit"><i className="icon-search"></i></button>
                    </div>
                    <div className="df-search-category">
                      <span>Căutați după : </span>
                      <Link to="/services">Dezvoltare Software, </Link>
                      <Link to="/services">Instalare Sisteme, </Link>
                      <Link to="/services">Consultanță IT, </Link>
                      <Link to="/services">Renovare Digitală </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Header area */}
      <header>
        <div className="container-fluid bg-color-1">
          <div className="header-top">
            <div className="header-top-contact-info">
              <span className="email p-relative">
                <a href="mailto:contact@etarnaworks.md">contact@etarnaworks.md</a>
              </span>
              <span className="time p-relative">Luni – Sâmbătă: 09:00 – 18:00</span>
            </div>
            <div className="header-top-socials">
              <span><a href="#"><i className="fab fa-facebook-f"></i></a></span>
              <span><a href="#"><i className="fab fa-whatsapp"></i></a></span>
              <span><a href="#"><i className="fab fa-instagram"></i></a></span>
              <span><a href="#"><i className="fab fa-telegram"></i></a></span>
            </div>
          </div>
        </div>
        
        <div id="header-sticky" className="header-area">
          <div className="large-container">
            <div className="mega-menu-wrapper">
              <div className="header-main">
                <div className="header-left">
                  <div className="header-logo">
                    <Link to="/">
                      <img src="/assets/imgs/logo/logo.svg" alt="EternaWorks Logo" />
                    </Link>
                  </div>
                </div>
                
                <div className="header-right d-flex justify-content-end">
                  <div className="mean__menu-wrapper d-none d-lg-block">
                    <div className="main-menu">
                      <nav id="mobile-menu">
                        <ul>
                          <li className="active">
                            <Link to="/">Acasă</Link>
                          </li>
                          <li>
                            <Link to="/about">Despre noi</Link>
                          </li>
                          <li>
                            <Link to="/services">Servicii</Link>
                            <ul className="submenu">
                              <li><Link to="/services">Servicii</Link></li>
                              <li><Link to="/service-details/1">Detalii servicii</Link></li>
                            </ul>
                          </li>
                          <li className="has-dropdown">
                            <Link to="/projects">Pagini</Link>
                            <ul className="submenu">
                              <li className="has-dropdown">
                                <Link to="/projects">Proiecte</Link>
                                <ul className="submenu">
                                  <li><Link to="/projects">Proiecte</Link></li>
                                  <li><Link to="/project-details/1">Detalii proiect</Link></li>
                                </ul>
                              </li>
                              <li><Link to="/team">Echipa</Link></li>
                              <li><Link to="/team-details/1">Detalii echipă</Link></li>
                              <li><Link to="/faq">Întrebări frecvente</Link></li>
                            </ul>
                          </li>
                          <li className="has-dropdown">
                            <Link to="/blog">Blog</Link>
                            <ul className="submenu">
                              <li><Link to="/blog">Blog standard</Link></li>
                              <li><Link to="/blog">Blog grilă</Link></li>
                              <li><Link to="/blog-details/1">Detalii blog</Link></li>
                            </ul>
                          </li>
                          <li>
                            <Link to="/contact">Contact</Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  
                  <div 
                    className="search-toggle-open header-search my-auto"
                    onClick={() => setIsSearchOpen(true)}
                  >
                    <div className="search-icon">
                      <i className="icon-search"></i>
                    </div>
                  </div>
                  
                  <div className="header-action d-none d-xl-inline-flex gap-5">
                    <div className="header-link">
                      <Link className="primary-btn-1 btn-hover" to="/contact">
                        Solicită ofertă &nbsp; | <i className="icon-right-arrow"></i>
                      </Link>
                    </div>
                  </div>
                  
                  <div className="header-action">
                    <div className="header-link-1">
                      <div className="icon">
                        <i className="fal fa-phone-volume"></i>
                      </div>
                      <div className="content">
                        <span>Sunați acum</span>
                        <h6><a href="tel:+37376575826">+373 765 758 26</a></h6>
                      </div>
                    </div>
                  </div>
                  
                  <div 
                    className="header__hamburger d-xl-none my-auto"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                    <div className="sidebar__toggle">
                      <a className="bar-icon" href="javascript:void(0)">
                        <i className="fa-light fa-bars-sort"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Overlays */}
      <div className="body-overlay" style={{ display: isSearchOpen ? 'block' : 'none' }}></div>
    </>
  );
};

export default Header;