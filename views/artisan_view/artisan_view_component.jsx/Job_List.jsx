"use client"

import Card from "./Card"

const Job_List = ({ jobs, selectedJob, onJobSelect }) => {
  return (
    <div className="w-1/3 p-4 border-r border-gray-200">
      <div className="space-y-3">
        {jobs.map((job) => (
          <Card key={job.id} job={job} isSelected={selectedJob?.id === job.id} onClick={onJobSelect} />
        ))}
      </div>
    </div>
  )
}
export default Job_List