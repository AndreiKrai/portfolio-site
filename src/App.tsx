import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage.tsx";
import PortfolioItemPage from "./Pages/PortfolioItemPage.tsx";
import { NavigationProvider } from "./context/navigationContext.tsx";
import BackgroundListiners from "./components/BackgroundListiners.tsx";
import MyProfilePage from "./Pages/MyProfilePage.tsx";
import Layout from "./components/Layout.tsx";
const App = () => {
  return (
    <Router>
      <NavigationProvider>
        <BackgroundListiners />
        {/* <ResponsiveAppBar /> */}
        <Suspense fallback={<div>Loading...</div>}>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />}/>
              <Route path="/portfolio/:id" element={<PortfolioItemPage />} />
              <Route path="/profile" element={<MyProfilePage />} />
            </Routes>
          </Layout>
        </Suspense>
        {/* <Bottom /> */}
      </NavigationProvider>
    </Router>
  );
};

export default App;
