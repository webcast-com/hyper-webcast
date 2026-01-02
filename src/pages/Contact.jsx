import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="container mx-auto p-6">
      <section className="mb-16">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4 text-center animate-slide-up">
          Contact Us
        </h1>
        <p className="text-center text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-12">
          Have a question or want to discuss a project? Get in touch with us and let's start a conversation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          {/* Contact Info Cards */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center animate-slide-up" style={{animationDelay: '0.1s'}}>
            <div className="text-4xl mb-4">📍</div>
            <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-2">Address</h3>
            <p className="text-gray-700 dark:text-gray-300">123 Tech Street, San Francisco, CA 94102</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center animate-slide-up" style={{animationDelay: '0.2s'}}>
            <div className="text-4xl mb-4">📞</div>
            <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-2">Phone</h3>
            <p className="text-gray-700 dark:text-gray-300">+1 (555) 123-4567</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center animate-slide-up" style={{animationDelay: '0.3s'}}>
            <div className="text-4xl mb-4">📧</div>
            <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-2">Email</h3>
            <p className="text-gray-700 dark:text-gray-300">info@mytailwindapp.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 space-y-6 animate-slide-up">
            {submitted && (
              <div className="bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-700 text-green-800 dark:text-green-200 px-4 py-3 rounded-lg">
                ✓ Thank you for your message! We'll get back to you soon.
              </div>
            )}
            
            <div>
              <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Project Inquiry"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 p-8 pb-4">
          Find Us
        </h2>
        <div className="w-full h-96 bg-gray-300 dark:bg-gray-700">
          <iframe
            title="Company Location"
            width="100%"
            height="100%"
            style={{border: 0}}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.8368341280826!2d-122.41641629999999!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064d3a9d6fd%3A0x87b2c5f8dcc52a35!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  )
}
