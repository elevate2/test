import React from 'react'

export function ResumePreview() {
  return (
    <div className="p-6">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Resume Preview</h2>
        <p className="text-gray-600 mb-4">Your resume preview will appear here once you start filling out the form.</p>
        <div className="border-t border-gray-200 pt-4">
          <h3 className="text-lg font-semibold mb-2">Tips for a great resume:</h3>
          <ul className="list-disc list-inside text-sm text-gray-600">
            <li>Keep it concise and relevant</li>
            <li>Use action verbs to describe your experiences</li>
            <li>Quantify your achievements when possible</li>
            <li>Tailor your resume to the job you're applying for</li>
            <li>Proofread carefully for errors</li>
          </ul>
        </div>
      </div>
    </div>
  )
}