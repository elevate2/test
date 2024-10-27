"use client"

import React from 'react'
import { ChevronLeft, ChevronRight, Bookmark, MoreHorizontal, Check } from 'lucide-react'

interface DocumentNavBarProps {
  tabs: string[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
  showActions: boolean;
}

export function DocumentNavBar({ tabs, activeTab, setActiveTab, showActions }: DocumentNavBarProps) {
  return (
    <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-white">
      <div className="flex items-center space-x-4">
        {tabs.includes("Fill In") && (
          <div className="flex items-center space-x-2">
            <button className="p-2 rounded hover:bg-gray-100 border border-gray-300">
              <ChevronLeft className="w-5 h-5 text-gray-500" />
            </button>
            <button className="p-2 rounded hover:bg-gray-100 border border-gray-300">
              <ChevronRight className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        )}
        <nav className="flex">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-3 text-sm font-medium ${
                activeTab === tab
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-gray-800"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>
      {showActions && (
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1 text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
            <Check className="w-4 h-4" />
            <span>auto saved</span>
          </div>
          <button className="p-1 rounded hover:bg-gray-100">
            <Bookmark className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-1 rounded hover:bg-gray-100">
            <MoreHorizontal className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      )}
    </div>
  )
}