"use client";

import React, { useState } from "react";
import { Sidebar } from "@/components/Home";
import { DocumentNavBar } from "@/components/DocumentNavBar";
import { ResumeForm } from "@/components/ResumeForm";
import { ResumePreview } from "@/components/ResumePreview";

export default function App() {
  const [activeTab, setActiveTab] = useState("Home");
  const [activeDocument] = useState("CoverLetter");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex h-screen bg-white">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <div className="flex-1 flex flex-col">
          <div className="flex">
            <div className="w-[60%] border-r border-gray-200">
              <DocumentNavBar
                tabs={["Fill In", "Design", "Proofreading"]}
                activeTab={activeTab}
                setActiveTab={handleTabChange}
                showActions={false}
              />
            </div>
            <div className="w-[40%]">
              <DocumentNavBar
                tabs={["Preview"]}
                activeTab={activeTab}
                setActiveTab={handleTabChange}
                showActions={true}
              />
            </div>
          </div>
          <div className="flex-1 flex overflow-hidden">
            <div className="w-[60%] overflow-y-auto px-6 py-4 border-r border-gray-200">
              {activeDocument === "CoverLetter" ? (
                <ResumeForm />
              ) : (
                <ResumeForm />
              )}
            </div>
            <div className="w-[40%] bg-gray-50 overflow-y-auto">
              {activeDocument === "CoverLetter" ? (
                <ResumePreview />
              ) : (
                <ResumePreview />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
