import { useParams, Link } from 'react-router-dom'
import { blogPosts } from '../data/blog'

export default function BlogDetail() {
  const { slug } = useParams()
  
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) {
    return (
      <div className="container mx-auto p-6">
        <section className="text-center py-16">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">Post Not Found</h1>
          <p className="text-gray-700 dark:text-gray-300 mb-8">Sorry, we couldn't find the blog post you're looking for.</p>
          <Link to="/blog" className="inline-block bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
            Back to Blog
          </Link>
        </section>
      </div>
    )
  }

  const relatedPosts = blogPosts.filter(p => p.slug !== post.slug && p.category === post.category).slice(0, 3)
  const otherPosts = blogPosts.filter(p => p.slug !== post.slug).slice(0, 3)
  const recommendedPosts = relatedPosts.length > 0 ? relatedPosts : otherPosts

  return (
    <div className="container mx-auto p-6">
      {/* Breadcrumb */}
      <div className="mb-8 text-sm">
        <Link to="/blog" className="text-blue-600 dark:text-blue-400 hover:underline">Blog</Link>
        <span className="text-gray-500 dark:text-gray-400 mx-2">/</span>
        <span className="text-gray-700 dark:text-gray-300">{post.title}</span>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto animate-fade-in">
        <header className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <span className="inline-block bg-blue-600 dark:bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-gray-500 dark:text-gray-400 text-sm">{post.date}</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">{post.title}</h1>
          <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-gray-100">{post.author}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Author</p>
              </div>
            </div>
            <div className="text-right text-sm text-gray-500 dark:text-gray-400">
              <p>Reading time: ~5 min</p>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-12 rounded-lg overflow-hidden shadow-lg animate-slide-up" style={{animationDelay: '0.1s'}}>
          <img 
            alt={post.title} 
            className="w-full h-96 object-cover" 
            src={post.image}
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg dark:prose-invert max-w-4xl mb-12 animate-slide-up" style={{animationDelay: '0.2s'}}>
          <div className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-8 whitespace-pre-wrap">
            {post.content}
          </div>

          {/* Sections */}
          {post.sections && (
            <div className="space-y-8 my-12">
              {post.sections.map((section, index) => (
                <div key={index} className="animate-slide-up" style={{animationDelay: `${(index + 3) * 0.1}s`}}>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">{section.title}</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{section.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Article Footer */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 pb-12 animate-slide-up" style={{animationDelay: '0.5s'}}>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">About the Author</h3>
              <p className="text-gray-700 dark:text-gray-300">By {post.author}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Published on {post.date}</p>
            </div>
            <Link to="/blog" className="mt-4 md:mt-0 inline-block bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
              Back to Blog
            </Link>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {recommendedPosts.length > 0 && (
        <section className="mt-16 border-t border-gray-200 dark:border-gray-700 pt-16 animate-slide-up" style={{animationDelay: '0.6s'}}>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8">Recommended Reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendedPosts.map((relatedPost, index) => (
              <Link key={relatedPost.slug} to={`/blog/${relatedPost.slug}`} className="group">
                <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 h-full animate-slide-up" style={{animationDelay: `${(index + 1) * 0.1}s`}}>
                  <div className="h-40 overflow-hidden">
                    <img 
                      alt={relatedPost.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500" 
                      src={relatedPost.image}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="inline-block bg-blue-600 dark:bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">
                        {relatedPost.category}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-xs">{relatedPost.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                      {relatedPost.excerpt}
                    </p>
                    <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm hover:underline">
                      Read More →
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 rounded-lg shadow-lg p-8 text-white text-center animate-slide-up" style={{animationDelay: '0.7s'}}>
        <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Get more articles like this delivered directly to your inbox. Join thousands of readers who stay updated with our latest content.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-grow px-4 py-3 rounded-lg text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button className="px-6 py-3 bg-white text-blue-600 dark:bg-gray-800 dark:text-blue-400 font-bold rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-white whitespace-nowrap">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  )
}
