'use client'
import React, { useEffect } from "react";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";

const EnrollSection = () => {
  useEffect(() => {
    // Load jQuery if not already loaded
    if (typeof window !== 'undefined' && !window.jQuery) {
      const script = document.createElement('script');
      script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
      script.async = true;
      script.onload = initCounters;
      document.head.appendChild(script);
    } else {
      initCounters();
    }

    function initCounters() {
      if (typeof window !== 'undefined' && window.jQuery) {
        $('.count-text').each(function () {
          const $this = $(this);
          $this.prop('Counter', 0).animate({
            Counter: $this.data('stop')
          }, {
            duration: $this.data('speed') || 1500,
            easing: 'swing',
            step: function (now) {
              $this.text(now.toFixed($this.data('decimal') ? 2 : 0));
            }
          });
        });
      }
    }

    // Reinitialize when route changes
    const handleRouteChange = () => {
      setTimeout(initCounters, 100);
    };

    // Use Next.js router events instead of custom event
    const router = window.next.router;
    router?.events?.on('routeChangeComplete', handleRouteChange);
    
    return () => {
      router?.events?.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <>
      <section className="cta-one cta-one--about-page">
        <div className="container">
          <div className="cta-one__inner">
            <div
              className="cta-one__shape1 kidearn-splax"
              data-para-options='{ "orientation": "right", "scale": 1.5, "delay": ".4", "transition": "cubic-bezier(0,0,0,1)", "overflow": true }'
            >
              <ExportedImage
                unoptimized={true}
                src="/images/cta-shape-1.png"
                alt="kidearn"
                width={200}
                height={100}
              />
            </div>
            <div
              className="cta-one__shape2 kidearn-splax"
              data-para-options='{ "orientation": "down", "scale": 1.5, "delay": ".4", "transition": "cubic-bezier(0,0,0,1)", "overflow": true }'
            >
              <ExportedImage
                unoptimized={true}
                src="/images/cta-shape-2.png"
                alt="kidearn"
                width={200}
                height={100}
              />
            </div>
            <div className="row">
              <div className="col-lg-6 wow fadeInLeft" data-wow-delay="100ms">
                <div className="cta-one__content">
                  <h3 className="cta-one__title">How to enroll your child to a class?</h3>
                  <Link href="/about" passHref>
                    <span className="kidearn-btn">
                      <span>Visit Now</span>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="cta-one__one wow fadeInUp" data-wow-delay="300ms">
                  <ExportedImage
                    unoptimized={true}
                    src="/images/cta-1.png"
                    alt="kidearn"
                    width={500}
                    height={200}
                  />
                  <div className="cta-one__one__text">All in<br /> One</div>
                </div>
                <div className="cta-one__thumb">
                  <div className="cta-one__thumb__two">
                    <ExportedImage
                      unoptimized={true}
                      src="/images/cta-2.png"
                      alt="kidearn"
                      width={500}
                      height={200}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="funfact-one">
        <div
          className="funfact-one__shape1 kidearn-splax"
          data-para-options='{ "orientation": "down", "scale": 1.9, "delay": ".3", "transition": "cubic-bezier(0,0,0,1)", "overflow": true }'
        >
          <ExportedImage
            unoptimized={true}
            src="/images/funfact-shape-1.png"
            alt="kidearn"
            width={100}
            height={100}
          />
        </div>
        <div
          className="funfact-one__shape2 kidearn-splax"
          data-para-options='{ "orientation": "right", "scale": 1.9, "delay": ".4", "transition": "cubic-bezier(0,0,0,1)", "overflow": true }'
        >
          <ExportedImage
            unoptimized={true}
            src="/images/funfact-shape-2.png"
            alt="kidearn"
            width={100}
            height={100}
          />
        </div>
        <div
          className="funfact-one__shape3 kidearn-splax"
          data-para-options='{ "orientation": "right", "scale": 1.9, "delay": ".3", "transition": "cubic-bezier(0,0,0,1)", "overflow": true }'
        >
          <ExportedImage
            unoptimized={true}
            src="/images/funfact-shape-3.png"
            alt="kidearn"
            width={100}
            height={100}
          />
        </div>
        <div
          className="funfact-one__shape4 kidearn-splax"
          data-para-options='{ "orientation": "left", "scale": 1.9, "delay": ".4", "transition": "cubic-bezier(0,0,0,1)", "overflow": true }'
        >
          <ExportedImage
            unoptimized={true}
            src="/images/funfact-shape-4.png"
            alt="kidearn"
            width={100}
            height={100}
          />
        </div>
        <div
          className="funfact-one__shape5 kidearn-splax"
          data-para-options='{ "orientation": "left", "scale": 1.6, "delay": ".5", "transition": "cubic-bezier(0,0,0,1)", "overflow": true }'
        >
          <ExportedImage
            unoptimized={true}
            src="/images/funfact-shape-5.png"
            alt="kidearn"
            width={100}
            height={100}
          />
        </div>
        <div className="container">
          <div className="row gutter-y-30">
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="100ms">
              <div className="funfact-one__item text-center">
                <div className="funfact-one__icon">
                  <span className="icon-graduated"></span>
                </div>
                <div className="funfact-one__count">
                  k
                  <span className="count-box">
                    <span className="count-text" data-stop="30.3" data-speed="1500"></span>
                  </span>
                </div>
                <p className="funfact-one__title">Student Enrolled</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="200ms">
              <div className="funfact-one__item funfact-one__item--smnone text-center">
                <div className="funfact-one__icon">
                  <span className="icon-online-learning"></span>
                </div>
                <div className="funfact-one__count">
                  k
                  <span className="count-box">
                    <span className="count-text" data-stop="40.5" data-speed="1500"></span>
                  </span>
                </div>
                <p className="funfact-one__title">Class completed</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="300ms">
              <div className="funfact-one__item text-center">
                <div className="funfact-one__icon">
                  <span className="icon-rating"></span>
                </div>
                <div className="funfact-one__count">
                  %
                  <span className="count-box">
                    <span className="count-text" data-stop="88.9" data-speed="1500"></span>
                  </span>
                </div>
                <p className="funfact-one__title">satisfaction rate</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="400ms">
              <div className="funfact-one__item funfact-one__item--noborder text-center">
                <div className="funfact-one__icon">
                  <span className="icon-instructor"></span>
                </div>
                <div className="funfact-one__count">
                  <span className="count-box">
                    +
                    <span className="count-text" data-stop="6.30" data-speed="1500"></span>
                  </span>
                </div>
                <p className="funfact-one__title">Top instructors</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EnrollSection;