import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blog'

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
