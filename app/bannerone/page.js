'use client'
import { useRef } from 'react';
import useOwlCarousel from '@/useOwlCarousel';

export default function BannerOne() {
  const carouselRef = useRef(null);

  const owlOptions = {
    loop: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeInUp',
    items: 1,
    autoplay: true,
    autoplayTimeout: 7000,
    smartSpeed: 1000,
    nav: false,
    dots: true,
    margin: 0
  };

  // Initialize the carousel
  useOwlCarousel(carouselRef, owlOptions);
  return (
    <section className="banner-one">
      <div
        ref={carouselRef}
        className="banner-one__carousel owl-carousel"
      >
        {[1, 2, 3].map((_, i) => (
          <div className="item" key={i}>
            <div className="banner-one__item">
              <div
                className="banner-one__bg"
                style={{
                  backgroundImage: `url(/assets/images/backgrounds/hero-banner-1${
                    i % 3 === 0 ? '' : i % 3 === 1 ? '-2' : '-3'
                  }-rtl.jpg)`
                }}
              />
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="banner-one__content">
                      <div className="banner-one__shape2" />
                      <div className="banner-one__shape3" />
                      <div className="banner-one__shape4">
                        <img
                          src="/assets/images/shapes/banner-1-shape-2.png"
                          alt="kidearn"
                        />
                      </div>
                      <div className="banner-one__shape5">
                        <div className="banner-one__shape5-inner" />
                      </div>
                      <div className="banner-one__shape6">
                        <div className="banner-one__shape6-inner" />
                      </div>
                      <div className="banner-one__content__bg" />
                      <h2 className="banner-one__content__title">
                        Embrace<br />confidence<br />for a lifetime
                      </h2>
                      <a href="contact.html" className="kidearn-btn">
                        <span>Book a Visit</span>
                      </a>
                      <div
                        className="banner-one__shape1 kidearn-splax"
                        style={{
                          backgroundImage: 'url("/assets/images/shapes/banner-1-shape-1.png")',
                          willChange: "transform",
                          transform: `translate3d(0px, -${[212, 188, 174][i]}px, 0px)`
                        }}
                        data-para-options='{"orientation":"down","scale":1.9,"overflow":true}'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
