"use client"; // Ensures this is a Client Component
import React from 'react';
import dynamic from 'next/dynamic'; // Dynamically import Slider to ensure it's only client-side
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Dynamically import the Slider component to avoid SSR issues
const Slider = dynamic(() => import('react-slick'), { ssr: false });

const testimonials = [
  {
    name: "Kevin Martin",
    img: "/images/team-1-1.jpg",
    designation: "Parent",
    text: "This is due to their excellent service, competitive pricing and customer support. It's thoroughly refreshing to get such a personal touch."
  },
  {
    name: "Jessica Brown",
    img: "/images/testi-1-3.jpg",
    designation: "Parent",
    text: "Their attention to detail and personal care make all the difference in our child's learning experience."
  },
  {
    name: "David Cooper",
    img: "/images/testi-1-3.jpg",
    designation: "Parent",
    text: "I can't imagine sending my child anywhere else. The support has been outstanding!"
  },
  {
    name: "Christine Eve",
    img: "/images/testi-1-4.png",
    designation: "Parent",
    text: "I appreciate how they go above and beyond to make sure the kids are happy and learning."
  },
];

const TestimonialCard = ({ name, img, designation, text }) => (
  <div className="h-full min-h-[300px] flex flex-col justify-between text-center border-4 border-yellow-400 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-all mx-2">
    <div className="flex flex-col items-center">
      <div className="mb-4 relative w-[70px] h-[70px]">
        <Image
          src={img}
          alt={name}
          fill
          className="rounded-full object-cover"
          sizes="70px"
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
      <p className="text-sm text-gray-600 mb-3">{designation}</p>
    </div>
    <p className="text-gray-800 mt-4 italic">"{text}"</p>
  </div>
);

export default function AboutTestimonial() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className="py-12 px-4 md:px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What parents say <br /> about our care
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration in some form.
          </p>
        </div>

        <div className="px-2">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-2 focus:outline-none">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
