"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ParallaxShape = ({ 
  className, 
  src, 
  alt, 
  orientation, 
  scale, 
  delay = '.6', 
  transition = 'cubic-bezier(0,0,0,1)', 
  overflow = true 
}) => {
  const options = {
    orientation,
    scale,
    delay,
    transition,
    overflow
  };

  return (
    <div 
      className={`${className} kidearn-splax`}
      data-para-options={JSON.stringify(options)}
    >
      <Image
        src={src}
        alt={alt}
        width={150}
        height={150}
        className="object-contain"
      />
    </div>
  );
};

export default function CampusVideo() {
  return (
    <section className="video-one relative overflow-hidden">
      <div className="video-one__bg absolute inset-0"></div>

      {/* Parallax shapes */}
      <ParallaxShape
        className="video-one__bg-shape1 absolute"
        src="/images/video-shape-1.png"
        alt="Decorative shape 1"
        orientation="down"
        scale={1.9}
      />
      <ParallaxShape
        className="video-one__bg-shape2 absolute"
        src="/images/video-shape-2.png"
        alt="Decorative shape 2"
        orientation="up"
        scale={1.7}
      />
      <ParallaxShape
        className="video-one__bg-shape3 absolute"
        src="/images/video-shape-3.png"
        alt="Decorative shape 3"
        orientation="right"
        scale={1.8}
      />
      <ParallaxShape
        className="video-one__bg-shape4 absolute"
        src="/images/video-shape-4.png"
        alt="Decorative shape 4"
        orientation="right"
        scale={1.6}
      />
      <ParallaxShape
        className="video-one__bg-shape5 absolute"
        src="/images/video-shape-5.png"
        alt="Decorative shape 5"
        orientation="left"
        scale={1.6}
      />
      <ParallaxShape
        className="video-one__bg-shape6 absolute"
        src="/images/video-shape-6.png"
        alt="Decorative shape 6"
        orientation="right"
        scale={1.7}
      />
      <ParallaxShape
        className="video-one__bg-shape7 absolute"
        src="/images/video-shape-7.png"
        alt="Decorative shape 7"
        orientation="left"
        scale={1.3}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-5/12 flex items-center py-8 lg:py-0">
            <div className="video-one__content text-center lg:text-left ">
              {/* Added lg:ml-[25px] for large screens only */}
              <h3 className="video-one__content__title text-2xl md:text-3xl font-bold mb-6 ">
                Let&#39;s discover the best campus through a video tour
              </h3>
              <Link 
                href="/contact" 
                className="kidearn-btn inline-block px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
              >
                <span>Visit Now</span>
              </Link>
            </div>
          </div>

          <div className="lg:w-7/12 mt-8 lg:mt-0">
            <div className="video-one__btn-shape relative">
              <div className="video-one__btn relative group">
                <Image
                  src="/images/video-bg-1.jpg"
                  alt="Campus video thumbnail"
                  width={800}
                  height={450}
                  className="rounded-lg shadow-lg"
                />
                <a
                  href="https://www.youtube.com/watch?v=0MuL8fd3pb8"
                  className="video-popup absolute inset-0 flex items-center justify-center"
                  aria-label="Play campus tour video"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white bg-opacity-80 rounded-full flex items-center justify-center group-hover:bg-opacity-100 transition-all">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.8L17 10l-10.7 7.2V2.8z" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}