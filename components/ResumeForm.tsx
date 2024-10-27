"use client"

import React, { useState } from 'react'
import { ChevronDown, HelpCircle, X, Plus, Trash2 } from 'lucide-react'

export function ResumeForm() {
  const [skills, setSkills] = useState(['JavaScript', 'React', 'Node.js'])
  const [experiences, setExperiences] = useState([
    { id: 1, title: '', company: '', startDate: '', endDate: '', description: '' }
  ])
  const [educations, setEducations] = useState([
    { id: 1, degree: '', institution: '', graduationDate: '' }
  ])

  const addSkill = () => {
    setSkills([...skills, ''])
  }

  const removeSkill = (index: number) => {
    setSkills(skills.filter((_, i) => i !== index))
  }

  const addExperience = () => {
    setExperiences([...experiences, { id: Date.now(), title: '', company: '', startDate: '', endDate: '', description: '' }])
  }

  const removeExperience = (id: number) => {
    setExperiences(experiences.filter(exp => exp.id !== id))
  }

  const addEducation = () => {
    setEducations([...educations, { id: Date.now(), degree: '', institution: '', graduationDate: '' }])
  }

  const removeEducation = (id: number) => {
    setEducations(educations.filter(edu => edu.id !== id))
  }

  return (
    <div className="max-w-full mx-auto">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 flex items-start">
        <div className="flex-1 text-blue-700 text-sm">
          <span className="font-semibold">Click here</span> to check out our tips for creating an effective resume
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <X className="w-5 h-5" />
        </button>
      </div>

      <h1 className="text-2xl font-bold mb-6 flex items-center justify-between">
        Create your resume
        <span className="text-pink-500 text-sm font-normal">5/10</span>
      </h1>

      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
          <input type="tel" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
          <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="City, State" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Professional Summary</label>
          <textarea className="w-full px-3 py-2 border border-gray-300 rounded-md" rows={4}></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Skills</label>
          <div className="space-y-2">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center space-x-2">
                <input
                  type="text"
                  value={skill}
                  onChange={(e) => {
                    const newSkills = [...skills]
                    newSkills[index] = e.target.value
                    setSkills(newSkills)
                  }}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
                />
                <button type="button" onClick={() => removeSkill(index)} className="text-red-500 hover:text-red-700">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
          <button type="button" onClick={addSkill} className="mt-2 text-blue-600 hover:text-blue-800 flex items-center">
            <Plus className="w-4 h-4 mr-1" /> Add Skill
          </button>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Work Experience</label>
          {experiences.map((exp) => (
            <div key={exp.id} className="border border-gray-200 rounded-md p-4 mb-4">
              <input
                type="text"
                placeholder="Job Title"
                className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
                value={exp.title}
                onChange={(e) => {
                  const newExperiences = experiences.map(e => e.id === exp.id ? { ...e, title: e.target.value } : e)
                  setExperiences(newExperiences)
                }}
              />
              <input
                type="text"
                placeholder="Company"
                className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
                value={exp.company}
                onChange={(e) => {
                  const newExperiences = experiences.map(e => e.id === exp.id ? { ...e, company: e.target.value } : e)
                  setExperiences(newExperiences)
                }}
              />
              <div className="flex space-x-2 mb-2">
                <input
                  type="text"
                  placeholder="Start Date"
                  className="w-1/2 px-3 py-2 border border-gray-300 rounded-md"
                  value={exp.startDate}
                  onChange={(e) => {
                    const newExperiences = experiences.map(e => e.id === exp.id ? { ...e, startDate: e.target.value } : e)
                    setExperiences(newExperiences)
                  }}
                />
                <input
                  type="text"
                  placeholder="End Date"
                  className="w-1/2 px-3 py-2 border border-gray-300 rounded-md"
                  value={exp.endDate}
                  onChange={(e) => {
                    const newExperiences = experiences.map(e => e.id === exp.id ? { ...e, endDate: e.target.value } : e)
                    setExperiences(newExperiences)
                  }}
                />
              </div>
              <textarea
                placeholder="Job Description"
                className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
                rows={3}
                value={exp.description}
                onChange={(e) => {
                  const newExperiences = experiences.map(e => e.id === exp.id ? { ...e, description: e.target.value } : e)
                  setExperiences(newExperiences)
                }}
              ></textarea>
              <button type="button" onClick={() => removeExperience(exp.id)} className="text-red-500 hover:text-red-700">
                Remove Experience
              </button>
            </div>
          ))}
          <button type="button" onClick={addExperience} className="text-blue-600 hover:text-blue-800 flex items-center">
            <Plus className="w-4 h-4 mr-1" /> Add Experience
          </button>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Education</label>
          {educations.map((edu) => (
            <div key={edu.id} className="border border-gray-200 rounded-md p-4 mb-4">
              <input
                type="text"
                placeholder="Degree"
                className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
                value={edu.degree}
                onChange={(e) => {
                  const newEducations = educations.map(e => e.id === edu.id ? { ...e, degree: e.target.value } : e)
                  setEducations(newEducations)
                }}
              />
              <input
                type="text"
                placeholder="Institution"
                className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
                value={edu.institution}
                onChange={(e) => {
                  const newEducations = educations.map(e => e.id === edu.id ? { ...e, institution: e.target.value } : e)
                  setEducations(newEducations)
                }}
              />
              <input
                type="text"
                placeholder="Graduation Date"
                className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
                value={edu.graduationDate}
                onChange={(e) => {
                  const newEducations = educations.map(e => e.id === edu.id ? { ...e, graduationDate: e.target.value } : e)
                  setEducations(newEducations)
                }}
              />
              <button type="button" onClick={() => removeEducation(edu.id)} className="text-red-500 hover:text-red-700">
                Remove Education
              </button>
            </div>
          ))}
          <button type="button" onClick={addEducation} className="text-blue-600 hover:text-blue-800 flex items-center">
            <Plus className="w-4 h-4 mr-1" /> Add Education
          </button>
        </div>

        <div className="flex justify-end">
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Generate Resume
          </button>
        </div>
      </form>
    </div>
  )
}