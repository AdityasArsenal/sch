"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SchoolWebsite() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const handleContactInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    })
  }

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      // For now, we'll use a simple fetch to a JSON placeholder or create a simple endpoint
      // You can replace this with actual Supabase integration once you set up your project

      // Simple validation
      if (!contactForm.name || !contactForm.email || !contactForm.message) {
        setSubmitMessage('Please fill in all fields.')
        return
      }

      // Simulate API call (replace with actual Supabase integration)
      await new Promise(resolve => setTimeout(resolve, 1000))

      // For demonstration, we'll just show a success message
      setSubmitMessage('Thank you for your message! We will get back to you soon.')
      setContactForm({ name: '', email: '', message: '' })

    } catch (error) {
      setSubmitMessage('Sorry, there was an error sending your message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const navItems = [
    { href: "#about", label: "About Us" },
    { href: "#address", label: "Address" },
    { href: "#infrastructure", label: "Infrastructure" },
    { href: "#staff", label: "Staff" },
    { href: "#vision", label: "Vision" },
    { href: "#admissions", label: "Admissions" },
    { href: "#academics", label: "Academics" },
    { href: "#news", label: "News & Events" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
    { href: "#testimonials", label: "Testimonials" },
  ]

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <div className="glossy-logo">
            <h1 className="text-4xl font-bold text-primary-accent">Jnanayogi</h1>
          </div>
          <div className="loading-bar">
            <div className="loading-progress"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-neutral-base text-text-light">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-neutral-base/80 backdrop-blur-md border-b border-white/10 rounded-b-md">
        <nav className="container mx-auto flex justify-between items-center p-6">
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-md border border-white/10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-text-light hover:text-primary-accent transition-all duration-300 hover:scale-105 px-3 py-2 rounded-md hover-blur"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-text-light hover:text-primary-accent transition-colors duration-200 p-2 rounded-md hover:bg-white/10"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-neutral-base/95 backdrop-blur-sm border-t border-white/10 transition-all duration-300 ease-in-out rounded-b-md ${isMobileMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
            }`}
        >
          <div className="container mx-auto py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-text-light hover:text-primary-accent hover:bg-white/5 transition-all duration-200 rounded-md mx-2 hover-blur"
                onClick={closeMobileMenu}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-[-1]" onClick={closeMobileMenu} />
        )}
      </header>

      {/* Hero Section with adjusted overlay opacity */}
      <section className="hero relative h-[70vh] flex items-center justify-center text-center overflow-hidden rounded-md mx-4 mt-4">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-accent/20 to-secondary-accent/20 rounded-md"></div>
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>

        <Image
          src="/assets/school/SCHOOL.png"
          alt="Jnanayogi International English Medium School building"
          fill
          className="object-cover -z-10 rounded-md"
          priority
        />
        <div className="absolute inset-0 bg-neutral-base/30 rounded-md"></div> {/* Reduced opacity from /60 to /30 */}

        <div className="relative z-10 px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 premium-text">Jnanayogi International English Medium School</h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-accent font-medium">
            Empowering tomorrow's Leaders
          </p>
          <button
            className="cta-button text-lg px-8 py-4"
            onClick={() => document.getElementById('admissions')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Discover More
          </button>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-primary-accent">About Us</h2>
          <div className="glassmorphic p-8 rounded-3xl">
            <p className="text-lg leading-relaxed">
              Founded in 1980, our school has been at the forefront of educational excellence. We believe in nurturing
              not just the mind, but the whole individual.
            </p>
          </div>
        </div>
      </section>

      {/* Address */}
      <section id="address" className="py-16 bg-neutral-secondary rounded-3xl mx-4">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-primary-accent">Address</h2>
          <div className="glassmorphic p-8 rounded-3xl">
            <p className="text-lg mb-2">123 Learning Lane, Education City, 45678</p>
            <p className="text-lg mb-6">Phone: (123) 456-7890 | Email: info@school.edu</p>
            <div className="rounded-3xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509325!2d144.9537363153167!3d-37.81627997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d1f2b8b8b8b8!2sEducation%20City!5e0!3m2!1sen!2sus!4v1635781234567!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="School Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section id="infrastructure" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-primary-accent">Infrastructure</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glassmorphic p-8 text-center rounded-3xl hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-4">Modern Classrooms</h3>
              <p>Equipped with smart boards.</p>
            </div>
            <div className="glassmorphic p-8 text-center rounded-3xl hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-4">Science Labs</h3>
              <p>State-of-the-art facilities.</p>
            </div>
            <div className="glassmorphic p-8 text-center rounded-3xl hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-4">Sports Complex</h3>
              <p>Expansive grounds with an Olympic-size swimming pool.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Staff */}
      <section id="staff" className="py-16 bg-neutral-secondary rounded-md mx-4">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-primary-accent">Staff</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[
              {
                name: "Dr. Jane Doe, Ed.D.",
                position: "Principal",
                image:
                  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
                color: "border-primary-accent",
              },
              {
                name: "Mr. John Smith, M.Sc.",
                position: "Science Teacher",
                image:
                  "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
                color: "border-secondary-accent",
              },
              {
                name: "Ms. Emily Brown, M.A.",
                position: "Counselor",
                image:
                  "https://images.unsplash.com/photo-1573496359142-b8d8779935c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
                color: "border-tertiary-accent",
              },
              {
                name: "Dr. Michael Johnson, Ph.D.",
                position: "Mathematics Teacher",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
                color: "border-quaternary-accent",
              },
            ].map((staff, index) => (
              <div
                key={index}
                className="staff-card glassmorphic p-6 text-center rounded-md premium-card hover:scale-105 transition-all duration-300"
              >
                <div className={`w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 ${staff.color}`}>
                  <Image
                    src={staff.image || "/placeholder.svg"}
                    alt={staff.position}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">{staff.name}</h3>
                <p className="text-primary-accent">{staff.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section id="vision" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-primary-accent">Vision</h2>
          <div className="glassmorphic p-8 rounded-3xl">
            <p className="text-lg leading-relaxed">
              To create a community of lifelong learners who are prepared to make a positive impact on the world.
            </p>
          </div>
        </div>
      </section>

      {/* Admissions */}
      <section id="admissions" className="py-16 bg-neutral-secondary rounded-3xl mx-4">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-primary-accent">Admissions</h2>
          <div className="glassmorphic p-8 rounded-3xl">
            <p className="text-lg mb-6">
              Apply online by June 30th. Submit transcripts and two letters of recommendation.
            </p>
            <Link href="/admissions">
              <button className="cta-button">Apply Now</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Academics */}
      <section id="academics" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-primary-accent">Academics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glassmorphic p-8 rounded-3xl hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold mb-4">Primary Education</h3>
              <p>Grades 1-5: Building foundational skills.</p>
            </div>
            <div className="glassmorphic p-8 rounded-3xl hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold mb-4">Secondary Education</h3>
              <p>Grades 6-12: Preparing for higher education.</p>
            </div>
            <div className="glassmorphic p-8 rounded-3xl md:col-span-2 hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold mb-4">Advanced Placement Courses</h3>
              <p>College-level courses for high achievers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section id="news" className="py-16 bg-neutral-secondary rounded-3xl mx-4">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-primary-accent">News & Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glassmorphic p-8 rounded-3xl hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-2">Annual Science Fair</h3>
              <p className="text-sm text-text-soft mb-4">July 15, 2024</p>
              <p>Showcasing student innovations.</p>
            </div>
            <div className="glassmorphic p-8 rounded-3xl hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-2">Parent-Teacher Conference</h3>
              <p className="text-sm text-text-soft mb-4">August 10, 2024</p>
              <p>Schedule your appointment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-primary-accent">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-300">
              <Image
                src="/assets/buses/bus.jpg"
                alt="School Bus"
                width={300}
                height={200}
                className="object-cover w-full h-48"
              />
            </div>
            <div className="rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-300">
              <Image
                src="/assets/buses/bus_team.jpg"
                alt="Bus Team"
                width={300}
                height={200}
                className="object-cover w-full h-48"
              />
            </div>
            <div className="rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-300">
              <Image
                src="/assets/school/SCHOOL.png"
                alt="School Building"
                width={300}
                height={200}
                className="object-cover w-full h-48"
              />
            </div>
            <div className="rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-300">
              <Image
                src="/assets/buses/bus.jpg"
                alt="School Transportation"
                width={300}
                height={200}
                className="object-cover w-full h-48"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-neutral-secondary rounded-3xl mx-4">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-primary-accent">Contact</h2>
          <div className="glassmorphic p-8 rounded-3xl">
            <form className="space-y-6" onSubmit={handleContactSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={contactForm.name}
                  onChange={handleContactInputChange}
                  className="w-full p-4 bg-neutral-base border border-primary-accent rounded-2xl text-text-light focus:ring-2 focus:ring-primary-accent focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={contactForm.email}
                  onChange={handleContactInputChange}
                  className="w-full p-4 bg-neutral-base border border-primary-accent rounded-2xl text-text-light focus:ring-2 focus:ring-primary-accent focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={contactForm.message}
                  onChange={handleContactInputChange}
                  rows={4}
                  className="w-full p-4 bg-neutral-base border border-primary-accent rounded-2xl text-text-light focus:ring-2 focus:ring-primary-accent focus:border-transparent transition-all duration-200"
                  required
                />
              </div>

              {submitMessage && (
                <div className={`p-4 rounded-lg text-center ${submitMessage.includes('Thank you')
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                  : 'bg-red-500/20 text-red-400 border border-red-500/30'
                  }`}>
                  {submitMessage}
                </div>
              )}

              <button
                type="submit"
                className={`cta-button w-full ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-primary-accent">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glassmorphic p-8 rounded-3xl hover:scale-105 transition-transform duration-300">
              <p className="italic text-lg mb-4">"This school changed my child's life!"</p>
              <p className="text-right text-primary-accent font-semibold">- Parent</p>
            </div>
            <div className="glassmorphic p-8 rounded-3xl hover:scale-105 transition-transform duration-300">
              <p className="italic text-lg mb-4">"I love the hands-on learning!"</p>
              <p className="text-right text-primary-accent font-semibold">- Student</p>
            </div>
            <div className="glassmorphic p-8 rounded-3xl hover:scale-105 transition-transform duration-300">
              <p className="italic text-lg mb-4">"The skills I learned here prepared me for college."</p>
              <p className="text-right text-primary-accent font-semibold">- Alum</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-secondary py-12 text-center rounded-t-md mt-8">
        <p className="mb-6 text-lg">© 2023 Jnanayogi International English Medium School. All rights reserved.</p>
        <div className="flex justify-center space-x-6">
          <a
            href="#"
            className="text-primary-accent hover:text-secondary-accent transition-colors duration-200 p-3 rounded-md hover-blur"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>
          <a
            href="#"
            className="text-secondary-accent hover:text-tertiary-accent transition-colors duration-200 p-3 rounded-md hover-blur"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
            </svg>
          </a>
          <a
            href="#"
            className="text-tertiary-accent hover:text-quaternary-accent transition-colors duration-200 p-3 rounded-md hover-blur"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  )
}