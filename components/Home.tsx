"use client";

import React from "react";
import {
  Home,
  FileText,
  Globe,
  Users,
  MessageSquare,
  HelpCircle,
  Settings,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Search,
  Plus,
} from "lucide-react";

type SidebarItemProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; // Updated type
  label: string;
  active?: boolean;
};

function SidebarItem({ icon: Icon, label, active = false }: SidebarItemProps) {
  return (
    <li>
      <a
        href="#"
        className={`flex items-center space-x-3 px-3 py-2 rounded-lg ${
          active
            ? "bg-blue-50 text-blue-600"
            : "text-gray-700 hover:bg-gray-100"
        }`}
      >
        <Icon
          width={20}
          height={20}
          className={active ? "text-blue-600" : "text-gray-500"}
        />
        <span className="text-sm font-medium">{label}</span>
      </a>
    </li>
  );
}

export function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 flex items-center space-x-2">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
            />
          </svg>
        </div>
        <span className="text-xl font-semibold">Writify</span>
      </div>
      <nav className="flex-1 overflow-y-auto">
        <ul className="p-2 space-y-1">
          <SidebarItem icon={Home} label="Home" />
          <SidebarItem icon={FileText} label="Cover Letters" active />
          <SidebarItem icon={FileText} label="Resumes" />
          <SidebarItem icon={Globe} label="Websites" />
          <SidebarItem icon={Users} label="Users" />
        </ul>
      </nav>
      <div className="p-4 bg-blue-50 rounded-lg mx-2 mb-2">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium">Basic Plan</span>
          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
            4/10
          </span>
        </div>
        <div className="w-full bg-blue-200 rounded-full h-1.5">
          <div
            className="bg-blue-600 h-1.5 rounded-full"
            style={{ width: "40%" }}
          ></div>
        </div>
        <div className="mt-2 text-xs text-gray-600">
          <span className="font-medium">Trial ends in 4 days</span>
          <p>You are on a free trial of the Basic plan on monthly billing.</p>
        </div>
      </div>
      <ul className="p-2 space-y-1">
        <SidebarItem icon={MessageSquare} label="Feedback" />
        <SidebarItem icon={HelpCircle} label="Help" />
        <SidebarItem icon={Settings} label="Settings" />
      </ul>
      <div className="p-4 flex items-center space-x-2 border-t border-gray-200">
        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-semibold">
          RM
        </div>
        <div className="flex-1">
          <div className="text-sm font-medium">Raraimoon&apos;s spaces</div>
        </div>
        <ChevronDown size={20} className="text-gray-400" />
      </div>
    </div>
  );
}

export function TopBar() {
  return (
    <div className="h-14 border-b border-gray-200 flex items-center justify-between px-4 py-8">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <button className="p-1 rounded-md hover:bg-gray-100">
            <ChevronLeft className="w-5 h-5 text-gray-500" />
          </button>
          <button className="p-1 rounded-md hover:bg-gray-100">
            <ChevronRight className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <svg
            className="w-5 h-5 text-blue-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
            <path
              fillRule="evenodd"
              d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-gray-600">Cover Letters</span>
        </div>
        <div className="text-gray-400">/</div>
        <div className="text-gray-800">Untitled 007</div>
      </div>
      <div className="flex items-center space-x-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="pl-8 pr-3 py-1.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <Search className="w-4 h-4 text-gray-400 absolute left-2.5 top-1/2 transform -translate-y-1/2" />
        </div>
        <button className="bg-gray-900 text-white px-3 py-1.5 rounded-md flex items-center space-x-1 hover:bg-gray-800">
          <Plus className="w-4 h-4" />
          <span>New Project</span>
        </button>
      </div>
    </div>
  );
}
