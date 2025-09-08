const ProcessStep = ({ step, title, desc, color }) => (
  <div className={`bg-${color}-50 p-4 rounded-xl border-l-4 border-${color}-500`}>
    <div className={`w-8 h-8 bg-${color}-500 text-white rounded-full flex items-center justify-center font-bold text-sm mb-3`}>
      {step}
    </div>
    <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{desc}</p>
  </div>
);
export default ProcessStep;