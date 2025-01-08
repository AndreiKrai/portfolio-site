// import React, { createContext, ReactNode, useState } from "react";

// // Define the context type
// interface NavigationContextType {
//   isMounted: boolean;
//   switchIsMounted: () => void;
// }

// // Create the context object
// const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

// // Create a provider component
// export const NavigationProvider = ({ children }: { children: ReactNode }) => {
//   const [isMounted, setIsMounted] = useState<boolean>(false);

//   const switchIsMounted = () => setIsMounted((prev) => !prev);

//   return (
//     <NavigationContext.Provider value={{ isMounted, switchIsMounted }}>
//       {children}
//     </NavigationContext.Provider>
//   );
// };

// export default NavigationContext;

import React, { createContext, useState,  ReactNode } from "react";

interface ContextContextType {
  isMounted: boolean;
  setIsMounted:(prop:boolean)=>void
}
// Define the provider's props type
interface ContextProviderProps {
  children: ReactNode;
}
// Create the Context with a default value of `null`
export const MainContext = createContext<ContextContextType | undefined>(
  undefined
);

export const ContextProvider: React.FC<ContextProviderProps> = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  return (
    <MainContext.Provider value={{ isMounted, setIsMounted}}>
      {children}
    </MainContext.Provider>
  );
};
