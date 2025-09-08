import { BookOpen, Play } from 'lucide-react';

const LandingPage = ({ onStartCourse }) => (
  <div className="text-center">
    <div className="mb-8">
      <BookOpen size={80} className="mx-auto text-blue-600 mb-6" />
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Introduction to Research Methods
      </h1>
      <h2 className="text-xl md:text-2xl text-blue-600 mb-6">
        for Postgraduate Students
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
        Learn the essentials of academic research in a simple, interactive way. 
        Master the fundamentals that will support your postgraduate journey.
      </p>
      <button
        onClick={onStartCourse}
        className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center gap-3 mx-auto"
      >
        <Play size={24} />
        Start Course
      </button>
    </div>
  </div>
);
export default LandingPage;