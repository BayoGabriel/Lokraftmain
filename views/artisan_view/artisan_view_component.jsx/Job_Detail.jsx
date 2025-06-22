import { FiMapPin, FiCalendar, FiBriefcase, FiStar } from "react-icons/fi"

const Job_Detail = ({ job }) => {
  if (!job) {
    return <div className="p-4 flex items-center justify-center text-gray-500">Select a job to view details</div>
  }

  return (
    <div className="p-4">
      <div className="max-w-2xl">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">{job.title}</h1>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <FiBriefcase className="w-4 h-4 text-gray-600" />
            <span className="font-medium text-gray-900">Job description</span>
          </div>
          <p className="text-gray-700 leading-relaxed">{job.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-medium text-gray-900">💰 Budget: ₦{job.price.toLocaleString()}</span>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <FiCalendar className="w-4 h-4 text-gray-600" />
              <span className="font-medium text-gray-900">Timeline: {job.timeline}</span>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-2">
              <FiBriefcase className="w-4 h-4 text-gray-600" />
              <span className="font-medium text-gray-900">Project type: {job.projectType}</span>
            </div>
          </div>
        </div>

        <div className="border-t pt-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">About the client</h2>

          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">✓ Payment method verified</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="font-medium ml-1">{job.client.rating}</span>
              </div>
            </div>

            <div className="text-sm text-gray-600">
              {job.client.reviewsCount} of {job.client.totalReviews} reviews
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <FiMapPin className="w-4 h-4" />
              <span>{job.client.location}</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <FiBriefcase className="w-4 h-4" />
              <span>{job.client.jobsPosted} jobs Posted</span>
            </div>

            <div className="text-sm text-gray-600">Member since {job.client.memberSince}</div>
          </div>

          <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            Send quote
          </button>
        </div>
      </div>
    </div>
  )
}
export default Job_Detail