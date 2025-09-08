const ProgressBar = ({ currentLesson, totalLessons }) => (
  <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
    <div 
      className="bg-blue-600 h-2 rounded-full transition-all duration-500 ease-out"
      style={{ width: `${(currentLesson / (totalLessons - 1)) * 100}%` }}
    ></div>
  </div>
);

export default ProgressBar;