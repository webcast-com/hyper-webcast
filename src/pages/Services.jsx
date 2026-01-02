import { Link } from 'react-router-dom'
import { servicesList } from '../data/services'

export default function Services() {
  return (
    <div className="container mx-auto p-6">
      <section className="mb-16">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4 text-center animate-slide-up">
          Our Services
        </h1>
        <p className="text-center text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-12">
          We provide comprehensive digital solutions tailored to your business needs. From web development to digital marketing, we're here to help your business grow.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, index) => (
            <div key={index} className="max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl transition duration-300 animate-slide-up" style={{animationDelay: `${(index + 1) * 0.1}s`}}>
              <div className="h-48 relative overflow-hidden">
                <img
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                  src={service.image}
                />
                <div className="absolute inset-0" style={{background: `linear-gradient(to top, ${service.colorGradient}20, transparent)`}}></div>
              </div>
              <div className="px-6 py-4">
                <div className="flex items-center mb-2">
                  <svg className="w-6 h-6 mr-2" style={{color: service.color}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {service.icon === 'code' && <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}></path>}
                    {service.icon === 'mobile' && <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}></path>}
                    {service.icon === 'design' && <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v14a2 2 0 01-4 0zM17 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v14a2 2 0 01-4 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}></path>}
                  </svg>
                  <h3 className="font-bold text-xl text-gray-800 dark:text-gray-100">{service.title}</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-base">{service.description}</p>
              </div>
              <div className="px-6 pb-4">
                <Link to={`/services/${service.slug}`} className="inline-block text-white font-bold py-2 px-4 rounded transition duration-300 focus:outline-none focus:ring-4 hover:opacity-80" style={{backgroundColor: service.color}}>
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="mb-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">5+</div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Years Experience</h3>
            <p className="text-gray-700 dark:text-gray-300">Delivering quality solutions since 2019</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">100+</div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Projects Completed</h3>
            <p className="text-gray-700 dark:text-gray-300">Satisfied clients across various industries</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">24/7</div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Support Available</h3>
            <p className="text-gray-700 dark:text-gray-300">Always here to help you succeed</p>
          </div>
        </div>
      </section>
    </div>
  )
}
