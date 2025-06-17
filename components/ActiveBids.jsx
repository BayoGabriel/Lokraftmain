const ActiveBids = () => {
    const bids = [
      { id: 1, title: "Fix a leaking pipe and canal in Sangotedo, Lagos", color: "bg-red-500" },
      { id: 2, title: "Fix a leaking pipe and canal in Sangotedo, Lagos", color: "bg-orange-500" },
      { id: 3, title: "Fix a leaking pipe and canal in Sangotedo, Lagos", color: "bg-purple-500" },
      { id: 4, title: "Fix a leaking pipe and canal in Sangotedo, Lagos", color: "bg-teal-500" },
    ]
  
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-800">Active Bids</h3>
          <a href="#" className="text-sm text-green-600 hover:text-green-700">
            See all Bids
          </a>
        </div>
  
        <div className="space-y-3">
          {bids.map((bid) => (
            <div key={bid.id} className={`${bid.color} rounded-lg p-4 text-white`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-xs">👤</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{bid.title}</p>
                  </div>
                </div>
                <button className="bg-white bg-opacity-20 text-white px-3 py-1 rounded text-xs hover:bg-opacity-30 transition-colors">
                  View bid
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  export default ActiveBids
  