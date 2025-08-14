import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { contactAPI } from '../utils/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await contactAPI.submitContact(formData);
      if (response.success) {
        setSubmitStatus({ type: 'success', message: response.message });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <section className="page-title-area" style={{backgroundImage: 'url(/assets/imgs/resources/page-title-bg-1.jpg)'}}>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="page-title-wrapper text-center">
                <h1 className="page-title mb-25">Contact</h1>
                <div className="breadcrumb-menu">
                  <nav aria-label="Breadcrumbs" className="breadcrumb-trail breadcrumbs">
                    <ul className="trail-items">
                      <li className="trail-item trail-begin">
                        <Link to="/"><span>Acasă</span></Link>
                      </li>
                      <li className="trail-item trail-end">
                        <span>Contact</span>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section section-space">
        <div className="container">
          <div className="row g-5">
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="contact-form-area">
                <div className="title-box mb-40">
                  <span className="section-sub-title">CONTACTAȚI-NE</span>
                  <h3 className="section-title mt-10">Să discutăm despre proiectul tău</h3>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="contact-form-input">
                        <input
                          type="text"
                          name="name"
                          placeholder="Numele complet *"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="contact-form-input">
                        <input
                          type="email"
                          name="email"
                          placeholder="Adresa de email *"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="contact-form-input">
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Numărul de telefon"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="contact-form-input">
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subiectul *"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="contact-form-input">
                        <textarea
                          name="message"
                          placeholder="Mesajul tău *"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-12">
                      {submitStatus && (
                        <div className={`alert ${submitStatus.type === 'success' ? 'alert-success' : 'alert-danger'} mb-3`}>
                          {submitStatus.message}
                        </div>
                      )}
                      <div className="contact-form-btn">
                        <button 
                          type="submit" 
                          className="primary-btn-1 btn-hover" 
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? 'Se trimite...' : 'Trimite mesajul'} 
                          <i className="icon-right-arrow"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <div className="contact-info-area">
                <div className="title-box mb-30">
                  <h4>Informații de contact</h4>
                </div>
                <div className="contact-info-box">
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="fal fa-map-marker-alt"></i>
                    </div>
                    <div className="content">
                      <h6>Adresa</h6>
                      <p>Chișinău, Moldova</p>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="fal fa-phone"></i>
                    </div>
                    <div className="content">
                      <h6>Telefon</h6>
                      <p><a href="tel:+37376575826">+373 765 758 26</a></p>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="fal fa-envelope"></i>
                    </div>
                    <div className="content">
                      <h6>Email</h6>
                      <p><a href="mailto:contact@etarnaworks.md">contact@etarnaworks.md</a></p>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="fal fa-clock"></i>
                    </div>
                    <div className="content">
                      <h6>Program de lucru</h6>
                      <p>Luni – Sâmbătă: 09:00 – 18:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;