import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import useScripts from '../hooks/useScripts';
import 'swiper/css';
import 'swiper/css/navigation';

const Home = () => {
  useScripts(); // Load all necessary scripts

  useEffect(() => {
    document.title = 'EternaWorks - Servicii IT și Consultanță Tehnologică';
    
    // Initialize WOW animations if available
    if (window.WOW) {
      new window.WOW().init();
    }

    // Initialize other plugins after DOM is ready
    const timer = setTimeout(() => {
      if (window.$ && window.jQuery) {
        // Initialize any jQuery plugins
        if (window.jQuery('.swiper')) {
          // Swiper initialization will be handled by React Swiper
        }
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

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
    }
  ];

  const teamMembers = [
    {
      id: 1,
      name: 'Gulcinschi Daniel',
      position: 'CEO',
      image: '/assets/imgs/team/team-5.png'
    },
    {
      id: 2,
      name: 'Terentii Iulian',
      position: 'Co-Fondator',
      image: '/assets/imgs/team/team-6.png'
    },
    {
      id: 3,
      name: 'Psinicinii Igor',
      position: 'Front-End Developer',
      image: '/assets/imgs/team/team-4.png'
    },
    {
      id: 4,
      name: 'Moscalu Dionis',
      position: 'Inginer Software',
      image: '/assets/imgs/team/team-7.png'
    }
  ];

  return (
    <main>
     {/* Banner Section */}
<section className="banner-section p-relative fix">
  <Swiper
    modules={[Navigation, Autoplay]} // убрали Pagination
    spaceBetween={0}
    slidesPerView={1}
    navigation
    autoplay={{ delay: 6000 }}
    className="react-banner-swiper" // новый класс
  >
    {/* Пример слайдов */}
    <SwiperSlide>
      <div className="banner-main" style={{ backgroundImage: 'url(/assets/imgs/banner/bg3.png)' }}>
        <div className="large-container">
          <div className="banner-area p-relative z-3 wow img-custom-anim-left animated" data-wow-delay="2500ms">
            <span className="p-relative banner-sub-title">Marketing digital și identitate vizuală</span>
            <h1 className="banner-title">Promovăm afacerea ta acolo unde contează</h1>
            <p className="banner-text">
              Atragerea clienților potriviți începe cu o strategie de marketing bine gândită și o identitate vizuală memorabilă.
              Campanii Google Ads și Meta Ads + branding complet, de la logo la manual de brand.
            </p>
            <div className="banner-btn-area">
              <Link className="primary-btn-1 btn-hover" to="/services">
                DESCOPERIȚI MAI MULT &nbsp; | <i className="icon-right-arrow"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-shape-area">
        <div className="shape-1" data-background="/assets/imgs/shapes/shape-1.png"></div>
        <div className="shape-2" data-background="/assets/imgs/shapes/shape-2.png"></div>
        <div className="shape-3" data-background="/assets/imgs/shapes/shape-3.png"></div>
        <div className="shape-4" data-background="/assets/imgs/shapes/shape-4.png"></div>
        <div className="shape-5" data-background="/assets/imgs/shapes/shape-5.png"></div>
      </div>
    </SwiperSlide>

    {/* Можно добавить еще слайды сюда */}
  </Swiper>
</section>

      {/* About Section */}
      <section className="about-us-section section-space p-relative">
        <div className="shape-area">
          <div className="shape-1" style={{backgroundImage: 'url(/assets/imgs/bg/bg-shape-1.png)'}}></div>
          <div className="shape-2 quote-animation" style={{backgroundImage: 'url(/assets/imgs/shapes/shape-7.png)'}}></div>
          <div className="shape-3 quote-animation" style={{backgroundImage: 'url(/assets/imgs/shapes/shape-8.png)'}}></div>
        </div>
        <div className="small-container">
          <div className="row g-4">
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="about-us-image-area p-relative wow fadeInRight" data-wow-delay=".5s">
                <div className="border-shape" style={{backgroundImage: 'url(/assets/imgs/shapes/shape-6.png)'}}></div>
                <figure className="image-1">
                  <img src="/assets/imgs/about/about-1.jpg" alt="About EternaWorks" />
                </figure>
                <div className="image-2-area">
                  <div className="image-2 p-relative">
                    <img src="/assets/imgs/about/about-2.jpg" alt="Our Services" />
                  </div>
                </div>
                <div className="working-area float-bob-y">
                  <div className="inner p-relative">
                    <div className="icon-box">
                      <i className="icon-prize"></i>
                      <h4><span className="counter">7</span> Ani</h4>
                      <p>Experiență în domeniu</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="about-us-content-area p-relative z-1 pl-30">
                <div className="title-box mb-35 wow fadeInLeft" data-wow-delay=".5s">
                  <span className="section-sub-title">Despre noi</span>
                  <h3 className="section-title mt-10">Alegerea partenerului tău de încredere în soluții digitale și consultanță</h3>
                </div>
                <p className="mb-35 wow fadeInLeft" data-wow-delay=".5s">
                  La Eterna Works Moldova, îmbinăm tehnologia modernă cu strategii de afaceri inteligente pentru a ajuta companiile să crească durabil.
                  Oferim soluții personalizate de dezvoltare web, marketing digital și consultanță pentru finanțări, adaptate nevoilor și obiectivelor fiecărui client.
                  Echipa noastră este formată din specialiști cu experiență în IT, promovare online și scriere de proiecte pentru granturi naționale și internaționale
                </p>
                <div className="icon-box mb-20 wow fadeInLeft" data-wow-delay=".8s">
                  <div className="icon">
                    <img src="/assets/imgs/about/about-three-icon1.png" alt="Growth Icon" />
                  </div>
                  <div className="content">
                    <h5><Link to="/about">Creșterea afacerii</Link></h5>
                    <p>Transformăm ideile în rezultate concrete prin website-uri performante, campanii publicitare eficiente și strategii digitale orientate spre conversii.</p>
                  </div>
                </div>
                <div className="icon-box mb-20 wow fadeInLeft" data-wow-delay=".9s">
                  <div className="icon">
                    <img src="/assets/imgs/about/about-three-icon2.png" alt="Consulting Icon" />
                  </div>
                  <div className="content">
                    <h5><Link to="/about">Consultanță tehnologică</Link></h5>
                    <p>De la dezvoltarea brandului până la atragerea de finanțări, îți oferim suport pas cu pas pentru a-ți dezvolta afacerea în mod inteligent și sustenabil.</p>
                  </div>
                </div>
                <div className="about-btn-box wow fadeInLeft" data-wow-delay="1s">
                  <Link className="primary-btn-1 btn-hover" to="/about">
                    despre noi &nbsp; | <i className="icon-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="service-slider-section section-space bg-color-1 p-relative">
        <div className="shape-1 float-bob-y" style={{backgroundImage: 'url(/assets/imgs/shapes/shape-10.png)'}}></div>
        <div className="shape-2 float-bob-y" style={{backgroundImage: 'url(/assets/imgs/shapes/shape-9.png)'}}></div>
        <div className="shape-3" style={{backgroundImage: 'url(/assets/imgs/shapes/shape-11.png)'}}></div>
        <div className="small-container">
          <div className="row">
            <div className="col-xxl-6">
              <div className="title-box mb-50 wow fadeInLeft" data-wow-delay=".5s">
                <span className="section-sub-title">SERVICIILE NOASTRE</span>
                <h3 className="section-title mt-10">Soluții Digitale & Consultanță pentru Dezvoltarea Afacerii</h3>
              </div>
            </div>
            <div className="col-xxl-6">
              <div className="service_1_navigation__wrapprer position-relative z-1 text-end mt-30">
                <div className="common-slider-navigation">
                </div>
              </div>
            </div>
          </div>
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            navigation={{
              nextEl: '.service-1-button-next',
              prevEl: '.service-1-button-prev',
            }}
            className="service-active-1"
          >
            {services.map(service => (
              <SwiperSlide key={service.id}>
                <div className="service-slider-area p-relative">
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
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="common-slider-navigation">
     
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-1-section bg-color-1 p-relative wow fadeInDown" data-wow-delay=".5s">
        <div className="small-container">
          <div className="row g-0 box-shadow-1 fix">
            <div className="col-xxl-6 col-lg-6 bg-white">
              <figure className="image w-img">
                <img src="/assets/imgs/resources/cta-1.jpg" alt="Contact Us" />
              </figure>
            </div>
            <div className="col-xxl-6 col-lg-6">
              <div className="content p-relative">
                <div className="shape-1" style={{backgroundImage: 'url(/assets/imgs/shapes/shape-12.png)'}}></div>
                <div className="icon-box">
                  <i className="fal fa-phone-volume"></i>
                </div>
                <h3 className="mb-15">Contactează-ne pentru o ofertă personalizată</h3>
                <h5><a href="tel:+37376575826">+373 765 758 26</a></h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Choose Section */}
      <section className="choose-section bg-color-1 section-space-top p-relative">
        <div className="bg-image" data-background="/assets/imgs/bg/choose-bg.png" style={{backgroundImage: 'url(/assets/imgs/bg/choose-bg.png)'}}></div>
        <div className="shape-image" data-background="/assets/imgs/shapes/shape-15.png" style={{backgroundImage: 'url(/assets/imgs/shapes/shape-15.png)'}}></div>
        <div className="small-container">      
          <div className="row g-4">
            <div className="col-xxl-6 col-xl-6 col-lg-6 p-relative section-space-medium-bottom">
              <div className="title-box mb-50 wow fadeInLeft" data-wow-delay=".5s">
                <span className="section-sub-title">DE CE SĂ NE ALEGI</span>
                <h3 className="section-title mt-10">De ce Eterna Works este alegerea potrivită</h3>
              </div>
              <div className="choose-area-icon-box mb-15 wow fadeInRight" data-wow-delay=".5s">
                <div className="icon-box p-relative">
                  <i className="icon-roof-4"></i>
                </div>
                <div className="content">
                  <h5><Link to="/services">Servicii complete sub același acoperiș</Link></h5>
                  <p>Dezvoltare web, marketing digital, branding și consultanță pentru afaceri – toate integrate pentru un rezultat coerent și de succes</p>
                </div>
              </div>
              <hr />
              <div className="choose-area-icon-box mb-15 wow fadeInRight" data-wow-delay=".7s">
                <div className="icon-box p-relative">
                  <i className="icon-target"></i>
                </div>
                <div className="content">
                  <h5><Link to="/services">Abordare personalizată</Link></h5>
                  <p>Fiecare proiect începe cu înțelegerea nevoilor tale și se finalizează cu o soluție adaptată 100% business-ului tău.</p>
                </div>
              </div>
              <hr />
              <div className="choose-area-icon-box mb-15 wow fadeInRight" data-wow-delay=".9s">
                <div className="icon-box p-relative">
                  <i className="icon-help"></i>
                </div>
                <div className="content">
                  <h5><Link to="/services">Parteneriat pe termen lung</Link></h5>
                  <p>Oferim mentenanță și suport continuu, astfel încât afacerea ta să crească și după finalizarea proiectului.</p>
                </div>
              </div>
              <hr />
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 wow fadeInLeft" data-wow-delay="1.2s">
              <figure className="image m-img">
                <img src="/assets/imgs/resources/choose-1.png" alt="Why Choose Us" />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section p-relative section-space">
        <div className="shape-1" style={{backgroundImage: 'url(/assets/imgs/shapes/shape-13.png)'}}></div>
        <div className="shape-2 float-bob-y" style={{backgroundImage: 'url(/assets/imgs/shapes/shape-14.png)'}}></div>
        <div className="container">
          <div className="title-box text-center mb-50 wow fadeInLeft" data-wow-delay=".5s">
            <span className="section-sub-title">ECHIPA NOASTRĂ</span>
            <h3 className="section-title mt-10">Cei care dau viață proiectelor noastre</h3>
          </div>
          <div className="row g-4">
            {teamMembers.map((member, index) => (
              <div key={member.id} className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
                <div className={`team-area-box p-relative mb-60 wow ${index % 4 === 0 ? 'fadeInLeft' : index % 4 === 1 ? 'fadeInDown' : index % 4 === 2 ? 'fadeInUp' : 'fadeInRight'}`} data-wow-delay={`.${7 + index * 2}s`}>
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
                    <div className="social-links p-relative">
                      <span><i className="icon-share"></i></span>
                      <ul>
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-whatsapp"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fab fa-telegram"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Section */}
      <div className="brand-section section-space-bottom">
        <div className="small-container">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 6 }
            }}
            className="brand-active"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(brand => (
              <SwiperSlide key={brand}>
                <span>
                  <a href="#">
                    <img src={`/assets/imgs/resources/brand-${brand}.png`} alt={`Brand ${brand}`} />
                  </a>
                </span>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </main>
  );
};

export default Home;