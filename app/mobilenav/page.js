'use client';
import React from 'react';
import Link from 'next/link';

function MobileNav() {
  return (
    <>
      <div className="mobile-nav__wrapper">
        <div className="mobile-nav__overlay mobile-nav__toggler"></div>
        <div className="mobile-nav__content">
          <span className="mobile-nav__close mobile-nav__toggler">
            <i className="fa fa-times"></i>
          </span>

          <div className="logo-box">
            <Link href="/" aria-label="logo image">
              {/* <Image src="/images/logo-light.png" alt="Logo" width={155} height={40} /> */}
            </Link>
          </div>

          {/* ✅ Mobile Menu Items */}
          <nav className="mobile-nav__container">
            <ul className="main-menu__list">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>

          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope"></i>
              <a href="mailto:needhelp@kidearn.com">needhelp@kidearn.com</a>
            </li>
            <li>
              <i className="fa fa-phone-alt"></i>
              <a href="tel:666-888-0000">666 888 0000</a>
            </li>
          </ul>

          <div className="mobile-nav__social">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter" aria-hidden="true"></i>
              <span className="sr-only">Twitter</span>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook" aria-hidden="true"></i>
              <span className="sr-only">Facebook</span>
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-pinterest-p" aria-hidden="true"></i>
              <span className="sr-only">Pinterest</span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram" aria-hidden="true"></i>
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
      </div>

      <div className="search-popup">
        <div className="search-popup__overlay search-toggler"></div>
        <div className="search-popup__content">
          <form role="search" method="get" className="search-popup__form" action="#">
            <input type="text" id="search" placeholder="Search Here..." />
            <button
              type="submit"
              aria-label="search submit"
              className="kidearn-btn kidearn-btn--base"
            >
              <span>
                <i className="icon-search"></i>
              </span>
            </button>
          </form>
        </div>
      </div>

      {/* Scroll-to-top button */}
      <Link href="#" className="scroll-top">
        <svg className="scroll-top__circle" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path>
        </svg>
      </Link>
    </>
  );
}

export default MobileNav;
