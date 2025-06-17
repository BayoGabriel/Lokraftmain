import { FiFileText, FiDollarSign, FiClock, FiMapPin, FiStar, FiUser } from "react-icons/fi"

const JobDetail = ({ job }) => {
  if (!job) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <p className="text-gray-500">Select a job to view details</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">{job.title}</h2>

      <div className="mb-6">
        <div className="flex items-center mb-3">
          <FiFileText className="w-5 h-5 text-gray-500 mr-2" />
          <h3 className="font-semibold text-gray-800">Job description</h3>
        </div>
        <p className="text-gray-600 leading-relaxed">{job.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="flex items-center">
          <FiDollarSign className="w-5 h-5 text-gray-500 mr-2" />
          <div>
            <span className="text-sm text-gray-500">Budget: </span>
            <span className="font-semibold">₦{job.budget.toLocaleString()}</span>
          </div>
        </div>

        <div className="flex items-center">
          <FiClock className="w-5 h-5 text-gray-500 mr-2" />
          <div>
            <span className="text-sm text-gray-500">Timeline: </span>
            <span className="font-semibold">{job.timeline}</span>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-sm text-gray-600">
          <span className="font-semibold">Project type:</span> {job.projectType}
        </p>
      </div>

      <div className="border-t border-gray-200 pt-6 mb-6">
        <h3 className="font-semibold text-gray-800 mb-4">About the client</h3>

        <div className="space-y-3">
          <div className="flex items-center">
            <span className="text-sm text-green-600 mr-2">✓</span>
            <span className="text-sm text-gray-600">Payment method verified</span>
          </div>

          <div className="flex items-center">
            <div className="flex items-center mr-4">
              {[...Array(5)].map((_, i) => (
                <FiStar
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(job.client.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                  }`}
                />
              ))}
              <span className="ml-2 text-sm font-semibold">{job.client.rating}</span>
            </div>
            <span className="text-sm text-gray-600">{job.client.reviewCount} reviews</span>
          </div>

          <div className="flex items-center">
            <FiMapPin className="w-4 h-4 text-gray-500 mr-2" />
            <span className="text-sm text-gray-600">{job.client.location}</span>
          </div>

          <div className="flex items-center">
            <FiUser className="w-4 h-4 text-gray-500 mr-2" />
            <span className="text-sm text-gray-600">{job.client.jobsPosted} Jobs Posted</span>
          </div>

          <div className="text-sm text-gray-600">Member since {job.client.memberSince}</div>
        </div>
      </div>

      <button className="w-full md:w-auto bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
        Send quote
      </button>
    </div>
  )
}

export default JobDetail
