
const SkillField = (title) => {
    return (
      <div className="p-4 border border-gray-200 rounded">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <div className="flex items-center">
          <div className="w-10 h-1 bg-blue-500 mr-2"></div>
          <div className="text-sm">Intermediate</div>
        </div>
      </div>
    );
  };

export default SkillField;