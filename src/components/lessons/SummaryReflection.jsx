import { CheckCircle, RotateCcw } from 'lucide-react';

const SummaryReflection = ({ onRestartCourse }) => (
  <div>
    <h2 className="text-3xl font-bold text-gray-800 mb-6">Lesson 6: Summary & Reflection</h2>
    
    <div className="space-y-8">
      <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Takeaways</h3>
        <div className="space-y-3 text-gray-700">
          <div className="flex items-start gap-3">
            <CheckCircle size={20} className="text-blue-600 mt-0.5 flex-shrink-0" />
            <span>Research is a systematic process that contributes new knowledge to your field</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle size={20} className="text-blue-600 mt-0.5 flex-shrink-0" />
            <span>The research process follows six key steps, from problem identification to reporting findings</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle size={20} className="text-blue-600 mt-0.5 flex-shrink-0" />
            <span>Choose between quantitative, qualitative, or mixed methods based on your research questions</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle size={20} className="text-blue-600 mt-0.5 flex-shrink-0" />
            <span>Qualitative research explores experiences and meanings, while quantitative research analyzes numerical data</span>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-600">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Reflection Prompt</h3>
        <p className="text-gray-700 text-lg mb-4">
          Think about your own postgraduate field. Which research method could you apply in your future work?
        </p>
        <div className="bg-white p-4 rounded-lg">
          <p className="text-gray-600 text-sm mb-2">Consider:</p>
          <ul className="text-gray-600 text-sm space-y-1">
            <li>• What kinds of questions interest you in your field?</li>
            <li>• Would you need to explore personal experiences or analyze numerical data?</li>
            <li>• How could research enhance your understanding of your discipline?</li>
          </ul>
        </div>
      </div>

      <div className="text-center">
        <div className="mb-6">
          <CheckCircle size={64} className="mx-auto text-green-600 mb-4" />
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Congratulations!</h3>
          <p className="text-gray-600 text-lg">
            You've completed the Introduction to Research Methods course. 
            You now have a solid foundation in research fundamentals.
          </p>
        </div>
        
        <button
          onClick={onRestartCourse}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center gap-3 mx-auto"
        >
          <RotateCcw size={20} />
          Restart Course
        </button>
      </div>
    </div>
  </div>
);
export default SummaryReflection;