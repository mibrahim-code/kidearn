import React from 'react';
import Link from 'next/link';
import ExportedImage from 'next-image-export-optimizer';

export default function Programs() {
  return (
    <section className="program-one">
      <div
        className="program-one__bg kidearn-splax"
        data-para-options={JSON.stringify({
          orientation: 'up',
          scale: 2.5,
          overflow: true,
        })}
      >
        <ExportedImage
          unoptimized={true}
          src="/images/program-bg-shape.png"
          className="program-one__bg-shape"
          alt="kidearn"
          width={1920}
          height={1080}
        />
      </div>

      <div className="container">
        <div className="sec-title text-center">
          <h6 className="sec-title__tagline">Our Programs</h6>
          <h3 className="sec-title__title">
            We meet kids at their level<br /> regardless of their age
          </h3>
        </div>

        <div className="row">
          {[
            {
              title: 'Toddler',
              age: '(1.5-3 years)',
              link: 'programs-d-toddler.html',
              img: 'images/program-1-1.jpg',
              color: '#F25334',
            },
            {
              title: 'Preschool',
              age: '(2-3 years)',
              link: 'programs-d-preschool.html',
              img: 'images/program-1-2.jpg',
              color: '#75C137',
              orderClass: 'program-one__item--order',
            },
            {
              title: 'Kindergarten',
              age: '(4-5 years)',
              link: 'programs-d-kindergarten.html',
              img: 'images/program-1-3.jpg',
              color: '#2390FF',
            },
            {
              title: 'Flex-care',
              age: '(5-12 years)',
              link: 'programs-d-flex-care.html',
              img: 'images/program-1-4.jpg',
              color: '#FFAA23',
              orderClass: 'program-one__item--order',
            },
          ].map((program, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div
                className={`program-one__item wow fadeInUp ${program.orderClass || ''}`}
                data-wow-duration="1500ms"
                data-wow-delay={`${index * 100}ms`}
                style={{ '--accent-color': program.color }}
              >
                <div className="program-one__item__shape">
                  <svg className="program-one__item__shape-one" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 43">
                    <path d="M11.0817 6.98831C-9.7901 23.3302 2.35379 52.1177 18.5511 39.5735C34.7647 27.0458 39.1287 -14.9434 11.0817 6.98831Z" />
                  </svg>
                  <svg className="program-one__item__shape-two" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 21">
                    <path d="M5.28824 3.20713C-4.67276 11.0063 1.12287 24.745 8.85298 18.7583C16.5909 12.7795 18.6736 -7.25972 5.28824 3.20713Z" />
                  </svg>
                </div>
                <div className="program-one__item__bg"></div>
                <div className="program-one__item__image">
                  <ExportedImage
                    unoptimized={true}
                    src={program.img}
                    alt={program.title}
                    width={300}
                    height={200}
                  />
                </div>
                <div className="program-one__item__content">
                  <h3 className="program-one__item__title">
                    <Link href={program.link}>{program.title}</Link>
                  </h3>
                  <div className="program-one__item__age">{program.age}</div>
                  <p className="program-one__item__text">
                    Lorem ipsum dolor sit amet consectetur. Convallis
                  </p>
                  <Link href={program.link} className="program-one__item__rm">
                    <span className="icon-right-arrow"></span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
