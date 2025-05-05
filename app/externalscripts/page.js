'use client'; // Make sure this is at the top

import Script from 'next/script';

export default function ExternalScripts() {
  return (
    <>
      <Script src="/js/jquery-3.7.0.min.js" strategy="beforeInteractive" />
      <Script src="/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
      <Script src="/js/bootstrap-select.min.js" strategy="lazyOnload" />
      <Script src="/js/jarallax.min.js" strategy="lazyOnload" />
      <Script src="/js/jquery-ui.js" strategy="lazyOnload" />
      <Script src="/js/jquery.ajaxchimp.min.js" strategy="lazyOnload" />
      <Script src="/js/jquery.appear.min.js" strategy="lazyOnload" />
      <Script src="/js/jquery.circle-progress.min.js" strategy="lazyOnload" />
      <Script src="/js/jquery.magnific-popup.min.js" strategy="lazyOnload" />
      <Script src="/js/jquery.validate.min.js" strategy="lazyOnload" />
      <Script src="/js/nouislider.min.js" strategy="lazyOnload" />
      <Script src="/js/tiny-slider.js" strategy="lazyOnload" />
      <Script src="/js/wNumb.min.js" strategy="lazyOnload" />
      <Script src="/js/owl.carousel.min.js" strategy="lazyOnload" />
      <Script src="/js/wow.js" strategy="lazyOnload" />
      <Script src="/js/tilt.jquery.js" strategy="lazyOnload" />
      <Script src="/js/simpleParallax.min.js" strategy="lazyOnload" />
      <Script src="/js/imagesloaded.min.js" strategy="lazyOnload" />
      <Script src="/js/isotope.js" strategy="lazyOnload" />
      <Script src="/js/countdown.min.js" strategy="lazyOnload" />
      <Script src="/js/jquery.circleType.js" strategy="lazyOnload" />
      <Script src="/js/jquery.lettering.min.js" strategy="lazyOnload" />
      <Script src="/js/kidearn.js" strategy="lazyOnload" />
      {/* Toolbar JS */}
      <Script src="/js/js.cookie.min.js" strategy="lazyOnload" />
      <Script src="/js/jQuery.style.switcher.min.js" strategy="lazyOnload" />
      <Script src="/js/lang.js" strategy="lazyOnload" />
      <Script src="/js/element.js" strategy="lazyOnload" />
      <Script src="/js/kidearn-toolbar.js" strategy="lazyOnload" />
      {/* Missing Files */}
      {/* <Script src="/js/carousel.js" strategy="lazyOnload" />
      <Script src="/js/datajs" strategy="lazyOnload" />
      <Script src="/js/event-handler.js" strategy="lazyOnload" />
      <Script src="/js/isotopejs" strategy="lazyOnload" />
      <Script src="/js/jarallax.js" strategy="lazyOnload" />
      <Script src="/js/manipulator.js" strategy="lazyOnload" />

      <Script src="/js/selector-engine.js" strategy="lazyOnload" /> */}
      

        {/* Include Owl Carousel JS */}
        <script
          src="/owl-carousel/owl.carousel.min.js"
          defer
        />
    </>
  );
}
