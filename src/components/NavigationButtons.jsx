import { ChevronRight, ChevronLeft } from 'lucide-react';

const NavigationButtons = ({ currentLesson, totalLessons, onPrevious, onNext }) => (
  <div className="flex justify-between items-center mt-8">
    <button
      onClick={onPrevious}
      disabled={currentLesson === 0}
      className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-200 ${
        currentLesson === 0 
          ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
      }`}
    >
      <ChevronLeft size={20} />
      Previous
    </button>
    
    <div className="text-sm text-gray-500 font-medium">
      {currentLesson + 1} of {totalLessons}
    </div>
    
    <button
      onClick={onNext}
      disabled={currentLesson === totalLessons - 1}
      className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-200 ${
        currentLesson === totalLessons - 1
          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
          : 'bg-blue-600 text-white hover:bg-blue-700'
      }`}
    >
      Next
      <ChevronRight size={20} />
    </button>
  </div>
);


export default NavigationButtons;