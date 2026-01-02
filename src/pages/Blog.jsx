const blogPosts = [
  {
    id: 1,
    title: 'How to Build Responsive Websites in 2024',
    excerpt: 'Learn the latest techniques and best practices for creating responsive websites that look great on any device.',
    date: 'December 15, 2024',
    category: 'Web Development',
    content: 'Responsive design is no longer optional in modern web development. With devices of all sizes accessing our websites, it\'s crucial to ensure your site works perfectly on everything from smartphones to large desktop monitors. In this comprehensive guide, we\'ll explore the latest techniques and best practices for creating truly responsive websites in 2024.'
  },
  {
    id: 2,
    title: 'Top Mobile App Development Trends',
    excerpt: 'Explore the emerging trends in mobile app development and how to leverage them for your projects.',
    date: 'December 10, 2024',
    category: 'Mobile Development',
    content: 'The mobile app landscape is constantly evolving. As we move through 2024, several key trends are shaping how developers build mobile applications. From cross-platform development frameworks to AI integration, the opportunities are vast and exciting. Let\'s explore the trends that are defining mobile app development today.'
  },
  {
    id: 3,
    title: 'UI/UX Design Principles for Beginners',
    excerpt: 'Understand the fundamental principles of UI/UX design to create user-friendly and attractive interfaces.',
    date: 'December 5, 2024',
    category: 'Design',
    content: 'UI/UX design is an art and science combined. While it may seem intimidating at first, understanding the fundamental principles can help you create interfaces that are both beautiful and functional. In this guide, we\'ll cover the core principles that every designer should know.'
  },
  {
    id: 4,
    title: 'Cloud Computing: What You Need to Know',
    excerpt: 'A comprehensive guide to cloud computing and how it can benefit your business operations.',
    date: 'November 30, 2024',
    category: 'Cloud Technology',
    content: 'Cloud computing has transformed how businesses operate. Whether you\'re just starting to explore cloud services or looking to optimize your existing infrastructure, this guide will help you understand the fundamentals and benefits of cloud computing.'
  },
  {
    id: 5,
    title: 'Effective Digital Marketing Strategies',
    excerpt: 'Discover proven digital marketing strategies to increase your brand awareness and sales.',
    date: 'November 25, 2024',
    category: 'Marketing',
    content: 'In today\'s digital world, having a solid marketing strategy is essential for business success. From social media marketing to content strategy, there are countless ways to reach your target audience. Let\'s explore the most effective digital marketing strategies for 2024.'
  },
  {
    id: 6,
    title: 'SEO Optimization Tips for 2024',
    excerpt: 'Boost your website\'s search engine ranking with these essential SEO tips and tricks.',
    date: 'November 20, 2024',
    category: 'SEO',
    content: 'Search engine optimization remains a critical component of any digital marketing strategy. With search algorithms constantly evolving, it\'s important to stay updated on the latest SEO best practices. This guide covers the most important SEO tips for 2024.'
  }
]

export default function Blog() {
  return (
    <div className="container mx-auto p-6">
      <section className="mb-16">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4 text-center animate-slide-up">
          Latest Blog Posts
        </h1>
        <p className="text-center text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-12">
          Stay updated with our latest insights on technology, design, and digital marketing.
        </p>

        <div className="space-y-8 max-w-4xl mx-auto">
          {blogPosts.map((post, index) => (
            <article 
              key={post.id} 
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300 animate-slide-up"
              style={{animationDelay: `${(index + 1) * 0.1}s`}}
            >
              <div className="flex items-center space-x-2 mb-3">
                <span className="inline-block bg-blue-600 dark:bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-gray-500 dark:text-gray-400 text-sm">{post.date}</span>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {post.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {post.excerpt}
              </p>
              <a href="#" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                Read More →
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 rounded-lg shadow-lg p-8 text-white">
        <h2 className="text-3xl font-bold text-center mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-center mb-6 max-w-2xl mx-auto">
          Get the latest articles and insights delivered directly to your inbox. Join hundreds of readers who stay updated with our content.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-grow px-4 py-3 rounded-lg text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button className="px-6 py-3 bg-white text-blue-600 dark:bg-gray-800 dark:text-blue-400 font-bold rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-white">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  )
}
