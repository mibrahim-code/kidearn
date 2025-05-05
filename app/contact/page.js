'use client';

import React from 'react';
import Link from 'next/link';
import ExportedImage from 'next-image-export-optimizer';

import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import ContactMap from './components/ContactMap';

export default function Contact() {
  return (
    <>
      <section className="page-header">
        <div className="page-header__bg"></div>
        <div className="container">
          <h2 className="page-header__title">Contact</h2>
          <ul className="kidearn-breadcrumb list-unstyled">
            <li>
              <span>Contact</span>
            </li>
            <li>
              <Link href="/">Home</Link>
            </li>
          </ul>
        </div>
      </section>
      <div>
        <ContactForm />
        <ContactInfo />
        <ContactMap />
      </div>
    </>
  );
}
