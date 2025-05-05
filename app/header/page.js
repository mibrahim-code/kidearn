'use client'
import React from 'react';
import Link from 'next/link';
import ExportedImage from 'next-image-export-optimizer';
import MobileNav from '../mobilenav/page';

const Header = () => {
  return (
    <>
      <div className="topbar-one">
        <div className="container-fluid">
          <div className="topbar-one__inner">
            <div className="topbar-one__left">
              <div className="topbar-one__social">
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
              <p className="topbar-one__text">Mon to Sat: 8.00 am - 7.00 pm</p>
            </div>
            <ul className="list-unstyled topbar-one__info">
              <li className="topbar-one__info__item">
                <i className="fas fa-map-marker topbar-one__info__icon"></i>
                <Link href="#" className="">30 Commercial Road Fratton, Australia</Link>
              </li>
              <li className="topbar-one__info__item">
                <i className="fas fa-envelope topbar-one__info__icon"></i>
                <Link href="mailto:kidearn@envato.com">kidearn@envato.com</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <header className="main-header sticky-header sticky-header--normal">
        <div className="container-fluid">
          <div className="main-header__inner">
            <div className="main-header__logo">
              <Link href="/">
                <ExportedImage
                  unoptimized={true}
                  src="/images/logo-dark.png"
                  alt="Kidearn Logo"
                  width={160}
                  height={50}
                />
              </Link>
            </div>

            <nav className="main-header__nav main-menu">
              <ul className="main-menu__list">
                <li>
                  <Link href="/">Home</Link>
                </li>

                <li><Link href="/about">About</Link></li>

                <li className="dropdown">
                  <Link href="#">Pages</Link>
                  <ul>
                    <li><Link href="/team">Our teacher</Link></li>
                    <li><Link href="/team-carousel">Teacher carousel</Link></li>
                    <li><Link href="/team-details">Teacher details</Link></li>
                    <li><Link href="/pricing">Pricing tables</Link></li>
                    <li>
                      <Link href="#">Gallery</Link>
                      <ul>
                        <li><Link href="/gallery-filter">Gallery filter</Link></li>
                        <li><Link href="/gallery-grid">Gallery grid</Link></li>
                        <li><Link href="/gallery-carousel">Gallery carousel</Link></li>
                      </ul>
                    </li>
                    <li><Link href="/faq">FAQs</Link></li>
                    <li><Link href="/login">Login</Link></li>
                    <li><Link href="/404">404 error</Link></li>
                  </ul>
                </li>

                <li className="dropdown">
                  <Link href="#">Events</Link>
                  <ul>
                    <li><Link href="/events-grid">Events grid</Link></li>
                    <li><Link href="/events-carousel">Events carousel</Link></li>
                    <li><Link href="/events-details">Events details</Link></li>
                  </ul>
                </li>

                <li className="dropdown">
                  <Link href="#">Programs</Link>
                  <ul>
                    <li><Link href="/programs-grid">Programs grid</Link></li>
                    <li><Link href="/programs-carousel">Programs carousel</Link></li>
                    <li><Link href="/programs-d-toddler">Toddler program</Link></li>
                    <li><Link href="/programs-d-preschool">Preschool program</Link></li>
                    <li><Link href="/programs-d-kindergarten">Kindergarten program</Link></li>
                    <li><Link href="/programs-d-flex-care">Flex-care program</Link></li>
                    <li><Link href="/programs-d-art">Art program</Link></li>
                    <li><Link href="/programs-d-discipline">Discipline program</Link></li>
                  </ul>
                </li>

                <li className="dropdown">
                  <Link href="#">Shop</Link>
                  <ul className="sub-menu">
                    <li className="dropdown">
                      <Link href="#">Products</Link>
                      <ul className="sub-menu">
                        <li><Link href="/products">No sidebar</Link></li>
                        <li><Link href="/products-left">Left sidebar</Link></li>
                        <li><Link href="/products-right">Right sidebar</Link></li>
                      </ul>
                    </li>
                    <li><Link href="/products-carousel">Products carousel</Link></li>
                    <li><Link href="/product-details">Product details</Link></li>
                    <li><Link href="/cart">Cart</Link></li>
                    <li><Link href="/checkout">Checkout</Link></li>
                  </ul>
                </li>

                <li className="dropdown">
                  <Link href="#">News</Link>
                  <ul className="sub-menu">
                    <li className="dropdown">
                      <Link href="#">News grid</Link>
                      <ul className="sub-menu">
                        <li><Link href="/blog-grid">No sidebar</Link></li>
                        <li><Link href="/blog-grid-left">Left sidebar</Link></li>
                        <li><Link href="/blog-grid-right">Right sidebar</Link></li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <Link href="#">News list</Link>
                      <ul className="sub-menu">
                        <li><Link href="/blog-list">No sidebar</Link></li>
                        <li><Link href="/blog-list-left">Left sidebar</Link></li>
                        <li><Link href="/blog-list-right">Right sidebar</Link></li>
                      </ul>
                    </li>
                    <li><Link href="/blog-carousel">News carousel</Link></li>
                    <li className="dropdown">
                      <Link href="#">News details</Link>
                      <ul className="sub-menu">
                        <li><Link href="/blog-details">No sidebar</Link></li>
                        <li><Link href="/blog-details-left">Left sidebar</Link></li>
                        <li><Link href="/blog-details-right">Right sidebar</Link></li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li><Link href="/contact" >Contact</Link></li>
              </ul>
            </nav>

            <div className="main-header__right">
              <div className="mobile-nav__btn mobile-nav__toggler">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <Link href="tel:303555-0105" className="main-header__call">
                <i className="icon-call main-header__call__icon"></i>
                <span className="main-header__call__content">
                  <span className="main-header__call__number">(303) 555-0105</span>
                  <span className="main-header__call__text">Call to Questions</span>
                </span>
              </Link>
              <Link href="/contact" className="kidearn-btn main-header__btn">
                <span>Book a Visit</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <MobileNav />
    </>
  );
};

export default Header;
