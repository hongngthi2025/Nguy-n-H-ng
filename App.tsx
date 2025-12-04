import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/home/Hero';
import SocialProof from './components/home/SocialProof';
import { ProblemSolution, Mechanism, USP, Testimonials } from './components/home/Features';
import AssessmentWizard from './components/assessment/AssessmentWizard';
import AssessmentResult from './components/assessment/AssessmentResult';
import ExpertProfile from './components/expert/ExpertProfile';
import { ViewState, AssessmentAnswers } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [assessmentAnswers, setAssessmentAnswers] = useState<AssessmentAnswers | null>(null);

  const handleAssessmentComplete = (answers: AssessmentAnswers) => {
    setAssessmentAnswers(answers);
    setCurrentView('assessment-result');
    window.scrollTo(0, 0);
  };

  const navigateTo = (view: ViewState) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header onNavigate={navigateTo} currentView={currentView} />
      
      <main className="flex-grow">
        {currentView === 'home' && (
          <>
            <Hero onNavigate={navigateTo} />
            <SocialProof />
            <ProblemSolution />
            <Mechanism />
            <USP />
            <Testimonials onNavigate={navigateTo} />
          </>
        )}

        {currentView === 'assessment' && (
          <AssessmentWizard 
            onComplete={handleAssessmentComplete} 
            onCancel={() => navigateTo('home')} 
          />
        )}

        {currentView === 'assessment-result' && assessmentAnswers && (
          <AssessmentResult 
            answers={assessmentAnswers} 
            onNavigate={navigateTo} 
          />
        )}

        {currentView === 'expert-profile' && (
          <ExpertProfile onNavigate={navigateTo} />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;