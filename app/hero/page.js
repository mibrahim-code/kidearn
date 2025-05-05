'use client';
import React from 'react';
import Link from 'next/link';
import ExportedImage from 'next-image-export-optimizer';

const HeroSection = () => {
  return (
    <section className="banner-one">
      <div
        className="banner-one__carousel kidearn-owl__carousel owl-carousel kidearn-owl__carousel--with-shadow"
        data-owl-options={JSON.stringify({
          loop: true,
          animateOut: "fadeOut",
          animateIn: "fadeInUp",
          items: 1,
          autoplay: true,
          autoplayTimeout: 7000,
          smartSpeed: 1000,
          nav: false,
          navText: ["<span>", '<span class="icon-right-arrow"></span>'],
          dots: true,
          margin: 0,
        })}
      >
        {[1, 2, 3].map((num) => (
          <div className="item" key={num}>
            <div className="banner-one__item">
              <div
                className="banner-one__bg"
                style={{
                  backgroundImage: `url(/images/hero-banner-1-${num === 1 ? "" : `${num}-`}rtl.jpg)`,
                }}
              ></div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="banner-one__content">
                      <div className="banner-one__shape2"></div>
                      <div className="banner-one__shape3"></div>
                      <div className="banner-one__shape4">
                        <ExportedImage
                          unoptimized={true}
                          src="/images/banner-1-shape-2.png"
                          alt="kidearn"
                          width={200}
                          height={200}
                        />
                      </div>
                      <div className="banner-one__shape5">
                        <div className="banner-one__shape5-inner"></div>
                      </div>
                      <div className="banner-one__shape6">
                        <div className="banner-one__shape6-inner"></div>
                      </div>
                      <div className="banner-one__content__bg"></div>
                      <h2 className="banner-one__content__title">
                        Embrace<br /> confidence<br /> for a lifetime
                      </h2>
                      <Link href="/contact" className="kidearn-btn">
                        <span>Book a Visit</span>
                      </Link>
                      <div
                        className="banner-one__shape1 kidearn-splax"
                        style={{
                          backgroundImage: 'url(/images/banner-1-shape-1.png)',
                        }}
                        data-para-options={JSON.stringify({
                          orientation: 'down',
                          scale: 1.9,
                          overflow: true,
                        })}
                      ></div>
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
};

export default HeroSection;
