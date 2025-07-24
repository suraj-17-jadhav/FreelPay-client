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

const DashboardContent = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
        <div className="text-sm text-gray-500">
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white transform hover:scale-105 transition-transform duration-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Total Revenue</p>
              <p className="text-2xl font-bold">$45,230</p>
            </div>
            <DollarSign className="h-8 w-8 text-blue-200" />
          </div>
          <div className="mt-4 flex items-center">
            <TrendingUp className="h-4 w-4 text-green-300 mr-1" />
            <span className="text-green-300 text-sm">
              +12.5% from last month
            </span>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl p-6 text-white transform hover:scale-105 transition-transform duration-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-emerald-100 text-sm">Total Invoices</p>
              <p className="text-2xl font-bold">1,234</p>
            </div>
            <FileText className="h-8 w-8 text-emerald-200" />
          </div>
          <div className="mt-4 flex items-center">
            <TrendingUp className="h-4 w-4 text-green-300 mr-1" />
            <span className="text-green-300 text-sm">
              +8.2% from last month
            </span>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl p-6 text-white transform hover:scale-105 transition-transform duration-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-amber-100 text-sm">Pending Payments</p>
              <p className="text-2xl font-bold">$12,890</p>
            </div>
            <Clock className="h-8 w-8 text-amber-200" />
          </div>
          <div className="mt-4 flex items-center">
            <span className="text-amber-200 text-sm">23 invoices pending</span>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white transform hover:scale-105 transition-transform duration-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">Active Clients</p>
              <p className="text-2xl font-bold">89</p>
            </div>
            <Users className="h-8 w-8 text-purple-200" />
          </div>
          <div className="mt-4 flex items-center">
            <TrendingUp className="h-4 w-4 text-green-300 mr-1" />
            <span className="text-green-300 text-sm">+15 new this month</span>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Recent Activity
        </h2>
        <div className="space-y-4">
          <div className="flex items-center p-3 bg-blue-50 rounded-lg">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
            <div className="flex-1">
              <p className="text-gray-900 font-medium">
                New invoice created for ABC Corp
              </p>
              <p className="text-gray-500 text-sm">2 hours ago</p>
            </div>
            <span className="text-blue-600 font-semibold">$2,450</span>
          </div>
          <div className="flex items-center p-3 bg-green-50 rounded-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
            <div className="flex-1">
              <p className="text-gray-900 font-medium">
                Payment received from XYZ Ltd
              </p>
              <p className="text-gray-500 text-sm">5 hours ago</p>
            </div>
            <span className="text-green-600 font-semibold">$1,200</span>
          </div>
          <div className="flex items-center p-3 bg-amber-50 rounded-lg">
            <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
            <div className="flex-1">
              <p className="text-gray-900 font-medium">
                Payment reminder sent to Tech Solutions
              </p>
              <p className="text-gray-500 text-sm">1 day ago</p>
            </div>
            <span className="text-amber-600 font-semibold">Overdue</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
