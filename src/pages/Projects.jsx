import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <main>
      <section className="page-title-area" style={{backgroundImage: 'url(/assets/imgs/resources/page-title-bg-1.jpg)'}}>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="page-title-wrapper text-center">
                <h1 className="page-title mb-25">Proiecte</h1>
                <div className="breadcrumb-menu">
                  <nav aria-label="Breadcrumbs" className="breadcrumb-trail breadcrumbs">
                    <ul className="trail-items">
                      <li className="trail-item trail-begin">
                        <Link to="/"><span>Acasă</span></Link>
                      </li>
                      <li className="trail-item trail-end">
                        <span>Proiecte</span>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="projects-section section-space">
        <div className="container">
          <div className="title-box text-center mb-50">
            <span className="section-sub-title">PORTOFOLIUL NOSTRU</span>
            <h3 className="section-title mt-10">Proiecte realizate cu succes</h3>
          </div>
          <div className="row g-4">
            {[1, 2, 3, 4, 5, 6].map(project => (
              <div key={project} className="col-xxl-4 col-xl-4 col-lg-6">
                <div className="project-area-box p-relative">
                  <figure className="image m-img">
                    <img src={`/assets/imgs/project/project-${project}.jpg`} alt={`Proiect ${project}`} />
                  </figure>
                  <div className="content-area">
                    <div className="title-area">
                      <h6 className="mb-5">Tehnologie</h6>
                      <h5><Link to={`/project-details/${project}`}>Proiect {project}</Link></h5>
                    </div>
                    <div className="icon-area">
                      <Link to={`/project-details/${project}`}><i className="icon-arrow-up"></i></Link>
                    </div>
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

export default Projects;