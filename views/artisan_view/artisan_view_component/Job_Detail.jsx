import { FiMapPin, FiStar, FiBriefcase } from "react-icons/fi"
import Budget_Icon from "@/public/svg/Budget_Icon";
import { MdOutlineVerified, MdOutlineStickyNote2 } from "react-icons/md";
import Link from "next/link";
import { Timeline_Icon } from "@/public/svg";

const Job_Detail = ({ job, showSendQuote = true }) => {
  if (!job) {
    return (
      <div className="p-4 flex items-center justify-center text-gray-500">
        Select a job to view details
      </div>
    );
  }

  return (
    <div className="p-4 border-[0.5px] border-[#E5E5E5] bg-white z-[1] relative rounded-[17px]">
      <h1 className="text-xl font-semibold text-[#000000] mb-4">{job.title}</h1>
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <MdOutlineStickyNote2 className="w-4 h-4 text-[#333333]" />
          <span className="font-medium text-gray-900">Job description</span>
        </div>
        <p className="text-gray-700 leading-relaxed">{job.description}</p>
      </div>

      <div className="flex flex-col gap-4 mb-8">
        <div className="flex items-center gap-2">
          <Budget_Icon />
          <span className="font-medium text-gray-900">
            Budget: ₦{job?.price?.toLocaleString()}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Timeline_Icon /> 
          <span className="font-medium text-gray-900">
            Timeline: {job?.timeline}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-medium text-gray-900">
            Project type: {job.projectType}
          </span>
        </div>
      </div>

      <div className="py-3">
        <h5 className="text-xl font-semibold text-[#333333] mb-4">
          About the client
        </h5>

        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-2">
            <div className="text-sm text-[#333333] font-medium flex items-center gap-1">
              <MdOutlineVerified className="text-[#1C1B1F]" />
              <span>Payment method verified</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} className="w-4 h-4 fill-black text-black" />
              ))}
              <span className="font-medium ml-1">{job.client?.rating}</span>
            </div>
          </div>

          <div className="text-sm text-[#333333] font-medium flex items-center gap-2">
            {job.client?.reviewsCount} of {job.client?.totalReviews} reviews
          </div>

          <div className="text-sm text-[#333333] font-medium flex items-center gap-2">
            <FiMapPin className="w-4 h-4" />
            <span>{job.client?.location}</span>
          </div>

          <div className="text-sm text-[#333333] font-medium flex items-center gap-2">
            <FiBriefcase className="w-4 h-4" />
            <span>{job.client?.jobsPosted} jobs Posted</span>
          </div>

          <div className="text-sm text-[#333333] font-medium flex items-center gap-2">
            Member since {job.client?.memberSince}
          </div>
        </div>

        {showSendQuote && (
          <Link
            href={'/artisan-dashboard/bid'}
            className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Send quote
          </Link>
        )}
      </div>
    </div>
  );
};

export default Job_Detail;
