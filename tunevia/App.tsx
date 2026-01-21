
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureSection from './components/FeatureSection';
import HowItWorks from './components/HowItWorks';
import WhyChoose from './components/WhyChoose';
import PublishingSection from './components/PublishingSection';
import Services from './components/Services';
import Pricing from './components/Pricing';
import HomeFAQ from './components/HomeFAQ';
import Footer from './components/Footer';
import PublishingPage from './components/PublishingPage';
import ServicesPage from './components/ServicesPage';
import FAQPage from './components/FAQPage';
import VideoPage from './components/VideoPage';
import PricingPage from './components/PricingPage';
import YoutubeCMSPage from './components/YoutubeCMSPage';
import DistributionPartnersPage from './components/DistributionPartnersPage';
import TermsOfServicePage from './components/TermsOfServicePage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';

export type PageType = 'home' | 'publishing' | 'services' | 'faq' | 'video' | 'pricing' | 'youtube-cms' | 'distribution-partners' | 'terms' | 'privacy' | 'login' | 'signup';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  useEffect(() => {
    // Smooth scroll behavior for internal anchors
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const targetId = href;
          const element = document.querySelector(targetId);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
    // Scroll to top on page change
    window.scrollTo(0, 0);
  }, [currentPage]);

  const navigateTo = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const isAuthPage = currentPage === 'login' || currentPage === 'signup';

  return (
    <div className="min-h-screen font-sans selection:bg-brand-green selection:text-brand-black bg-brand-black text-white">
      {!isAuthPage && <Header onNavigate={navigateTo as any} currentPage={currentPage as any} />}
      
      <main>
        {currentPage === 'home' && (
          <>
            <Hero />
            <FeatureSection />
            <HowItWorks />
            <WhyChoose />
            <PublishingSection onLearnMore={() => navigateTo('publishing')} />
            <Services onExploreAll={() => navigateTo('services')} />
            <Pricing />
            <HomeFAQ />
          </>
        )}
        {currentPage === 'publishing' && <PublishingPage />}
        {currentPage === 'services' && <ServicesPage onNavigateToYoutube={() => navigateTo('youtube-cms')} />}
        {currentPage === 'faq' && <FAQPage />}
        {currentPage === 'video' && <VideoPage />}
        {currentPage === 'pricing' && <PricingPage />}
        {currentPage === 'youtube-cms' && <YoutubeCMSPage />}
        {currentPage === 'distribution-partners' && <DistributionPartnersPage />}
        {currentPage === 'terms' && <TermsOfServicePage />}
        {currentPage === 'privacy' && <PrivacyPolicyPage />}
        {currentPage === 'login' && <LoginPage onNavigate={navigateTo as any} />}
        {currentPage === 'signup' && <SignupPage onNavigate={navigateTo as any} />}
      </main>
      
      {!isAuthPage && <Footer onNavigate={navigateTo as any} />}
    </div>
  );
};

export default App;
