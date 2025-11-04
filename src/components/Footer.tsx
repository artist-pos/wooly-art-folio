// App.tsx
import React, { useState } from 'react';
import Footer from './components/Footer'; // Adjust path if needed

// Placeholder content components (replace with your real content/components)
const HomeContent = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-4xl font-bold">Welcome to Woolworst</h1>
    <p>Home page content goes here...</p>
  </div>
);

const MissionContent = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-4xl font-bold">Our Mission</h1>
    <p>Mission statement details...</p>
  </div>
);

const GuidelinesContent = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-4xl font-bold">Community Guidelines</h1>
    <p>Guidelines details...</p>
  </div>
);

const FAQContent = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-4xl font-bold">FAQ</h1>
    <p>Frequently asked questions...</p>
  </div>
);

const PrivacyContent = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-4xl font-bold">Privacy Policy</h1>
    <p>Privacy details...</p>
  </div>
);

const DisclaimerContent = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-4xl font-bold">Disclaimer</h1>
    <p>Legal disclaimer...</p>
  </div>
);

const App: React.FC = () => {
  const [currentView, setView] = useState('home');

  const renderContent = () => {
    switch (currentView) {
      case 'mission':
        return <MissionContent />;
      case 'guidelines':
        return <GuidelinesContent />;
      case 'faq':
        return <FAQContent />;
      case 'privacy':
        return <PrivacyContent />;
      case 'disclaimer':
        return <DisclaimerContent />;
      default:
        return <HomeContent />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {renderContent()}
      </main>
      <Footer setView={setView} />
    </div>
  );
};

export default App;
