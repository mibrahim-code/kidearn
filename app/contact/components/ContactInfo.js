'use client';

import React from 'react';
import Link from 'next/link';

const ContactInfo = () => {
  return (
    <section className="contact-info-one">
      <div className="container">
        <div className="contact-info-one__inner">
          <div className="row">
            <div className="col-md-12 col-lg-4">
              <div className="contact-info-one__item" style={{ "--accent-color": "#75C137" }}>
                <i className="icon-location-fill contact-info-one__icon"></i>
                <p className="contact-info-one__text">Visit Anytime</p>
                <h3 className="contact-info-one__title">
                  <Link href="#">6391 Elgin St. Delaware 10299</Link>
                </h3>
              </div>
            </div>
           
            <div className="col-md-12 col-lg-4">
              <div className="contact-info-one__item" style={{ "--accent-color": "#2390FF" }}>
                <i className="icon-email contact-info-one__icon"></i>
                <p className="contact-info-one__text">Send Email</p>
                <h3 className="contact-info-one__title">
                  <Link href="mailto:kidearn@envato.com">kidearn@envato.com</Link>
                </h3>
              </div>
            </div>

            <div className="col-md-12 col-lg-4">
              <div className="contact-info-one__item">
                <i className="icon-telephone contact-info-one__icon"></i>
                <p className="contact-info-one__text">?Have any question</p>
                <h3 className="contact-info-one__title">
                  <Link href="tel:+230008050">Free + 23 (000)-8050</Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
