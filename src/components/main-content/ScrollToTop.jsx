import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Skip scroll on About page and Sidebar
    if (pathname === "./about" || pathname === "/sidebar") return;

    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;


// import { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';

// const ScrollToTop = () => {
//   const { pathname } = useLocation();
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const checkVisibility = () => {
//       const isMobile = window.innerWidth < 768;
//       const hiddenPages = ['/about', '/sidebar'];
      
//       // Hide on mobile or specific pages
//       setIsVisible(!isMobile && !hiddenPages.includes(pathname));
//     };

//     // Check initial visibility
//     checkVisibility();

//     // Add listener for responsive changes
//     window.addEventListener('resize', checkVisibility);

//     // Cleanup listener
//     return () => window.removeEventListener('resize', checkVisibility);
//   }, [pathname]);

//   // Only render if visible and not on hidden pages
//   return isVisible ? (
//     <button 
//       onClick={() => window.scrollTo(0, 0)}
//       className="fixed bottom-4 right-4 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-all"
//     >
//       ↑ Top
//     </button>
//   ) : null;
// };

// export default ScrollToTop;