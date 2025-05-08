'use client';
import { useEffect } from 'react';

export default function useOwlCarousel(ref, options) {
  useEffect(() => {
    if (!ref.current || ref.current._owlCarouselInitialized) return;

    const initCarousel = async () => {
      try {
        // Load jQuery first
        const $ = (await import('jquery')).default;
        window.$ = window.jQuery = $;
        
        // Then load OwlCarousel
        await import('owl.carousel/dist/owl.carousel.min');
        
        // Initialize the carousel
        $(ref.current).owlCarousel(options);
        ref.current._owlCarouselInitialized = true;
      } catch (error) {
        console.error('Error initializing OwlCarousel:', error);
      }
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