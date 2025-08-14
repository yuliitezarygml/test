import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [activeItem, setActiveItem] = useState(null);

  const faqItems = [
    {
      id: 1,
      question: 'Ce servicii oferiti?',
      answer: 'Oferim o gamă completă de servicii IT: dezvoltare web, marketing digital, branding, consultanță pentru afaceri și fianțări.'
    },
    {
      id: 2,
      question: 'Cât durează un proiect de dezvoltare web?',
      answer: 'Durata depinde de complexitatea proiectului. Un site simplu poate fi gata în 2-4 săptămâni, iar unul complex poate dura 2-6 luni.'
    },
    {
      id: 3,
      question: 'Oferiți suport după lansarea proiectului?',
      answer: 'Da, oferim suport și mentennță pe termen lung pentru toate proiectele realizate.'
    }
  ];

  const toggleItem = (id) => {
    setActiveItem(activeItem === id ? null : id);
  };

  return (
    <main>
      <section className="page-title-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="page-title-wrapper text-center">
                <h1 className="page-title mb-25">Întrebări frecvente</h1>
                <div className="breadcrumb-menu">
                  <nav aria-label="Breadcrumbs" className="breadcrumb-trail breadcrumbs">
                    <ul className="trail-items">
                      <li className="trail-item trail-begin">
                        <Link to="/"><span>Acasă</span></Link>
                      </li>
                      <li className="trail-item trail-end">
                        <span>Întrebări frecvente</span>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="faq-section section-space">
        <div className="container">
          <div className="title-box text-center mb-50">
            <span className="section-sub-title">FAQ</span>
            <h3 className="section-title mt-10">Întrebări frecvent puse</h3>
          </div>
          <div className="row justify-content-center">
            <div className="col-xxl-8 col-xl-8 col-lg-10">
              <div className="faq-accordion">
                {faqItems.map(item => (
                  <div key={item.id} className="faq-item">
                    <div 
                      className={`faq-question ${activeItem === item.id ? 'active' : ''}`}
                      onClick={() => toggleItem(item.id)}
                    >
                      <h5>{item.question}</h5>
                      <i className={`fas ${activeItem === item.id ? 'fa-minus' : 'fa-plus'}`}></i>
                    </div>
                    {activeItem === item.id && (
                      <div className="faq-answer">
                        <p>{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FAQ;