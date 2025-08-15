const TopServicesRequested = () => {
    const services = [
      { 
        id: 1, 
        name: 'Home Decor Gig', 
        popularity: 85, 
        expense: 45,
        color: 'bg-emerald-500'
      },
      { 
        id: 2, 
        name: 'Plumbing refix', 
        popularity: 60, 
        expense: 29,
        color: 'bg-yellow-500'
      },
      { 
        id: 3, 
        name: 'Bathroom Essentials', 
        popularity: 75, 
        expense: 18,
        color: 'bg-purple-500'
      },
      { 
        id: 4, 
        name: 'Make up Artist service', 
        popularity: 45, 
        expense: 25,
        color: 'bg-orange-500'
      },
    ];
  
    const getExpenseColor = (expense) => {
      if (expense >= 40) return 'text-emerald-600 border-emerald-600';
      if (expense >= 25) return 'text-orange-600 border-orange-600';
      if (expense >= 20) return 'text-yellow-600 border-yellow-600';
      return 'text-purple-600 border-purple-600';
    };
  
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h4 className="text-2xl font-bold text-gray-800 mb-8">Top Services Requested</h4>
        
        <div className="space-y-6">
          <div className="grid grid-cols-12 gap-4 text-sm text-gray-500 font-medium">
            <div className="col-span-1">#</div>
            <div className="col-span-5">Name</div>
            <div className="col-span-4">Popularity</div>
            <div className="col-span-2">Expense</div>
          </div>
          
          {services.map((service) => (
            <div key={service.id} className="grid grid-cols-12 gap-4 items-center">
              <div className="col-span-1">
                <span className="text-gray-400 font-medium">
                  {service.id.toString().padStart(2, '0')}
                </span>
              </div>
              
              <div className="col-span-5">
                <span className="text-gray-800 font-medium">{service.name}</span>
              </div>
              
              <div className="col-span-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${service.color}`}
                    style={{ width: `${service.popularity}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="col-span-2">
                <span className={`px-3 py-1 rounded-full border text-sm font-medium ${getExpenseColor(service.expense)}`}>
                  {service.expense}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
export default TopServicesRequested