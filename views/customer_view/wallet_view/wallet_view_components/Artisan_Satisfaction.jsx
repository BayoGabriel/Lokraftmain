import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Area, AreaChart } from 'recharts';

const ArtisanSatisfaction = () => {
  const data = [
    { name: 'Point1', lastMonth: 65, thisMonth: 85 },
    { name: 'Point2', lastMonth: 78, thisMonth: 72 },
    { name: 'Point3', lastMonth: 52, thisMonth: 88 },
    { name: 'Point4', lastMonth: 55, thisMonth: 68 },
    { name: 'Point5', lastMonth: 72, thisMonth: 92 },
    { name: 'Point6', lastMonth: 70, thisMonth: 58 },
    { name: 'Point7', lastMonth: 85, thisMonth: 95 },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h4 className="text-2xl font-bold text-gray-800 mb-6">Artisan Satisfaction</h4>
      
      <div className="h-80 mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorThisMonth" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
              </linearGradient>
              <linearGradient id="colorLastMonth" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={false}
            />
            <YAxis hide />
            <Area
              type="monotone"
              dataKey="lastMonth"
              stroke="#3b82f6"
              strokeWidth={3}
              fill="url(#colorLastMonth)"
              dot={{ fill: '#3b82f6', strokeWidth: 0, r: 6 }}
            />
            <Area
              type="monotone"
              dataKey="thisMonth"
              stroke="#10b981"
              strokeWidth={3}
              fill="url(#colorThisMonth)"
              dot={{ fill: '#10b981', strokeWidth: 0, r: 6 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-gray-600">Last Month</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
            <span className="text-gray-600">This Month</span>
          </div>
        </div>
        
        <div className="flex items-center gap-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800">5 Artisans</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800">10 Artisans</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ArtisanSatisfaction