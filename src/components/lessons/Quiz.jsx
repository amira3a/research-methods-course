import QuizQuestion from "../QuizQuestion";

const Quiz = ({ quizAnswers, showQuizResults, onAnswer }) => {
  const questions = [
    {
      title: "Question 1: Which method is best for analyzing exam scores?",
      options: [
        { id: 'a', label: 'Qualitative', correct: false, feedback: 'Incorrect: Qualitative research deals with opinions and experiences, not numerical data.' },
        { id: 'b', label: 'Quantitative', correct: true, feedback: 'Correct! Exam scores are numerical data that require statistical analysis.' },
        { id: 'c', label: 'Mixed Methods', correct: false, feedback: 'Not necessary if focusing only on numerical scores.' }
      ]
    },
    {
      title: "Question 2: Interviews are commonly used in...",
      options: [
        { id: 'a', label: 'Quantitative research', correct: false, feedback: 'Incorrect: Quantitative research typically uses surveys and numerical data.' },
        { id: 'b', label: 'Qualitative research', correct: true, feedback: 'Correct! Interviews help gather in-depth insights and personal experiences.' },
        { id: 'c', label: 'Statistical analysis', correct: false, feedback: 'Incorrect: Statistical analysis works with numerical data, not interview responses.' }
      ]
    },
    {
      title: "Question 3: True or False: Research always starts with data collection.",
      options: [
        { id: 'true', label: 'True', correct: false, feedback: 'Incorrect: Research starts with identifying and defining the research problem.' },
        { id: 'false', label: 'False', correct: true, feedback: 'Correct! Research begins with problem identification, followed by literature review, then methodology design before data collection.' }
      ]
    }
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Lesson 5: Knowledge Check</h2>
      
      <p className="text-gray-600 mb-8 text-lg">
        Test your understanding with these three questions:
      </p>

      <div className="space-y-8">
        {questions.map((question, index) => (
          <QuizQuestion
            key={index}
            question={question}
            questionIndex={index + 1}
            answer={quizAnswers[index + 1]}
            showResult={showQuizResults[index + 1]}
            onAnswer={onAnswer}
          />
        ))}
      </div>
    </div>
  );
};

export default Quiz;