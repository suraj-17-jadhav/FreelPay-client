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

const Payment = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">
          Payment Transactions
        </h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
          Process Payment
        </button>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <CreditCard className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  Payment from ABC Corp
                </p>
                <p className="text-gray-500 text-sm">
                  Invoice #INV-001 • Completed
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-green-600">+$2,450.00</p>
              <p className="text-gray-500 text-sm">Jan 20, 2025</p>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <CreditCard className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  Payment from XYZ Ltd
                </p>
                <p className="text-gray-500 text-sm">
                  Invoice #INV-002 • Processing
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-blue-600">+$1,200.00</p>
              <p className="text-gray-500 text-sm">Jan 19, 2025</p>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                <Clock className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Pending Payment</p>
                <p className="text-gray-500 text-sm">
                  Invoice #INV-003 • Overdue
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-amber-600">$890.00</p>
              <p className="text-gray-500 text-sm">Jan 15, 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
