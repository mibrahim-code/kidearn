'use client';

import React, { useEffect } from 'react';
import ExportedImage from "next-image-export-optimizer";  // Added ExportedImage import

export default function Testimonials() {
  useEffect(() => {
    // Initialize Owl Carousel here if you haven't done so globally
    if (typeof window !== 'undefined') {
      // Dynamically import Owl Carousel and jQuery
      const initCarousel = async () => {
        const $ = (await import('jquery')).default;
        await import('owl.carousel');
        
        // Initialize Owl Carousel
        $('.testimonial-one__carousel').owlCarousel({
          items: 1,
          margin: 0,
          loop: true,
          smartSpeed: 700,
          nav: false,
          dots: false,
          autoplay: false,
        });
      };

      initCarousel();
    }
  }, []);

  return (
    <section className="testimonial-one">
      <div
        className="testimonial-one__pen kidearn-splax"
        data-para-options={JSON.stringify({
          orientation: 'left',
          scale: 2.5,
          overflow: true,
        })}
      >
        <ExportedImage
          unoptimized={true}
          src="/images/pen-rtl.png"
          alt="kidearn"
          width={150}
          height={150}
        />
      </div>

      <div className="container">
        <div className="testimonial-one__area">
          <div className="testimonial-one__bg"></div>
          <div
            className="testimonial-one__bg-shape kidearn-splax"
            style={{ backgroundImage: 'url(/images/testimonial-shape-1.png)' }}
            data-para-options={JSON.stringify({
              orientation: 'down',
              scale: 1.5,
              delay: '.3',
              transition: 'cubic-bezier(0,0,0,1)',
              overflow: true,
            })}
          ></div>

          <div className="testimonial-one__star-left">
            <ExportedImage
              unoptimized={true}
              src="/images/star1.png"
              alt="kidearn"
              width={50}
              height={50}
            />
          </div>
          <div className="testimonial-one__star-right">
            <ExportedImage
              unoptimized={true}
              src="/images/star2.png"
              alt="kidearn"
              width={50}
              height={50}
            />
          </div>

          <div className="sec-title text-center">
            <h6 className="sec-title__tagline">Testimonial</h6>
            <h3 className="sec-title__title">
              Parents&#39; words are the key
              <br />
              to happy kids
            </h3>
          </div>

          <div
            className="testimonial-one__carousel kidearn-owl__carousel owl-carousel owl-theme"
            data-owl-options={JSON.stringify({
              items: 1,
              margin: 0,
              loop: true,
              smartSpeed: 700,
              nav: false,
              dots: false,
              autoplay: false,
            })}
          >
            {/* Testimonial Item 1 */}
            <div className="item">
              <div className="testimonial-one__item">
                <div className="testimonial-one__item__quote">
                  Flexible Classes refers to the process of acquiring knowledge or skills through the
                  use of digital technologies and the internet.
                </div>
                <div className="testimonial-one__item__author">
                  <ExportedImage
                    unoptimized={true}
                    src="/images/testi-author-1.png"
                    alt="kidearn"
                    width={50}
                    height={50}
                  />
                  <h5 className="testimonial-one__item__author__name">Savannah Nguyen</h5>
                  <p className="testimonial-one__item__author__designation">Martin’s Father</p>
                </div>
              </div>
            </div>

            {/* Testimonial Item 2 */}
            <div className="item">
              <div className="testimonial-one__item">
                <div className="testimonial-one__item__quote">
                  Flexible Classes refers to the process of acquiring knowledge or skills through the
                  use of digital technologies and the internet.
                </div>
                <div className="testimonial-one__item__author">
                  <ExportedImage
                    unoptimized={true}
                    src="/images/testi-author-2.png"
                    alt="kidearn"
                    width={50}
                    height={50}
                  />
                  <h5 className="testimonial-one__item__author__name">Sarah Taylor</h5>
                  <p className="testimonial-one__item__author__designation">Martin’s Mother</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
