"use client";

import { Fragment, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Job_Detail from "../artisan_view_component/Job_Detail";

const Bid_View = () => {
  const { jobId } = useParams();
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`/api/jobs/${jobId}`);
        const data = await res.json();
        setSelectedJob(data);
      } catch (error) {
        console.error("Failed to fetch job:", error);
      }
    };

    if (jobId) {
      fetchJob();
    }
  }, [jobId]);

  if (!selectedJob) {
    return <div>Loading job details...</div>;
  }

  return (
    <Fragment>
      <div className="w-full h-[400px]"></div>
      <div className="w-[60%]">
        <Job_Detail job={selectedJob} />
      </div>
    </Fragment>
  );
};

export default Bid_View;
