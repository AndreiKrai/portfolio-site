// NavigationContext.tsx

import React, { createContext, useContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";

// Define the context type
interface NavigationContextType {
  isMounted: boolean;
  setIsMounted: (data: boolean) => void;
  navigateTo: NavigateTo;
  isOpenMenu:boolean
  menuHandler: MenuHandler;
}

export interface NavigateTo {
  portfolio: (id: number) => void;
  facebook: () => void;
  home: () => void;
  github: () => void;
  profile: () => void;
}
interface MenuHandler {
  toggleMenu: () => void;
  closeMenu: () => void;
}
// Create the context object
const NavigationContext = createContext<NavigationContextType | undefined>(
  undefined
);
export default NavigateTo
// Create a provider component
export const NavigationProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const [isMounted, setIsMounted] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  // Function to navigate to a specific portfolio
  const navigateTo = {
    portfolio: (id: number) => {
      // Example of adding custom logic before navigation
      setIsMounted(false);
      setTimeout(() => navigate(`/portfolio/${id}`), 1000);
    },
    facebook: () => {
      setIsMounted(false);
      setTimeout(
        () => navigate("https://twitter.com", { replace: true }),
        1000
      );
    },
    github: () => {
      setIsMounted(false);
      setTimeout(
        () => navigate("https://twitter.com", { replace: true }),
        1000
      );
    },
    home: () => {
      setIsMounted(false);
      setTimeout(() => navigate("/"), 1000);
    },
    profile: () => {
      setIsMounted(false);
      setTimeout(() => navigate("/profile"), 1000);
    },

  };

  const menuHandler = {
    toggleMenu: () => setIsOpenMenu((p) => !p),
    closeMenu: () => setIsOpenMenu(false),
  };

  return (
    <NavigationContext.Provider
      value={{ isMounted, setIsMounted, navigateTo,isOpenMenu, menuHandler }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

// Custom hook to use the navigation context
export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
};
