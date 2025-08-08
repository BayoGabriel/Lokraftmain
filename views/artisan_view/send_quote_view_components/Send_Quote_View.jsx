import { Fragment } from "react"
import Job_Detail from "../artisan_view_component.jsx/Job_Detail"
import { BedFrame } from "@/public"

const Send_Quote_View = () => {
  const selectedJob = [
    {
        id: 2,
        title: "HVAC System Repair",
        location: "Alaba, Lagos",
        postedTime: "20mins ago",
        price: 50000,
        image: BedFrame,
        description:
          "Looking for an experienced HVAC technician to repair our air conditioning system. The unit is not cooling properly and may need parts replacement. Must have experience with commercial HVAC systems.",
        timeline: "May 1 - May 3, 2025",
        projectType: "One-time",
        client: {
          rating: 4.8,
          reviewsCount: 12,
          totalReviews: 15,
          location: "Victoria Island, Lagos",
          jobsPosted: 8,
          memberSince: "Mar, 2024",
        },
      }
  ]
  return (
    <Fragment>
      <div className="w-full h-[400px]"></div>
      <div className="w-[60%]">
          <Job_Detail job={selectedJob} />
      </div>
    </Fragment>
  )
}

export default Send_Quote_View