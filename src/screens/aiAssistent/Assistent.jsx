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

const Assistent = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">AI Assistant</h1>
        <div className="flex items-center space-x-2 text-green-600">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium">Online</span>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 h-96">
        <div className="flex flex-col h-full">
          <div className="flex-1 space-y-4 overflow-y-auto">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <Bot className="h-4 w-4 text-blue-600" />
              </div>
              <div className="bg-blue-50 rounded-lg p-3 max-w-md">
                <p className="text-gray-900">
                  Hello! I'm your AI assistant. I can help you with invoice
                  management, payment tracking, and financial insights. What
                  would you like to know?
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-4">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Ask me anything about your invoices or payments..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assistent;
