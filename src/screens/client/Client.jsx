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

const Client = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Client Management</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
          Add New Client
        </button>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">ABC Corporation</h3>
                <p className="text-gray-500 text-sm">abc@corp.com</p>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              <p>Total Invoices: 15</p>
              <p>Outstanding: $3,450</p>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Users className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">XYZ Limited</h3>
                <p className="text-gray-500 text-sm">contact@xyz.com</p>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              <p>Total Invoices: 8</p>
              <p>Outstanding: $1,200</p>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <Users className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Tech Solutions</h3>
                <p className="text-gray-500 text-sm">hello@techsol.com</p>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              <p>Total Invoices: 22</p>
              <p>Outstanding: $5,890</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
