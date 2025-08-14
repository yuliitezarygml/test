import React from 'react';
import { useParams, Link } from 'react-router-dom';

const TeamDetails = () => {
  const { id } = useParams();
  
  return (
    <main>
      <section className="page-title-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="page-title-wrapper text-center">
                <h1 className="page-title mb-25">Detalii Membru</h1>
                <div className="breadcrumb-menu">
                  <nav aria-label="Breadcrumbs" className="breadcrumb-trail breadcrumbs">
                    <ul className="trail-items">
                      <li className="trail-item trail-begin">
                        <Link to="/"><span>Acasă</span></Link>
                      </li>
                      <li className="trail-item">
                        <Link to="/team"><span>Echipa</span></Link>
                      </li>
                      <li className="trail-item trail-end">
                        <span>Detalii Membru</span>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="team-details-section section-space">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Membru #{id}</h2>
              <p>Detalii despre membrul echipei vor fi afișate aici.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TeamDetails;