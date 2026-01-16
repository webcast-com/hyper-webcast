import { Link } from 'react-router-dom'
import { servicesList } from '../data/services'

export default function Home() {
  return (
    <div className="container mx-auto p-6">
      {/* Hero Section */}
      <section className="text-center mb-12 animate-fade-in relative">
        <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
          <img 
            alt="Technology and innovation background with blue and purple gradient overlay" 
            className="w-full h-full object-cover" 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h2 className="text-5xl font-bold mb-4">Welcome to Our Platform</h2>
              <p className="text-xl mb-6 max-w-2xl mx-auto">
                Discover amazing features with our responsive design and cutting-edge technology
              </p>
              <Link to="/services" target="_blank" className="inline-block bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/30">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="mb-16">
        <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center animate-slide-up">
          Our Services
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.slice(0, 3).map((service, index) => (
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
                  <svg className={`w-6 h-6 mr-2`} style={{color: service.color}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {service.icon === 'code' && <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}></path>}
                    {service.icon === 'mobile' && <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}></path>}
                    {service.icon === 'design' && <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v14a2 2 0 01-4 0zM17 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v14a2 2 0 01-4 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}></path>}
                  </svg>
                  <div className="font-bold text-xl text-gray-800 dark:text-gray-100">{service.title}</div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-base">{service.description}</p>
              </div>
              <div className="px-6 pb-4">
                <Link to={`/services/${service.slug}`} className={`inline-block text-white font-bold py-2 px-4 rounded transition duration-300 focus:outline-none focus:ring-4 hover:opacity-80`} style={{backgroundColor: service.color, borderColor: service.color}}>
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/services" className="inline-block bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
            View All Services
          </Link>
        </div>
      </section>
    </div>
  )
}
