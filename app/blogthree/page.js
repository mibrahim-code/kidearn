"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import ExportedImage from 'next-image-export-optimizer';
import dynamic from 'next/dynamic';

// Dynamically import OwlCarousel to avoid SSR issues
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false
});

const BlogThree = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 easy steps to more learn about play",
      category: "Kindergarten",
      date: "30 Mar, 2023",
      image: "/images/blog/blog-3-1.jpg",
      author: {
        name: "Wade Warren",
        role: "CEO",
        image: "/images/blog/blog-3-author-1.png"
      },
      accentColor: "#F25334"
    },
    {
      id: 2,
      title: "The complete kindearn design guideline 2023",
      category: "Painting",
      date: "26 Mar, 2023",
      image: "/images/blog/blog-3-2.jpg",
      author: {
        name: "Darlene Robertson",
        role: "Art Teacher",
        image: "/images/blog/blog-3-author-2.png"
      },
      accentColor: "#2390FF"
    },
    {
      id: 3,
      title: "Choose the best child care center for you!",
      category: "Gaming",
      date: "28 Mar, 2023",
      image: "/images/blog/blog-3-3.jpg",
      author: {
        name: "Cody Fisher",
        role: "CEO",
        image: "/images/blog/blog-3-author-3.png"
      },
      accentColor: "#75C137"
    }
  ];

  // OwlCarousel options
  const owlCarouselOptions = {
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  };

  return (
    <section className="blog-three">
      {/* Parallax Shapes */}
      <div 
        className="blog-three__shape-right kidearn-splax" 
        data-para-options={JSON.stringify({
          orientation: "right",
          scale: 3.5,
          overflow: true
        })}
      >
        <ExportedImage
          unoptimized={true}
          src="/images/shapes/blog-3-shape-1.png"
          alt="kidearn"
          width={200}
          height={200}
        />
      </div>
      
      <div 
        className="blog-three__shape-left kidearn-splax" 
        data-para-options={JSON.stringify({
          orientation: "left",
          scale: 3.5,
          overflow: true
        })}
      >
        <ExportedImage
          unoptimized={true}
          src="/images/shapes/blog-3-shape-2.png"
          alt="kidearn"
          width={200}
          height={200}
        />
      </div>

      <div className="container">
        <div className="sec-title text-center">
          <h6 className="sec-title__tagline">Latest Blog</h6>
          <h3 className="sec-title__title">Checkout our latest news<br /> updates & articles</h3>
        </div>

        <OwlCarousel 
          className="blog-three__carousel kidearn-owl__carousel kidearn-owl__carousel--basic-nav owl-carousel"
          {...owlCarouselOptions}
        >
          {blogPosts.map((post, index) => (
            <div 
              key={post.id} 
              className="blog-card-three wow fadeInUp item" 
              data-wow-duration="1500ms" 
              data-wow-delay={`${index * 100}ms`}
              style={{ '--accent-color': post.accentColor }}
            >
              <div className="blog-card-three__bg"></div>
              <div className="blog-card-three__image">
                <ExportedImage
                  unoptimized={true}
                  src={post.image}
                  alt={post.title}
                  width={330}
                  height={250}
                />
                <div className="blog-card-three__image__layer-wrapper">
                  {[1, 2, 3, 4].map((layer) => (
                    <div 
                      key={layer}
                      className="blog-card-three__image__layer" 
                      style={{ backgroundImage: `url(${post.image})` }}
                    />
                  ))}
                </div>
                <Link href="/blog-details-left" className="blog-card-three__image__link">
                  <span className="sr-only">{post.title}</span>
                </Link>
              </div>

              <div className="blog-card-three__content">
                <div className="blog-card-three__content__top">
                  <Link href="/blog-list" className="blog-card-three__category">
                    {post.category}
                  </Link>
                  <div className="blog-card-three__date">{post.date}</div>
                </div>

                <h3 className="blog-card-three__title">
                  <Link href="/blog-details-left">{post.title}</Link>
                </h3>

                <div className="blog-card-three__content__bottom">
                  <div className="blog-card-three__author">
                    <div className="blog-card-three__author__image">
                      <ExportedImage
                        unoptimized={true}
                        src={post.author.image}
                        alt={post.author.name}
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="blog-card-three__author__content">
                      <h4 className="blog-card-three__author__name">{post.author.name}</h4>
                      <p className="blog-card-three__author__designation">{post.author.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </section>
  );
};

export default BlogThree;