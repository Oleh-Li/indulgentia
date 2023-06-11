import { Suspense, lazy } from 'react'
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import "./App.css";
// import HomePage from "./components/pages/HomePage/HomePage";
// import AboutUsPage from "./components/pages/AboutUsPage/AboutUsPage";

const HomePage = lazy(() => import('./components/pages/HomePage/HomePage'));
const AboutUsPage = lazy(() => import('./components/pages/AboutUsPage/AboutUsPage'));

function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<div className='container'>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
