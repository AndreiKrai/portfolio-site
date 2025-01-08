import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "./components/ResponsiveAppBar.tsx";
import HomePage from "./Pages/HomePage.tsx";
import Bottom from "./components/Bottom.tsx";
import PortfolioItemPage from "./Pages/PortfolioItemPage.tsx";
const App = () => {
  return (
    <Router>
      <div >
        <ResponsiveAppBar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio/:id" element={<PortfolioItemPage />} />
            {/* Uncomment and update other routes as needed */}
            {/* <Route path="movies" element={<SearchForm />} />
            <Route path="movies/:movieId" element={<SingleMoviePage />}>
              <Route path="casts" element={<Casts />} />
              <Route path="reviews" element={<Review />} />
            </Route>
            <Route path="actor/:actorsId" element={<ActorPage />} />
            <Route path="*" element={<NotFoundPage />} /> */}
          </Routes>
        </Suspense>
        <Bottom/>
      </div>
    </Router>
  );
};

export default App;
