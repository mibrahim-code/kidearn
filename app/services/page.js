import React from 'react';
import Link from 'next/link';
import ExportedImage from 'next-image-export-optimizer';

export default function Services() {
  const services = [
    {
      img: '/images/service-1-1.jpg', // Add leading slash
      title: 'Home-like environment',
      color: '#75C137',
      delay: '100ms',
      order: false,
    },
    {
      img: '/images/service-1-2.jpg', // Add leading slash
      title: 'Safety and security',
      color: '#26A6A1',
      delay: '200ms',
      order: true,
    },
    {
      img: '/images/service-1-3.jpg', // Add leading slash
      title: 'Quality educators',
      color: '#F25334',
      delay: '300ms',
      order: false,
    },
    {
      img: '/images/service-1-4.jpg', // Add leading slash
      title: 'Play to learn',
      color: '#FFAA23',
      delay: '400ms',
      order: true,
    },
  ];

  return (
    <section className="service-one">
      <div
        className="service-one__bg kidearn-splax"
        data-para-options={JSON.stringify({
          orientation: 'up',
          scale: 1.5,
          overflow: true,
        })}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300.000000 369.000000">
          <g transform="translate(0.000000,369.000000) scale(0.050000,-0.050000)">
            <path d="M4517 7359 c-701 -82 -1096 -398 -1368 -1099 -248 -640 -417 -846 -879 -1075 -164 -81 -249 -115 -700 -276 -702 -251 -1101 -573 -1365 -1099 -550 -1096 117 -2640 1265 -2927 367 -91 998 -110 1674 -51 453 40 1043 45 1296 10 427 -59 1099 -221 1411 -341 l149 -58 0 3264 0 3263 -95 63 c-395 264 -902 383 -1388 326z" />
          </g>
        </svg>
      </div>

      <div
        className="service-one__shape kidearn-splax"
        style={{ backgroundImage: 'url(/images/about-bg-shape-1.png)' }} // Add leading slash
        data-para-options={JSON.stringify({
          orientation: 'left',
          scale: 1.5,
          overflow: true,
        })}
      ></div>

      <div className="container">
        <div className="row gutter-y-30">
          {services.map((service, index) => (
            <div
              className={`col-lg-3 col-md-6 wow fadeInUp`}
              data-wow-delay={service.delay}
              key={index}
            >
              <div
                className={`service-one__item ${service.order ? 'service-one__item--order' : ''}`}
                style={{ '--accent-color': service.color }}
              >
                <div className="service-one__item__image-wrapper">
                  <div
                    className="service-one__item__image kidearn-tilt"
                    data-tilt-options={JSON.stringify({
                      glare: false,
                      maxGlare: 0,
                      maxTilt: 7,
                      speed: 700,
                    })}
                  >
                    <ExportedImage
                      unoptimized={true}
                      src={service.img}
                      alt={service.title}
                      className="service-one__item__image"
                      width={500}
                      height={300}
                    />
                  </div>
                  <div className="service-one__item__ball"></div>
                </div>
                <h4 className="service-one__item__title">{service.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
