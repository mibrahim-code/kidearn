'use client';

import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Dynamically import OwlCarousel to avoid SSR issues
const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });

const AboutTestimonial = () => {
  const carouselOptions = {
    items: 1,
    margin: 0,
    loop: true,
    smartSpeed: 700,
    nav: true,
    navText: [
      '<span class="icon-left-arrow"></span>',
      '<span class="icon-right-arrow"></span>',
    ],
    dots: false,
    autoplay: false,
  };

  const testimonials = [
    {
      name: 'Savannah Nguyen',
      role: 'Martin’s Father',
      image: '/assets/images/resources/testi-author-1.png',
    },
    {
      name: 'Sarah Taylor',
      role: 'Martin’s Mother',
      image: '/assets/images/resources/testi-author-2.png',
    },
  ];

  return (
    <section className="testimonial-one testimonial-one--home-two testimonial-one--about-page">
      <div
        className="testimonial-one__left-shape kidearn-splax"
        style={{
          willChange: 'transform',
          transform: 'translate3d(21px, 0px, 0px)',
        }}
      >
        <Image
          src="/assets/images/shapes/testimonial-shape-2.png"
          alt="kidearn"
          width={100}
          height={100}
          unoptimized
        />
      </div>

      <div
        className="testimonial-one__right-shape kidearn-splax"
        style={{
          willChange: 'transform',
          transform: 'translate3d(-36px, 0px, 0px)',
        }}
      >
        <Image
          src="/assets/images/shapes/testimonial-shape-3.png"
          alt="kidearn"
          width={100}
          height={100}
          unoptimized
        />
      </div>

      <div className="container">
        <div className="testimonial-one__area">
          <div className="testimonial-one__bg" />
          <div
            className="testimonial-one__bg-shape kidearn-splax"
            style={{
              backgroundImage:
                'url("/assets/images/shapes/testimonial-shape-4.png")',
              willChange: 'transform',
              transform: 'translate3d(-36px, 0px, 0px)',
              transition: 'transform 0.3s cubic-bezier(0, 0, 0, 1)',
            }}
          ></div>

          <div className="sec-title text-center">
            <h6 className="sec-title__tagline">Testimonial</h6>
            <h3 className="sec-title__title">
              Parents&apos; words are the
              <br />
              key to happy kids
            </h3>
          </div>

          <OwlCarousel
            className="testimonial-one__carousel owl-theme"
            {...carouselOptions}
          >
            {testimonials.map((author, idx) => (
              <div className="item" key={idx}>
                <div className="testimonial-one__item">
                  <div className="testimonial-one__item__quote">
                    Flexible Classes refers to the process of acquiring knowledge
                    or skills through the use of digital technologies and the
                    internet. Flexible Classes refers to the process flexible
                    Classes refers to the process
                  </div>
                  <div className="testimonial-one__item__author">
                    <Image
                      src={author.image}
                      alt={author.name}
                      width={100}
                      height={100}
                      unoptimized
                    />
                    <h5 className="testimonial-one__item__author__name">
                      {author.name}
                    </h5>
                    <p className="testimonial-one__item__author__designation">
                      {author.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
};

export default AboutTestimonial;
