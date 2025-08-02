import React, { useState, useEffect, useContext } from "react";
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
  User,
  ChevronDown,
  Edit,
  LogOut,
} from "lucide-react";
import { Outlet, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import DashboardComponent from "./Dashboard/Dashboard";
import ClientComponent from "./client/Client";
import InvoiceComponent from "./invoice/Invoice";
import PaymentComponent from "./payment/Payment";
import ReportComponent from "./report/Report";
import SettingComponent from "./setting/Setting";
import AIAssistantComponent from "./aiAssistent/Assistent";

const Dashboard = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  if (!isAuthenticated) return <Navigate to="/signin" replace />;

  const [activeTab, setActiveTab] = useState("/dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

  // Route configuration with components
  const routes = {
    "/dashboard": {
      component: DashboardComponent,
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    "/client": { component: ClientComponent, label: "Client", icon: Users },
    "/invoice": {
      component: InvoiceComponent,
      label: "Invoice",
      icon: FileText,
    },
    "/payment": {
      component: PaymentComponent,
      label: "Payment",
      icon: CreditCard,
    },
    "/report": { component: ReportComponent, label: "Report", icon: BarChart3 },
    "/ai-assistant": {
      component: AIAssistantComponent,
      label: "AI Assistant",
      icon: Bot,
    },
    "/setting": {
      component: SettingComponent,
      label: "Setting",
      icon: Settings,
    },
  };

  // Initialize route from URL on component mount
  useEffect(() => {
    const path = location.pathname;
    if (routes[path]) {
      setActiveTab(path);
    } else {
      setActiveTab("/dashboard"); // Fallback to /dashboard if route is invalid
    }
  }, [location.pathname]);

  // Handle navigation
  const handleNavigation = (route) => {
    setActiveTab(route);
    navigate(route);
  };

  // Render the current component
  const renderCurrentComponent = () => {
    const route = routes[activeTab];
    if (route) {
      const Component = route.component;
      return <Component />;
    }
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">404 - Route Not Found</h2>
          <p className="text-gray-600">The route "{activeTab}" does not exist.</p>
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "w-64" : "w-16"
        } bg-white shadow-lg transition-all duration-300 flex flex-col border-r border-gray-200`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <FileText className="h-6 w-6 text-white" />
            </div>
            {sidebarOpen && (
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  SmartInvoice
                </h1>
                <p className="text-xs text-gray-500">Payment Solutions</p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-2">
            {Object.entries(routes).map(([route, config]) => {
              const Icon = config.icon;
              const isActive = activeTab === route;

              return (
                <li key={route}>
                  <button
                    onClick={() => handleNavigation(route)}
                    className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md transform scale-105"
                        : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                    }`}
                  >
                    <Icon
                      className={`h-5 w-5 ${isActive ? "text-white" : ""}`}
                    />
                    {sidebarOpen && (
                      <span
                        className={`font-medium ${
                          isActive ? "text-white" : ""
                        }`}
                      >
                        {config.label}
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-gray-200">
          <div className="relative">
            <button
              onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
              className="w-full flex items-center space-x-3 px-3 py-2 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-white" />
              </div>
              {sidebarOpen && (
                <>
                  <div className="flex-1 text-left">
                    <p className="text-sm font-medium text-gray-900">
                      John Doe
                    </p>
                  </div>
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </>
              )}
            </button>

            {/* Profile Dropdown */}
            {profileDropdownOpen && (
              <div
                className={`absolute ${
                  sidebarOpen ? "left-0 right-0" : "left-16"
                } bottom-full mb-2 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50`}
              >
                <button
                  onClick={() => {
                    setShowProfileModal(true);
                    setProfileDropdownOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-2"
                >
                  <Edit className="h-4 w-4" />
                  <span>Profile</span>
                </button>
                <button
                  onClick={logout}
                  className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center space-x-2"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">{renderCurrentComponent()}</div>

        {/* Profile Modal */}
        {showProfileModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  Edit Profile
                </h2>
                <button
                  onClick={() => setShowProfileModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <User className="h-10 w-10 text-white" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    defaultValue="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    defaultValue="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Role
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="admin">Admin</option>
                    <option value="manager">Manager</option>
                    <option value="user">User</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    defaultValue="+1 (555) 123-4567"
                  />
                </div>

                <div className="flex space-x-3 pt-4">
                  <button
                    onClick={() => {
                      alert("Profile updated successfully!");
                      setShowProfileModal(false);
                    }}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    Save Changes
                  </button>
                  <button
                    onClick={() => setShowProfileModal(false)}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;