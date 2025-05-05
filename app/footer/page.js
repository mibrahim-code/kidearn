'use client';

import React from 'react';
import Link from 'next/link';
import ExportedImage from "next-image-export-optimizer";

function Footer() {
  return (
    <footer className="main-footer" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="main-footer__bg"></div>

      <ExportedImage
        unoptimized={true}
        src="/images/footer-s-1-1-rtl.png"
        className="main-footer__shape-1"
        alt="kidearn"
        width={500}
        height={500}
        style={{ position: 'absolute', bottom: 0, left: 0, pointerEvents: 'none', zIndex: 0 }}
      />
      <ExportedImage
        unoptimized={true}
        src="/images/footer-s-1-2-rtl.png"
        className="main-footer__shape-2"
        alt="kidearn"
        width={500}
        height={500}
        style={{ position: 'absolute', bottom: 0, right: 0, pointerEvents: 'none', zIndex: 0 }}
      />
      <ExportedImage
        unoptimized={true}
        src="/images/footer-s-1-3.png"
        className="main-footer__shape-3"
        alt="kidearn"
        width={500}
        height={500}
        style={{ position: 'absolute', bottom: 0, left: '20%', pointerEvents: 'none', zIndex: 0 }}
      />
      <ExportedImage
        unoptimized={true}
        src="/images/footer-s-1-4.png"
        className="main-footer__shape-4"
        alt="kidearn"
        width={500}
        height={500}
        style={{ position: 'absolute', bottom: 0, right: '20%', pointerEvents: 'none', zIndex: 0 }}
      />

      <div className="main-footer__top">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-xl-4">
              <div className="footer-widget footer-widget--about">
                <Link href="/">
                  <div className="footer-widget__logo">
                    <ExportedImage
                      unoptimized={true}
                      src="/images/logo-light.png"
                      alt="Kidearn HTML Template"
                      width={160}
                      height={50}
                    />
                  </div>
                </Link>
                <ul className="list-unstyled footer-widget__info">
                  <li>
                    <i className="icon-location2 footer-widget__info__icon"></i>
                    <Link href="#">6391 Elgin St. Celina, Delaware 10299</Link>
                  </li>
                  <li>
                    <i className="icon-call footer-widget__info__icon"></i>
                    <Link href="tel:3035550105">(303) 555-0105</Link>
                  </li>
                  <li>
                    <i className="icon-email1 footer-widget__info__icon"></i>
                    <Link href="mailto:kidearn@envato.com">kidearn@envato.com</Link>
                  </li>
                </ul>
                <div className="footer-widget__social">
                  <Link href="https://twitter.com">
                    <i className="fab fa-twitter" aria-hidden="true"></i>
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link href="https://facebook.com">
                    <i className="fab fa-facebook" aria-hidden="true"></i>
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link href="https://pinterest.com">
                    <i className="fab fa-pinterest-p" aria-hidden="true"></i>
                    <span className="sr-only">Pinterest</span>
                  </Link>
                  <Link href="https://instagram.com">
                    <i className="fab fa-instagram" aria-hidden="true"></i>
                    <span className="sr-only">Instagram</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-xl-2">
              <div className="footer-widget footer-widget--links">
                <h2 className="footer-widget__title">Links</h2>
                <ul className="list-unstyled footer-widget__links">
                  <li><Link href="/about">Admissions</Link></li>
                  <li><Link href="/programs">Programs</Link></li>
                  <li><Link href="/programs-d-discipline">Outdoor Games</Link></li>
                  <li><Link href="/programs-d-preschool">Online Classes</Link></li>
                  <li><Link href="/contact">Appointment</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-md-6 col-xl-2">
              <div className="footer-widget footer-widget--links-two">
                <h2 className="footer-widget__title">Explore</h2>
                <ul className="list-unstyled footer-widget__links">
                  <li><Link href="/about">About</Link></li>
                  <li><Link href="/blog-grid">Our News</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                  <li><Link href="/faq">Help</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-md-6 col-xl-4">
              <div className="footer-widget footer-widget--gallery">
                <h2 className="footer-widget__title">Gallery</h2>
                <ul className="list-unstyled footer-widget__gallery">
                  <li>
                    <Link href="/assets/images/resources/footer-gallery-1.png" className="img-popup">
                      <ExportedImage
                        unoptimized={true}
                        src="/images/footer-gallery-1.png"
                        alt="footer gallery"
                        width={150}
                        height={150}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="/assets/images/resources/footer-gallery-2.png" className="img-popup">
                      <ExportedImage
                        unoptimized={true}
                        src="/images/footer-gallery-2.png"
                        alt="footer gallery"
                        width={150}
                        height={150}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="/assets/images/resources/footer-gallery-3.png" className="img-popup">
                      <ExportedImage
                        unoptimized={true}
                        src="/images/footer-gallery-3.png"
                        alt="footer gallery"
                        width={150}
                        height={150}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="/assets/images/resources/footer-gallery-4.png" className="img-popup">
                      <ExportedImage
                        unoptimized={true}
                        src="/images/footer-gallery-4.png"
                        alt="footer gallery"
                        width={150}
                        height={150}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="/assets/images/resources/footer-gallery-5.png" className="img-popup">
                      <ExportedImage
                        unoptimized={true}
                        src="/images/footer-gallery-5.png"
                        alt="footer gallery"
                        width={150}
                        height={150}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="/assets/images/resources/footer-gallery-6.png" className="img-popup">
                      <ExportedImage
                        unoptimized={true}
                        src="/images/footer-gallery-6.png"
                        alt="footer gallery"
                        width={150}
                        height={150}
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-footer__bottom">
        <div className="container">
          <div className="main-footer__bottom__inner">
            <p className="main-footer__copyright">
              © Copyright <span className="dynamic-year"></span> by Kidearn HTML Template.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
