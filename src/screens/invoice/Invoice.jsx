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

const Invoice = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Invoice Management</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
          Create New Invoice
        </button>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <FileText className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">INV-001</p>
                <p className="text-gray-500 text-sm">
                  ABC Corporation • Due: Jan 25, 2025
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-gray-900">$2,450.00</p>
              <span className="inline-block px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                Paid
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                <FileText className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">INV-002</p>
                <p className="text-gray-500 text-sm">
                  XYZ Limited • Due: Jan 28, 2025
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-gray-900">$1,200.00</p>
              <span className="inline-block px-2 py-1 text-xs font-medium bg-amber-100 text-amber-800 rounded-full">
                Pending
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <FileText className="h-5 w-5 text-red-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">INV-003</p>
                <p className="text-gray-500 text-sm">
                  Tech Solutions • Due: Jan 15, 2025
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-gray-900">$890.00</p>
              <span className="inline-block px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">
                Overdue
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
