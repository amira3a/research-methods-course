import { CheckCircle } from 'lucide-react';

const IntroductionToResearch = () => (
  <div>
    <h2 className="text-3xl font-bold text-gray-800 mb-6">Lesson 1: Introduction to Research</h2>
    
    <div className="space-y-6">
      <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">What is Research?</h3>
        <p className="text-gray-700 leading-relaxed">
          Research is a systematic investigation designed to discover new knowledge, 
          validate existing knowledge, or solve specific problems. It involves collecting, 
          analyzing, and interpreting information to answer questions or test hypotheses.
        </p>
      </div>

      <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-600">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Why Research Matters in Postgraduate Studies</h3>
        <ul className="text-gray-700 space-y-2">
          <li className="flex items-start gap-2">
            <CheckCircle size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
            <span>Develops critical thinking and analytical skills</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
            <span>Contributes new knowledge to your field</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
            <span>Builds credibility and expertise</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
            <span>Forms the foundation of your thesis or dissertation</span>
          </li>
        </ul>
      </div>

      <div className="bg-amber-50 p-6 rounded-xl border-l-4 border-amber-600">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Point</h3>
        <p className="text-gray-700 font-medium italic">
          "Without research, postgraduate work lacks credibility and fails to contribute 
          meaningfully to the academic community."
        </p>
      </div>
    </div>
  </div>
);
export default IntroductionToResearch;