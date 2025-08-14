import React from 'react';
import { Link } from 'react-router-dom';

const Team = () => {
  const teamMembers = [
    { id: 1, name: 'Gulcinschi Daniel', position: 'CEO', image: '/assets/imgs/team/team-5.png' },
    { id: 2, name: 'Terentii Iulian', position: 'Co-Fondator', image: '/assets/imgs/team/team-6.png' },
    { id: 3, name: 'Psinicinii Igor', position: 'Front-End Developer', image: '/assets/imgs/team/team-4.png' },
    { id: 4, name: 'Moscalu Dionis', position: 'Inginer Software', image: '/assets/imgs/team/team-7.png' }
  ];

  return (
    <main>
      <section className="page-title-area" style={{backgroundImage: 'url(/assets/imgs/resources/page-title-bg-1.jpg)'}}>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="page-title-wrapper text-center">
                <h1 className="page-title mb-25">Echipa</h1>
                <div className="breadcrumb-menu">
                  <nav aria-label="Breadcrumbs" className="breadcrumb-trail breadcrumbs">
                    <ul className="trail-items">
                      <li className="trail-item trail-begin">
                        <Link to="/"><span>Acasă</span></Link>
                      </li>
                      <li className="trail-item trail-end">
                        <span>Echipa</span>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="team-section section-space">
        <div className="container">
          <div className="title-box text-center mb-50">
            <span className="section-sub-title">ECHIPA NOASTRĂ</span>
            <h3 className="section-title mt-10">Cei care dau viață proiectelor noastre</h3>
          </div>
          <div className="row g-4">
            {teamMembers.map(member => (
              <div key={member.id} className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
                <div className="team-area-box p-relative mb-60">
                  <figure className="image w-img p-relative">
                    <img src={member.image} alt={member.name} />
                  </figure>
                  <div className="content">
                    <div className="author-info">
                      <h5 className="mb-5">
                        <Link to={`/team-details/${member.id}`}>{member.name}</Link>
                      </h5>
                      <span>{member.position}</span>
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

export default Team;