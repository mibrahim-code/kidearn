'use client';
import { useEffect, useRef } from 'react';

export default function useOwlCarousel(ref, options) {
  useEffect(() => {
    if (!ref.current || ref.current._owlCarouselInitialized) return;
    
    const initCarousel = async () => {
      const $ = (await import('jquery')).default;
      const owlCarousel = (await import('owl.carousel')).default;
      
      window.$ = window.jQuery = $;
      require('owl.carousel/dist/owl.carousel.min');
      
      $(ref.current).owlCarousel(options);
      ref.current._owlCarouselInitialized = true;
    };

    initCarousel();

    return () => {
      if (window.$ && ref.current && $(ref.current).data('owl.carousel')) {
        $(ref.current).trigger('destroy.owl.carousel');
        ref.current._owlCarouselInitialized = false;
      }
    };
  }, [ref, options]);
}