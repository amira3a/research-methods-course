import CaseStudyOption from "../CaseStudyOption";

const CaseStudy = ({ caseStudyAnswer, showCaseStudyResult, onAnswer }) => {
  const options = [
    { 
      id: 'quantitative', 
      label: 'Quantitative Research',
      feedback: 'Not enough, because dropout reasons involve personal opinions and experiences that numbers alone cannot capture.'
    },
    { 
      id: 'qualitative', 
      label: 'Qualitative Research',
      feedback: 'Correct! Interviews and focus groups help explore student perspectives and understand the deeper reasons behind their decisions.'
    },
    { 
      id: 'mixed', 
      label: 'Mixed Methods',
      feedback: 'Partly correct, but qualitative research is most suitable here since we need to understand personal experiences and motivations.'
    }
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Lesson 4: Interactive Case Study</h2>
      
      <div className="bg-amber-50 p-6 rounded-xl border-l-4 border-amber-600 mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Scenario</h3>
        <p className="text-gray-700 text-lg leading-relaxed">
          A university wants to study why students drop out of online classes. 
          The administration needs to understand the underlying reasons to improve retention rates.
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Which research method would be most appropriate for this study?
        </h3>
        
        <div className="space-y-3">
          {options.map((option) => (
            <CaseStudyOption 
              key={option.id}
              option={option}
              onAnswer={onAnswer}
              selectedAnswer={caseStudyAnswer}
              showResult={showCaseStudyResult}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default CaseStudy;