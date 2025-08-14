import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Dezvoltare Website-uri & Aplicații Web',
      description: 'Creăm website-uri profesionale, magazine online și aplicații web personalizate, optimizate pentru performanță și adaptate brandului tău.',
      image: '/assets/imgs/service/service-1.jpg',
      icon: '/assets/imgs/icon/icon.png'
    },
    {
      id: 2,
      title: 'Automatizări, CRM & Mentenanță IT',
      description: 'Implementăm soluții CRM și procese automatizate, plus servicii complete de mentenanță și suport tehnic pentru funcționare fără întreruperi.',
      image: '/assets/imgs/service/service-2.jpg',
      icon: '/assets/imgs/icon/icon-2.png'
    },
    {
      id: 3,
      title: 'Marketing Digital & Publicitate Online',
      description: 'Lansăm campanii Google Ads și Meta Ads optimizate pentru conversii, cu strategii de remarketing și targetare avansată.',
      image: '/assets/imgs/service/service-3.jpg',
      icon: '/assets/imgs/icon/icon-3.png'
    },
    {
      id: 4,
      title: 'Consultanță pentru Afaceri & Finanțări',
      description: 'Oferim planuri de afaceri, proiecții financiare și sprijin în atragerea de finanțări nerambursabile și credite avantajoase.',
      image: '/assets/imgs/service/service-4.jpg',
      icon: '/assets/imgs/icon/icon-4.png'
    },
    {
      id: 5,
      title: 'Scriere Proiecte & Management Granturi',
      description: 'Pregătim dosare complete pentru granturi, de la idee până la implementare, inclusiv pentru ONG-uri și instituții publice.',
      image: '/assets/imgs/service/service-5.jpg',
      icon: '/assets/imgs/icon/icon-5.png'
    },
    {
      id: 6,
      title: 'Identitate Vizuală & Branding',
      description: 'Creăm logo-uri, palete de culori și manuale de brand pentru a-ți construi o imagine coerentă și memorabilă.',
      image: '/assets/imgs/service/service-6.jpg',
      icon: '/assets/imgs/icon/icon-6.png'
    }
  ];

  return (
    <main>
      <section className="page-title-area" style={{backgroundImage: 'url(/assets/imgs/resources/page-title-bg-1.jpg)'}}>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="page-title-wrapper text-center">
                <h1 className="page-title mb-25">Servicii</h1>
                <div className="breadcrumb-menu">
                  <nav aria-label="Breadcrumbs" className="breadcrumb-trail breadcrumbs">
                    <ul className="trail-items">
                      <li className="trail-item trail-begin">
                        <Link to="/"><span>Acasă</span></Link>
                      </li>
                      <li className="trail-item trail-end">
                        <span>Servicii</span>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section section-space">
        <div className="container">
          <div className="title-box text-center mb-50">
            <span className="section-sub-title">SERVICIILE NOASTRE</span>
            <h3 className="section-title mt-10">Soluții complete pentru afacerea ta</h3>
          </div>
          <div className="row g-4">
            {services.map(service => (
              <div key={service.id} className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                <div className="service-area-box p-relative">
                  <figure className="image w-img">
                    <img src={service.image} alt={service.title} />
                  </figure>
                  <div className="content">
                    <div className="icon-box">
                      <img src={service.icon} alt="Service Icon" />
                    </div>
                    <h4 className="mb-15">
                      <Link to={`/service-details/${service.id}`}>{service.title}</Link>
                    </h4>
                    <p className="mb-25">{service.description}</p>
                    <Link to={`/service-details/${service.id}`} className="service-btn">
                      Detalii serviciu <i className="icon-arrow-right-double"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;