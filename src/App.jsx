import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import './styles/App.css';
import { I18nextProvider } from 'react-i18next';
import i18n from './utils/i18n';
import { AppProvider } from './context/AppContext';


const Home = lazy(() => import('./pages/Home'));
const Convert = lazy(() => import('./pages/Convert'));
const Contact = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/Privacy'));
const Tool = lazy(() => import('./pages/Tool'));
const NotFound = lazy(() => import('./pages/NotFound'));

const LoadingScreen = () => (
  <div className="loading-overlay">
    <div className="loader">
      <img 
        src="/P2S-LOGO-1.png" 
        alt="P2S Loading" 
        className="loading-logo"
      />
    </div>
  </div>
);

const PageTransition = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {isLoading && <LoadingScreen />}
      {children}
    </>
  );
};

function App() {
  return (
    <AppProvider>
      <I18nextProvider i18n={i18n}>
        <Router>
          <div className="App">
            <Navbar />
            <ErrorBoundary>
              <Suspense fallback={<LoadingScreen />}>
                <PageTransition>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/convert" element={<Convert />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/Privacy" element={<PrivacyPolicy />} />
                    <Route path="/tool" element={<Tool />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </PageTransition>
              </Suspense>
            </ErrorBoundary>
            <Footer />
          </div>
        </Router>
      </I18nextProvider>
    </AppProvider>
  );
}

export default App;