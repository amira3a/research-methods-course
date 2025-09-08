import { CheckCircle, XCircle} from 'lucide-react'

const CaseStudyOption = ({ option, onAnswer, selectedAnswer, showResult }) => (
  <div>
    <button
      onClick={() => onAnswer(option.id)}
      disabled={showResult}
      className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
        selectedAnswer === option.id
          ? option.id === 'qualitative'
            ? 'border-green-500 bg-green-50'
            : 'border-red-500 bg-red-50'
          : showResult
          ? option.id === 'qualitative'
            ? 'border-green-500 bg-green-50'
            : 'border-gray-200 bg-gray-50'
          : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
      }`}
    >
      <div className="flex items-center gap-3">
        {showResult && (
          option.id === 'qualitative' ? (
            <CheckCircle className="text-green-600" size={20} />
          ) : selectedAnswer === option.id ? (
            <XCircle className="text-red-600" size={20} />
          ) : null
        )}
        <span className="font-medium">{option.label}</span>
      </div>
    </button>
    
    {showResult && selectedAnswer === option.id && (
      <div className={`mt-2 p-3 rounded-lg ${
        option.id === 'qualitative' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
      }`}>
        <p className="text-sm">{option.feedback}</p>
      </div>
    )}
  </div>
);

export default CaseStudyOption;