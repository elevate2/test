"use client"

import React, { useState } from 'react'
import { ChevronDown, HelpCircle, X, Phone, Mail } from 'lucide-react'

export function CoverLetterForm() {
  const [skills] = useState(['UI/UX', 'Data Analytics', 'Design'])
  const [creativity, setCreativity] = useState(0.8)

  return (
    <div className="max-w-full mx-auto">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 flex items-start">
        <div className="flex-1 text-blue-700 text-sm">
          <span className="font-semibold">Click here</span> to check out our tips for using Cover Letter AI
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <X className="w-5 h-5" />
        </button>
      </div>

      <h1 className="text-2xl font-bold mb-6 flex items-center justify-between">
        Generate your cover letter
        <span className="text-pink-500 text-sm font-normal">4/10</span>
      </h1>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Which skills should be the focus? <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="flex flex-wrap gap-2 p-2 border rounded-md">
              {skills.map((skill) => (
                <span key={skill} className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-md flex items-center">
                  {skill}
                  <button className="ml-1 text-blue-600 hover:text-blue-800">
                    <X className="w-4 h-4" />
                  </button>
                </span>
              ))}
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <ChevronDown className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
            How creative should the output be? <HelpCircle className="w-4 h-4 text-gray-400 ml-1" />
          </label>
          <input
            type="number"
            min="0"
            max="1"
            step="0.1"
            value={creativity}
            onChange={(e) => setCreativity(parseFloat(e.target.value))}
            className="w-full"
          />
          <div className="text-right text-sm text-gray-500">{creativity}</div>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">From</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First name <span className="text-red-500">*</span>
              </label>
              <input type="text" className="w-full p-2 border rounded-md" placeholder="Rara" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Last name</label>
              <input type="text" className="w-full p-2 border rounded-md" placeholder="imoon" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone number</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Phone className="w-4 h-4 text-gray-400" />
                </div>
                <input type="tel" className="w-full pl-8 pr-3 py-2 border rounded-md" placeholder="+62 877 100-0000" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input type="email" className="w-full pl-8 pr-3 py-2 border rounded-md" placeholder="raraimoon@gmail.com" />
                <Mail className="w-5 h-5 text-gray-400 absolute left-2 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">To</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First name <span className="text-red-500">*</span>
              </label>
              <input type="text" className="w-full p-2 border rounded-md" placeholder="Malik" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Last name</label>
              <input type="text" className="w-full p-2 border rounded-md" placeholder="D'Essentials" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company name <span className="text-red-500">*</span>
              </label>
              <input type="text" className="w-full p-2 border rounded-md" placeholder="Keitoro" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
              <input type="text" className="w-full p-2 border rounded-md" placeholder="-" />
            </div>
          </div>
        </div>

        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
          Create Content
        </button>
      </div>
    </div>
  )
}
