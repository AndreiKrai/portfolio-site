import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigation } from "../context/navigationContext.tsx";

const BackgroundListiners = () => {
  const location = useLocation();
  const { setIsMounted, isOpenMenu, menuHandler } = useNavigation();
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  useEffect(() => {
    menuHandler.closeMenu();
    window.scrollTo(0, 0); // Scroll to the top of the page
    setIsMounted(true);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      // Close the menu immediately when scrolling starts
      closeMenuImmediately();

      // Clear the previous timeout if it exists
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      // Set a new timeout to trigger delayed logic after a brief delay (e.g., 300ms)
      const timeout = setTimeout(() => {
        handleDelayedScrollLogic(); // Trigger scroll-related logic after a delay
      }, 300);

      setScrollTimeout(timeout); // Store the timeout so we can clear it later
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollTimeout, isOpenMenu]); // Dependencies: scrollTimeout and isMenuOpen

  const closeMenuImmediately = () => {
    if (isOpenMenu) {
      menuHandler.closeMenu(); // Close menu immediately
    }
  };

  // Function to trigger after the scroll has stopped (with a delay)
  const handleDelayedScrollLogic = () => {
  };

  return null;
};

export default BackgroundListiners;
