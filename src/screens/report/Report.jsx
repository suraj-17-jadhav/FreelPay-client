import React from "react";
import {
  LayoutDashboard,
  Users,
  CreditCard,
  Settings,
  Bot,
  BarChart3,
  FileText,
  Menu,
  X,
  TrendingUp,
  DollarSign,
  Clock,
  LogOut,
  User,
  ChevronDown,
  Edit,
} from "lucide-react";

const Report = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">
          Reports & Analytics
        </h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
          Generate Report
        </button>
      </div>

      {/* Report Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Monthly Revenue
            </h3>
            <BarChart3 className="h-6 w-6 text-blue-600" />
          </div>
          <div className="space-y-2">
            <p className="text-2xl font-bold text-gray-900">$45,230</p>
            <p className="text-green-600 text-sm font-medium">
              ↗ +12.5% from last month
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Invoice Success Rate
            </h3>
            <BarChart3 className="h-6 w-6 text-green-600" />
          </div>
          <div className="space-y-2">
            <p className="text-2xl font-bold text-gray-900">94.5%</p>
            <p className="text-green-600 text-sm font-medium">
              ↗ +2.1% from last month
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Average Payment Time
            </h3>
            <Clock className="h-6 w-6 text-amber-600" />
          </div>
          <div className="space-y-2">
            <p className="text-2xl font-bold text-gray-900">12.5 days</p>
            <p className="text-red-600 text-sm font-medium">
              ↘ +0.8 days from last month
            </p>
          </div>
        </div>
      </div>

      {/* Chart Placeholder */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Revenue Trend
        </h2>
        <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-500">Chart visualization would go here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
