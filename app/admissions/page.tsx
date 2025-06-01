"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft, Upload, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AdmissionsPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    studentName: "",
    dateOfBirth: "",
    grade: "",
    parentName: "",
    email: "",
    phone: "",
    address: "",
    previousSchool: "",
    medicalInfo: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  return (
    <div className="min-h-screen bg-neutral-base text-text-light">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-neutral-base/80 backdrop-blur-md border-b border-white/10 rounded-b-md">
        <nav className="container mx-auto flex justify-between items-center p-6">
          <Link
            href="/"
            className="flex items-center space-x-2 text-primary-accent hover:text-secondary-accent transition-colors duration-200 hover-blur p-2 rounded-md"
          >
            <ArrowLeft size={24} />
            <span className="text-xl font-semibold">Back to Home</span>
          </Link>
          <div
            className="logo cursor-pointer hover:scale-105 transition-transform duration-200"
            onClick={() => window.location.reload()}
          >
            <Image
              src="/assets/logo/logo.jpeg"
              alt="Jnanayogi International English Medium School Logo"
              width={60}
              height={60}
              className="rounded-full"
            />
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center text-center overflow-hidden rounded-md mx-4 mt-4">
        <Image
          src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Students studying"
          fill
          className="object-cover -z-10 rounded-md"
          priority
        />
        <div className="absolute inset-0 bg-neutral-base/70 rounded-md"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 premium-text">Join Our School Family</h1>
          <p className="text-xl text-primary-accent">Start your journey with us today</p>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-4">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`flex items-center justify-center w-12 h-12 rounded-md border-2 transition-all duration-300 ${currentStep >= step
                    ? "bg-primary-accent border-primary-accent text-white"
                    : "border-white/30 text-white/50"
                    }`}
                >
                  {currentStep > step ? <CheckCircle size={20} /> : step}
                </div>
              ))}
            </div>
            <div className="w-full bg-white/10 rounded-sm h-2">
              <div
                className="bg-gradient-to-r from-primary-accent via-secondary-accent to-tertiary-accent h-2 rounded-sm transition-all duration-500"
                style={{ width: `${(currentStep / 3) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="glassmorphic p-8 rounded-md premium-card">
            {currentStep === 1 && (
              <div>
                <h2 className="text-2xl font-bold mb-6 text-primary-accent">Student Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Student Full Name</label>
                    <input
                      type="text"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleInputChange}
                      className="w-full p-4 bg-neutral-base border border-primary-accent rounded-md text-text-light focus:ring-2 focus:ring-primary-accent focus:border-transparent transition-all duration-200 hover-blur"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Date of Birth</label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      className="w-full p-4 bg-neutral-base border border-primary-accent rounded-md text-text-light focus:ring-2 focus:ring-primary-accent focus:border-transparent transition-all duration-200 hover-blur"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Grade Applying For</label>
                    <select
                      name="grade"
                      value={formData.grade}
                      onChange={handleInputChange}
                      className="w-full p-4 bg-neutral-base border border-primary-accent rounded-md text-text-light focus:ring-2 focus:ring-primary-accent focus:border-transparent transition-all duration-200 hover-blur"
                      required
                    >
                      <option value="">Select Grade</option>
                      <option value="kindergarten">Kindergarten</option>
                      <option value="1">Grade 1</option>
                      <option value="2">Grade 2</option>
                      <option value="3">Grade 3</option>
                      <option value="4">Grade 4</option>
                      <option value="5">Grade 5</option>
                      <option value="6">Grade 6</option>
                      <option value="7">Grade 7</option>
                      <option value="8">Grade 8</option>
                      <option value="9">Grade 9</option>
                      <option value="10">Grade 10</option>
                      <option value="11">Grade 11</option>
                      <option value="12">Grade 12</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Previous School</label>
                    <input
                      type="text"
                      name="previousSchool"
                      value={formData.previousSchool}
                      onChange={handleInputChange}
                      className="w-full p-4 bg-neutral-base border border-primary-accent rounded-md text-text-light focus:ring-2 focus:ring-primary-accent focus:border-transparent transition-all duration-200 hover-blur"
                    />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div>
                <h2 className="text-2xl font-bold mb-6 text-primary-accent">Parent/Guardian Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Parent/Guardian Name</label>
                    <input
                      type="text"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleInputChange}
                      className="w-full p-4 bg-neutral-base border border-primary-accent rounded-md text-text-light focus:ring-2 focus:ring-primary-accent focus:border-transparent transition-all duration-200 hover-blur"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-4 bg-neutral-base border border-primary-accent rounded-md text-text-light focus:ring-2 focus:ring-primary-accent focus:border-transparent transition-all duration-200 hover-blur"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-4 bg-neutral-base border border-primary-accent rounded-md text-text-light focus:ring-2 focus:ring-primary-accent focus:border-transparent transition-all duration-200 hover-blur"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">Home Address</label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full p-4 bg-neutral-base border border-primary-accent rounded-md text-text-light focus:ring-2 focus:ring-primary-accent focus:border-transparent transition-all duration-200 hover-blur"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div>
                <h2 className="text-2xl font-bold mb-6 text-primary-accent">Additional Information & Documents</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Medical Information (Optional)</label>
                    <textarea
                      name="medicalInfo"
                      value={formData.medicalInfo}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="Any allergies, medical conditions, or special needs we should be aware of..."
                      className="w-full p-4 bg-neutral-base border border-primary-accent rounded-md text-text-light focus:ring-2 focus:ring-primary-accent focus:border-transparent transition-all duration-200 hover-blur"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="glassmorphic p-6 rounded-md text-center border-2 border-dashed border-primary-accent/50 hover:border-primary-accent transition-colors duration-200 premium-card">
                      <Upload className="mx-auto mb-4 text-primary-accent" size={48} />
                      <h3 className="font-semibold mb-2">Upload Transcripts</h3>
                      <p className="text-sm text-text-soft mb-4">PDF, JPG, PNG (Max 5MB)</p>
                      <button className="cta-button text-sm px-4 py-2">Choose Files</button>
                    </div>

                    <div className="glassmorphic p-6 rounded-md text-center border-2 border-dashed border-primary-accent/50 hover:border-primary-accent transition-colors duration-200 premium-card">
                      <Upload className="mx-auto mb-4 text-primary-accent" size={48} />
                      <h3 className="font-semibold mb-2">Recommendation Letters</h3>
                      <p className="text-sm text-text-soft mb-4">PDF, JPG, PNG (Max 5MB each)</p>
                      <button className="cta-button text-sm px-4 py-2">Choose Files</button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <button
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-200 ${currentStep === 1
                  ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                  : "bg-white/10 text-white hover:bg-white/20"
                  }`}
              >
                Previous
              </button>

              {currentStep < 3 ? (
                <button onClick={nextStep} className="cta-button px-6 py-3">
                  Next Step
                </button>
              ) : (
                <button className="cta-button px-6 py-3">Submit Application</button>
              )}
            </div>
          </div>

          {/* Requirements Section */}
          <div className="mt-12 glassmorphic p-8 rounded-md premium-card">
            <h3 className="text-xl font-bold mb-4 text-primary-accent">Application Requirements</h3>
            <ul className="space-y-2 text-text-soft">
              <li>• Completed application form</li>
              <li>• Official transcripts from previous school</li>
              <li>• Two letters of recommendation</li>
              <li>• Birth certificate (copy)</li>
              <li>• Immunization records</li>
              <li>• Application fee: $50 (non-refundable)</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
