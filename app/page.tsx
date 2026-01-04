import { ArrowUpRight, DollarSign, Users, Activity, CreditCard } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
          <p className="text-slate-500 mt-1">Overview of your sales performance.</p>
        </div>
        <button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors">
          Download Report
        </button>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Revenue" 
          value="$45,231.89" 
          trend="+20.1% from last month" 
          icon={DollarSign} 
        />
        <StatCard 
          title="Active Deals" 
          value="+2350" 
          trend="+180.1% from last month" 
          icon={Users} 
        />
        <StatCard 
          title="Win Rate" 
          value="12.5%" 
          trend="+19% from last month" 
          icon={Activity} 
        />
        <StatCard 
          title="Sales Now" 
          value="+573" 
          trend="+201 since last hour" 
          icon={CreditCard} 
        />
      </div>

      {/* Placeholder for Charts (We will add this later) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-96">
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm p-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Revenue Overview</h3>
          <div className="h-64 bg-slate-50 rounded-lg flex items-center justify-center text-slate-400 border border-dashed border-slate-300">
            Chart Component Coming Soon
          </div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Recent Sales</h3>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center justify-between pb-4 border-b border-slate-100 last:border-0">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">
                    AC
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">Acme Corp</p>
                    <p className="text-xs text-slate-500">New License</p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-slate-900">+$1,999</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Simple internal component for the cards
function StatCard({ title, value, trend, icon: Icon }: any) {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <h3 className="text-2xl font-bold text-slate-900 mt-2">{value}</h3>
        </div>
        <div className="p-2 bg-blue-50 rounded-lg">
          <Icon className="w-5 h-5 text-blue-600" />
        </div>
      </div>
      <p className="text-xs text-slate-500 mt-4 flex items-center">
        <span className="text-green-600 font-medium flex items-center mr-1">
          <ArrowUpRight className="w-3 h-3 mr-1" />
        </span>
        {trend}
      </p>
    </div>
  );
}
