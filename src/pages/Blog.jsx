import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <main>
      <section className="page-title-area" style={{backgroundImage: 'url(/assets/imgs/resources/page-title-bg-1.jpg)'}}>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="page-title-wrapper text-center">
                <h1 className="page-title mb-25">Blog</h1>
                <div className="breadcrumb-menu">
                  <nav aria-label="Breadcrumbs" className="breadcrumb-trail breadcrumbs">
                    <ul className="trail-items">
                      <li className="trail-item trail-begin">
                        <Link to="/"><span>Acasă</span></Link>
                      </li>
                      <li className="trail-item trail-end">
                        <span>Blog</span>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="blog-section section-space">
        <div className="container">
          <div className="title-box text-center mb-50">
            <span className="section-sub-title">BLOGUL NOSTRU</span>
            <h3 className="section-title mt-10">Resurse și articole utile</h3>
          </div>
          <div className="row g-4">
            {[1, 2, 3, 4, 5, 6].map(post => (
              <div key={post} className="col-xxl-4 col-xl-4 col-lg-6">
                <div className="blog-style-one">
                  <Link className="blog-image w-img" to={`/blog-details/${post}`}>
                    <img src={`/assets/imgs/blog/blog-${post}.jpg`} alt={`Blog post ${post}`} />
                  </Link>
                  <div className="blog-content">
                    <div className="post-meta">
                      <span className="p-relative"><i className="fal fa-user"></i> By Admin</span>
                      <span className="p-relative"><i className="fal fa-calendar-alt"></i>28 Nov, 2024</span>
                    </div>
                    <hr />
                    <h5 className="blog-title mb-30">
                      <Link to={`/blog-details/${post}`}>Titlu articol blog {post}</Link>
                    </h5>
                    <div className="blog-link">
                      <Link className="primary-btn-5 btn-hover" to={`/blog-details/${post}`}>
                        Read MORE &nbsp; | <i className="icon-right-arrow"></i>
                      </Link>
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

export default Blog;