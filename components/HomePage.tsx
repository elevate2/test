"use client"

import React from 'react'
import { Search, Plus, ChevronDown, FileText, Bookmark, MoreHorizontal } from 'lucide-react'

export function HomePage() {
  const recentDocuments = [
    { id: 1, title: "Software Engineer Cover Letter", type: "Cover Letter", date: "2023-10-25" },
    { id: 2, title: "Marketing Specialist Resume", type: "Resume", date: "2023-10-23" },
    { id: 3, title: "Product Manager Cover Letter", type: "Cover Letter", date: "2023-10-20" },
    { id: 4, title: "Data Analyst Resume", type: "Resume", date: "2023-10-18" },
  ]

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-semibold text-gray-800">Home</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="pl-8 pr-3 py-1.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-2.5 top-1/2 transform -translate-y-1/2" />
          </div>
          <button className="bg-blue-600 text-white px-3 py-1.5 rounded-md flex items-center space-x-1 hover:bg-blue-700">
            <Plus className="w-4 h-4" />
            <span>New Project</span>
          </button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
        <div className="max-w-5xl mx-auto space-y-6">
          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Documents</h2>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              {recentDocuments.map((doc, index) => (
                <div key={doc.id} className={`flex items-center justify-between p-4 ${index !== recentDocuments.length - 1 ? 'border-b border-gray-100' : ''}`}>
                  <div className="flex items-center space-x-3">
                    <FileText className="w-5 h-5 text-gray-400" />
                    <div>
                      <h3 className="text-sm font-medium text-gray-800">{doc.title}</h3>
                      <p className="text-xs text-gray-500">{doc.type} • Modified {doc.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-1 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
                      <Bookmark className="w-4 h-4" />
                    </button>
                    <button className="p-1 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <QuickActionCard
                title="Create Cover Letter"
                description="Craft a compelling cover letter for your next job application"
                icon={FileText}
                color="bg-blue-500"
              />
              <QuickActionCard
                title="Build Resume"
                description="Design a professional resume to showcase your skills and experience"
                icon={FileText}
                color="bg-green-500"
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

function QuickActionCard({ title, description, icon: Icon, color }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 flex items-start space-x-4">
      <div className={`${color} rounded-full p-3 text-white`}>
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h3 className="text-lg font-medium text-gray-800 mb-1">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <button className="mt-3 text-sm font-medium text-blue-600 hover:text-blue-700">
          Get Started
          <ChevronDown className="w-4 h-4 inline-block ml-1 transform -rotate-90" />
        </button>
      </div>
    </div>
  )
}