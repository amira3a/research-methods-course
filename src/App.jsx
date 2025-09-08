import { useState } from 'react'
import ProgressBar from './components/ProgressBar';
import NavigationButtons from './components/NavigationButtons';



import LandingPage from './components/lessons/LandingPage';
import IntroductionToResearch from './components/lessons/IntroductionToResearch';
import ResearchProcess from './components/lessons/ResearchProcess';
import ResearchMethods from './components/lessons/ResearchMethods';
import CaseStudy from './components/lessons/CaseStudy';
import Quiz from './components/lessons/Quiz';
import SummaryReflection from './components/lessons/SummaryReflection';

const App = () => {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showQuizResults, setShowQuizResults] = useState({});
  const [caseStudyAnswer, setCaseStudyAnswer] = useState(null);
  const [showCaseStudyResult, setShowCaseStudyResult] = useState(false);

  const totalLessons = 7;

  const nextLesson = () => {
    if (currentLesson < totalLessons - 1) {
      setCurrentLesson(currentLesson + 1);
    }
  };

  const prevLesson = () => {
    if (currentLesson > 0) {
      setCurrentLesson(currentLesson - 1);
    }
  };

  const restartCourse = () => {
    setCurrentLesson(0);
    setQuizAnswers({});
    setShowQuizResults({});
    setCaseStudyAnswer(null);
    setShowCaseStudyResult(false);
  };

  const handleQuizAnswer = (questionIndex, answer) => {
    setQuizAnswers(prev => ({ ...prev, [questionIndex]: answer }));
    setShowQuizResults(prev => ({ ...prev, [questionIndex]: true }));
  };

  const handleCaseStudyAnswer = (answer) => {
    setCaseStudyAnswer(answer);
    setShowCaseStudyResult(true);
  };

  const renderCurrentLesson = () => {
    switch (currentLesson) {
      case 0:
        return <LandingPage onStartCourse={nextLesson} />;
      case 1:
        return <IntroductionToResearch />;
      case 2:
        return <ResearchProcess />;
      case 3:
        return <ResearchMethods />;
      case 4:
        return (
          <CaseStudy
            caseStudyAnswer={caseStudyAnswer}
            showCaseStudyResult={showCaseStudyResult}
            onAnswer={handleCaseStudyAnswer}
          />
        );
      case 5:
        return (
          <Quiz
            quizAnswers={quizAnswers}
            showQuizResults={showQuizResults}
            onAnswer={handleQuizAnswer}
          />
        );
      case 6:
        return <SummaryReflection onRestartCourse={restartCourse} />;
      default:
        return <LandingPage onStartCourse={nextLesson} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-4 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          {currentLesson > 0 && (
            <ProgressBar currentLesson={currentLesson} totalLessons={totalLessons} />
          )}
          
          <div className="transition-all duration-300 ease-in-out">
            {renderCurrentLesson()}
          </div>
          
          {currentLesson > 0 && (
            <NavigationButtons
              currentLesson={currentLesson}
              totalLessons={totalLessons}
              onPrevious={prevLesson}
              onNext={nextLesson}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
