const ProgressBar = ({ currentStep, totalSteps }) => {
    return (
      <div className="flex gap-2 mb-8">
        {Array.from({ length: totalSteps }, (_, index) => (
          <div
            key={index}
            className={`h-1 flex-1 rounded-full ${index < currentStep ? "bg-orange-400" : "bg-gray-300"}`}
          />
        ))}
      </div>
    )
  }
  
  export default ProgressBar
  