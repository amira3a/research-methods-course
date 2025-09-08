import { CheckCircle, XCircle} from 'lucide-react'

const QuizQuestion = ({ question, questionIndex, answer, showResult, onAnswer }) => (
  <div className="bg-gray-50 p-6 rounded-xl">
    <h3 className="text-lg font-semibold text-gray-800 mb-4">{question.title}</h3>
    
    <div className="space-y-2">
      {question.options.map((option) => (
        <div key={option.id}>
          <button
            onClick={() => onAnswer(questionIndex, option.id)}
            disabled={showResult}
            className={`w-full text-left p-3 rounded-lg border-2 transition-all duration-200 ${
              answer === option.id
                ? option.correct
                  ? 'border-green-500 bg-green-50'
                  : 'border-red-500 bg-red-50'
                : showResult
                ? option.correct
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-200 bg-gray-100'
                : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
            }`}
          >
            <div className="flex items-center gap-3">
              {showResult && (
                option.correct ? (
                  <CheckCircle className="text-green-600" size={16} />
                ) : answer === option.id ? (
                  <XCircle className="text-red-600" size={16} />
                ) : null
              )}
              <span>{option.id.toUpperCase()} {option.label}</span>
            </div>
          </button>
          
          {showResult && answer === option.id && (
            <div className={`mt-2 p-3 rounded-lg ${
              option.correct ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              <p className="text-sm">{option.feedback}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);
export default QuizQuestion;