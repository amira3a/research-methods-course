

const ResearchMethodCard = ({ icon: Icon, title, description, examples, color }) => (
  <div className={`bg-${color}-50 p-6 rounded-xl border-l-4 border-${color}-600`}>
    <div className="flex items-center gap-3 mb-4">
      <Icon size={32} className={`text-${color}-600`} />
      <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-700 mb-4">{description}</p>
    <div className="bg-white p-4 rounded-lg">
      <h4 className="font-semibold text-gray-800 mb-2">Examples:</h4>
      <ul className="text-gray-600 space-y-1">
        {examples.map((example, index) => (
          <li key={index}>• {example}</li>
        ))}
      </ul>
    </div>
  </div>
);
export default ResearchMethodCard;