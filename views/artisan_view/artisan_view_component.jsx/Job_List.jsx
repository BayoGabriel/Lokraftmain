"use client"

import Card from "./Card"

const Job_List = ({ jobs, selectedJob, onJobSelect }) => {
  return (
    <div className="space-y-3">
      {jobs.map((job) => (
        <Card key={job.id} job={job} isSelected={selectedJob?.id === job.id} onClick={onJobSelect} />
      ))}
    </div>
  )
}
export default Job_List