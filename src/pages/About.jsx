import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <main>
      <section className="page-title-area" style={{backgroundImage: 'url(/assets/imgs/resources/page-title-bg-1.jpg)'}}>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="page-title-wrapper text-center">
                <h1 className="page-title mb-25">Despre noi</h1>
                <div className="breadcrumb-menu">
                  <nav aria-label="Breadcrumbs" className="breadcrumb-trail breadcrumbs">
                    <ul className="trail-items">
                      <li className="trail-item trail-begin">
                        <Link to="/"><span>Acasă</span></Link>
                      </li>
                      <li className="trail-item trail-end">
                        <span>Despre noi</span>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-us-section section-space p-relative">
        <div className="small-container">
          <div className="row g-4">
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="about-us-image-area p-relative">
                <figure className="image-1">
                  <img src="/assets/imgs/about/about-1.jpg" alt="About EternaWorks" />
                </figure>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="about-us-content-area p-relative z-1 pl-30">
                <div className="title-box mb-35">
                  <span className="section-sub-title">Despre noi</span>
                  <h3 className="section-title mt-10">
                    Partenerii tăi de încredere în transformarea digitală
                  </h3>
                </div>
                <p className="mb-35">
                  Eterna Works Moldova este o companie de IT și consultanță cu peste 7 ani de experiență în piața moldovenească. 
                  Suntem specializați în dezvoltarea de soluții digitale complete care ajută businessurile să crească și să prospere în era digitală.
                </p>
                <p className="mb-35">
                  Echipa noastră multidisciplinară combină expertiza tehnică cu înțelegerea profundă a nevoilor de business, 
                  oferind servicii personalizate de la consultanță strategică până la implementarea completă a soluțiilor digitale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;