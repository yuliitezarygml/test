import { useEffect } from 'react';

export const useScripts = () => {
  useEffect(() => {
    const scripts = [
      '/assets/js/jquery-3.7.1.min.js',
      '/assets/js/waypoints.min.js',
      '/assets/js/bootstrap.bundle.min.js',
      '/assets/js/meanmenu.min.js',
      '/assets/js/swiper.min.js',
      '/assets/js/slick.min.js',
      '/assets/js/magnific-popup.min.js',
      '/assets/js/counterup.js',
      '/assets/js/wow.js',
      '/assets/js/main.js'
    ];

    const loadedScripts = [];

    scripts.forEach((scriptSrc) => {
      const script = document.createElement('script');
      script.src = scriptSrc;
      script.async = false;
      document.body.appendChild(script);
      loadedScripts.push(script);
    });

    return () => {
      // Cleanup: remove scripts on unmount
      loadedScripts.forEach(script => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      });
    };
  }, []);
};

export default useScripts;