"use client"
import React, { useState } from 'react'
import { Sidebar, TopBar } from '@/components/Home'
import { DocumentNavBar } from '@/components/DocumentNavBar'
import { CoverLetterForm } from '@/components/CoverLetterForm'
import { CoverLetterPreview } from '@/components/CoverLetterPreview'

export default function Home() {
  const [activeTab, setActiveTab] = useState("Fill In")

  return (
    <div className="flex h-screen bg-white">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopBar />
        <div className="flex-1 flex flex-col">
          <div className="flex">
            <div className="w-[55%] border-r border-gray-200">
              <DocumentNavBar
                tabs={["Fill In", "Design", "Proofreading"]}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                showActions={false}
              />
            </div>
            <div className="w-[45%]">
              <DocumentNavBar
                tabs={["Preview"]}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                showActions={true}
              />
            </div>
          </div>
          <div className="flex-1 flex overflow-hidden">
            <div className="w-[55%] overflow-y-auto px-6 py-4 border-r border-gray-200">
              <CoverLetterForm />
            </div>
            <div className="w-[45%] bg-gray-50 overflow-y-auto">
              <CoverLetterPreview />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}