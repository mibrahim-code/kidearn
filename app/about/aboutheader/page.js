import React from "react";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";

const AboutHeader = () => {
  return (
    <>
      <section className="page-header">
        <div className="page-header__bg"></div>
        <div className="container">
          <h2 className="page-header__title">About us</h2>
          <ul className="kidearn-breadcrumb list-unstyled">
            <li>
              <Link href="/"><span>Home</span></Link>
            </li>
            <li><span>About</span></li>
          </ul>
        </div>
      </section>

      <section className="about-four">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 wow fadeInLeft" data-wow-delay="300ms">
              <div className="about-four__image">
                <div className="about-four__image__shape1">
                  <ExportedImage
                    unoptimized={true}
                    src="/images/about-4-shape-1.png"
                    alt="kidearn"
                    width={300}
                    height={300}
                  />
                </div>
                <div
                  className="about-four__image__one kidearn-tilt"
                  data-tilt-options='{ "glare": false, "maxGlare": 0, "maxTilt": 3, "speed": 700, "scale": 1 }'
                >
                  <ExportedImage
                    unoptimized={true}
                    src="/images/about-4-1.jpg"
                    alt="kidearn"
                    width={500}
                    height={500}
                  />
                  <div className="about-four__image__one-bottom"></div>
                </div>
                <div className="about-four__image__two wow fadeInUp" data-wow-delay="500ms">
                  <ExportedImage
                    unoptimized={true}
                    src="/images/about-4-2.jpg"
                    alt="kidearn"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="about-four__image__bg-shape">
                  <ExportedImage
                    unoptimized={true}
                    src="/images/about-4-shape-2.png"
                    alt="kidearn"
                    width={300}
                    height={300}
                  />
                </div>
              </div>
            </div>

            <div className="col-xl-6 wow fadeInRight" data-wow-delay="200ms">
              <div className="about-four__content">
                <div className="sec-title text-left">
                  <h6 className="sec-title__tagline">About Us</h6>
                  <h3 className="sec-title__title">Welcome to best kidearn for your child</h3>
                </div>
                <p className="about-four__content__text">
                  Lorem Ipsum is simply dummy text of the printing and<br /> typesetting industry. Lorem
                  Ipsum has been the industry's
                </p>

                <div className="about-four__info" style={{ "--accent-color": "#F25334" }}>
                  <div className="about-four__info__icon">
                    <span className="icon-trophy1"></span>
                  </div>
                  <h3 className="about-four__info__title">Award Wining Time</h3>
                  <p className="about-four__info__text">
                    Lorem Ipsum is simply dummy text of the printing
                    and<br /> typesetting industry. Lorem Ipsum
                  </p>
                </div>

                <div className="about-four__info" style={{ "--accent-color": "#2390FF" }}>
                  <div className="about-four__info__icon">
                    <span className="icon-interest-rate"></span>
                  </div>
                  <h3 className="about-four__info__title">Higest Success Rates</h3>
                  <p className="about-four__info__text">
                    Lorem Ipsum is simply dummy text of the printing
                    and<br /> typesetting industry. Lorem Ipsum
                  </p>
                </div>

                <Link href="/about" className="kidearn-btn">
                  <span>Learn More</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHeader;
