import { useParams, useNavigate, Link } from 'react-router-dom'
import { servicesList } from '../data/services'

export default function ServiceDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  
  const service = servicesList.find(s => s.slug === slug)

  if (!service) {
    return (
      <div className="container mx-auto p-6">
        <section className="text-center py-16">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">Service Not Found</h1>
          <p className="text-gray-700 dark:text-gray-300 mb-8">Sorry, we couldn't find the service you're looking for.</p>
          <Link to="/services" className="inline-block bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
            Back to Services
          </Link>
        </section>
      </div>
    )
  }

  const relatedServices = servicesList.filter(s => s.slug !== service.slug).slice(0, 3)

  return (
    <div className="container mx-auto p-6">
      {/* Breadcrumb */}
      <div className="mb-8 text-sm">
        <Link to="/services" className="text-blue-600 dark:text-blue-400 hover:underline">Services</Link>
        <span className="text-gray-500 dark:text-gray-400 mx-2">/</span>
        <span className="text-gray-700 dark:text-gray-300">{service.title}</span>
      </div>

      {/* Hero Section */}
      <section className="mb-12 animate-fade-in">
        <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
          <img 
            alt={service.title} 
            className="w-full h-full object-cover" 
            src={service.image}
          />
          <div className="absolute inset-0" style={{background: `linear-gradient(135deg, ${service.color}99, ${service.color}cc)`}} className="absolute inset-0 flex items-end p-8">
            <div className="text-white">
              <h1 className="text-5xl font-bold mb-4">{service.title}</h1>
              <p className="text-xl max-w-2xl">{service.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="mb-16 max-w-4xl animate-slide-up">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">About This Service</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">{service.details}</p>
      </section>

      {/* Features Section */}
      <section className="mb-16 animate-slide-up" style={{animationDelay: '0.1s'}}>
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.features.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 animate-slide-up" style={{animationDelay: `${(index + 1) * 0.05}s`}}>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md" style={{backgroundColor: `${service.color}20`, color: service.color}}>
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">{feature}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8">Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {service.benefits.map((benefit, index) => (
            <div key={index} className="flex items-start animate-slide-up" style={{animationDelay: `${(index + 1) * 0.05}s`}}>
              <div className="flex-shrink-0 mr-4">
                <div className="flex items-center justify-center h-10 w-10 rounded-full" style={{backgroundColor: service.color}}>
                  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">{benefit}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mb-16 rounded-lg shadow-lg p-8 animate-slide-up" style={{animationDelay: '0.3s', backgroundColor: service.color}}>
        <div className="text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Let's discuss how {service.title} can transform your business.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-block bg-white text-white font-bold py-3 px-8 rounded-lg transition duration-300 hover:opacity-90" style={{color: service.color}}>
              Request a Quote
            </Link>
            <button className="inline-block border-2 border-white text-white font-bold py-3 px-8 rounded-lg transition duration-300 hover:bg-white hover:text-gray-800">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="mb-16 animate-slide-up" style={{animationDelay: '0.4s'}}>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((relatedService, index) => (
              <Link key={relatedService.slug} to={`/services/${relatedService.slug}`} className="group">
                <div className="max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl transition duration-300 animate-slide-up" style={{animationDelay: `${(index + 1) * 0.1}s`}}>
                  <div className="h-48 relative overflow-hidden">
                    <img 
                      alt={relatedService.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500" 
                      src={relatedService.image}
                    />
                    <div className="absolute inset-0" style={{background: `linear-gradient(to top, ${relatedService.colorGradient}20, transparent)`}}></div>
                  </div>
                  <div className="px-6 py-4">
                    <div className="flex items-center mb-2">
                      <svg className="w-6 h-6 mr-2" style={{color: relatedService.color}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {relatedService.icon === 'code' && <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}></path>}
                        {relatedService.icon === 'mobile' && <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}></path>}
                        {relatedService.icon === 'design' && <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v14a2 2 0 01-4 0zM17 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v14a2 2 0 01-4 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}></path>}
                      </svg>
                      <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100">{relatedService.title}</h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">{relatedService.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
