const teamMembers = [
  {
    name: 'John Smith',
    role: 'CEO & Founder',
    bio: 'Visionary leader with 15+ years in tech industry',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Sarah Johnson',
    role: 'Lead Designer',
    bio: 'Award-winning designer passionate about user experience',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Mike Chen',
    role: 'Tech Lead',
    bio: 'Full-stack developer with expertise in modern frameworks',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Emma Williams',
    role: 'Marketing Manager',
    bio: 'Digital marketing strategist with proven track record',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  }
]

export default function About() {
  return (
    <div className="container mx-auto p-6">
      {/* Company Overview */}
      <section className="mb-16 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center animate-slide-up">
          About Us
        </h1>
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 animate-slide-up">
          <img 
            alt="About us team photo showing diverse group of professionals smiling in modern office" 
            className="rounded-lg shadow-lg w-full md:w-64 h-64 object-cover" 
            src="https://storage.googleapis.com/a1aa/image/48f5776a-09b4-437e-d804-2ddd75c518f6.jpg"
          />
          <div className="text-gray-700 dark:text-gray-300 text-lg">
            <p className="mb-4">
              We are a passionate team of developers, designers, and marketers dedicated to delivering high-quality digital solutions. Our mission is to empower businesses with innovative technology and creative design.
            </p>
            <p className="mb-4">
              Founded in 2019, we've had the privilege of working with hundreds of clients across various industries. From startups to established enterprises, we bring expertise, creativity, and dedication to every project.
            </p>
            <p>
              With years of experience and a commitment to excellence, we strive to exceed our clients' expectations and build long-lasting partnerships. We believe in continuous learning and innovation to stay at the forefront of technology.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
          Our Mission & Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 animate-slide-up" style={{animationDelay: '0.1s'}}>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              <span className="inline-block bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3">🎯</span>
              Our Mission
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              To deliver exceptional digital solutions that drive business growth and transform ideas into reality.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 animate-slide-up" style={{animationDelay: '0.2s'}}>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              <span className="inline-block bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3">💡</span>
              Innovation
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              We embrace cutting-edge technologies and creative thinking to solve complex challenges.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 animate-slide-up" style={{animationDelay: '0.3s'}}>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              <span className="inline-block bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3">🤝</span>
              Collaboration
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              We work closely with our clients to ensure their vision becomes reality.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 animate-slide-up" style={{animationDelay: `${(index + 1) * 0.1}s`}}>
              <img 
                alt={member.name} 
                className="w-full h-48 object-cover" 
                src={member.image}
              />
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100">{member.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm mb-2">{member.role}</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Company Stats */}
      <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
          Our Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center animate-slide-up" style={{animationDelay: '0.1s'}}>
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">5+</div>
            <p className="text-gray-700 dark:text-gray-300">Years in Business</p>
          </div>
          <div className="text-center animate-slide-up" style={{animationDelay: '0.2s'}}>
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">100+</div>
            <p className="text-gray-700 dark:text-gray-300">Projects Delivered</p>
          </div>
          <div className="text-center animate-slide-up" style={{animationDelay: '0.3s'}}>
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</div>
            <p className="text-gray-700 dark:text-gray-300">Happy Clients</p>
          </div>
          <div className="text-center animate-slide-up" style={{animationDelay: '0.4s'}}>
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">25+</div>
            <p className="text-gray-700 dark:text-gray-300">Team Members</p>
          </div>
        </div>
      </section>
    </div>
  )
}
