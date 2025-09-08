import ResearchMethodCard from "../ResearchMethodCard";
import { BarChart3, MessageSquare, Users } from "lucide-react";


const ResearchMethods = () => {
  const methods = [
    {
      icon: BarChart3,
      title: "Quantitative Research",
      description: "Deals with numbers, statistics, and measurable data. Uses mathematical analysis to test hypotheses and identify patterns.",
      examples: [
        "Surveys with numerical rating scales",
        "Statistical analysis of test scores",
        "Experimental studies with control groups",
        "Census data analysis"
      ],
      color: "blue"
    },
    {
      icon: MessageSquare,
      title: "Qualitative Research",
      description: "Explores experiences, opinions, and meanings. Uses descriptive analysis to understand complex social phenomena.",
      examples: [
        "In-depth interviews",
        "Focus group discussions",
        "Ethnographic observations",
        "Case studies"
      ],
      color: "green"
    },
    {
      icon: Users,
      title: "Mixed Methods",
      description: "Combines both quantitative and qualitative approaches to provide a more comprehensive understanding of research questions.",
      examples: ["Survey students about satisfaction (quantitative), then conduct interviews to understand why they feel that way (qualitative)."],
      color: "purple"
    }
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Lesson 3: Research Methods</h2>
      
      <p className="text-gray-600 mb-8 text-lg">
        There are three main approaches to research, each with distinct characteristics:
      </p>

      <div className="space-y-6">
        {methods.map((method, index) => (
          <ResearchMethodCard key={index} {...method} />
        ))}
      </div>
    </div>
  );
};

export default ResearchMethods;