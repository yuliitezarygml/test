import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <main>
      <section className="error-section section-space">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-8 col-xl-8 col-lg-10">
              <div className="error-content text-center">
                <div className="error-image mb-50">
                  <img src="/assets/imgs/resources/error.png" alt="404 Error" />
                </div>
                <h1 className="error-title mb-25">404</h1>
                <h3 className="mb-25">Pagina nu a fost găsită</h3>
                <p className="mb-40">
                  Ne pare rău, dar pagina pe care o căutați nu există. 
                  Puteți reveni la pagina principală sau să navigați prin meniul nostru.
                </p>
                <Link to="/" className="primary-btn-1 btn-hover">
                  Înapoi acasă <i className="icon-right-arrow"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Error404;