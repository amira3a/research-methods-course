import ProcessStep from "../ResearchProcessStep";

const ResearchProcess = () => {
  const steps = [
    { step: 1, title: "Identify Research Problem", desc: "Define what you want to investigate", color: "red" },
    { step: 2, title: "Review Literature", desc: "Study existing research on your topic", color: "orange" },
    { step: 3, title: "Design the Study", desc: "Plan your research methodology", color: "yellow" },
    { step: 4, title: "Collect Data", desc: "Gather information using your chosen methods", color: "green" },
    { step: 5, title: "Analyze Data", desc: "Process and interpret your findings", color: "blue" },
    { step: 6, title: "Report Findings", desc: "Share your results with the academic community", color: "purple" }
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Lesson 2: The Research Process</h2>
      
      <p className="text-gray-600 mb-8 text-lg">
        Research follows a systematic process with six key steps:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {steps.map((item, index) => (
          <ProcessStep key={index} {...item} />
        ))}
      </div>

      <div className="mt-8 bg-gray-50 p-6 rounded-xl">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Remember</h3>
        <p className="text-gray-700">
          These steps often overlap and may require iteration. Research is rarely a perfectly linear process!
        </p>
      </div>
    </div>
  );
};

export default ResearchProcess;