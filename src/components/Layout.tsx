// Layout.tsx
import React from "react";
import ResponsiveAppBar from "./ResponsiveAppBar.tsx";
import Bottom from "./Bottom.tsx";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Header */}
      <header>
        <ResponsiveAppBar />
      </header>

      {/* Main Content */}
      <main style={{ flex: "1" }}>
        {children}
      </main>

      {/* Footer */}
      <footer>
        <Bottom />
      </footer>
    </div>
  );
};

export default Layout;
