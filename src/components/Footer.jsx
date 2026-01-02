export default function Footer() {
  return (
    <footer className="bg-blue-600 dark:bg-blue-700 text-white py-8 mt-auto">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold mb-2">My Tailwind App</h4>
            <p className="text-sm">&copy; 2024 My Tailwind App. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a aria-label="Facebook" href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition duration-300">
              <i className="fab fa-facebook-f fa-lg"></i>
            </a>
            <a aria-label="Twitter" href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition duration-300">
              <i className="fab fa-twitter fa-lg"></i>
            </a>
            <a aria-label="Instagram" href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition duration-300">
              <i className="fab fa-instagram fa-lg"></i>
            </a>
            <a aria-label="LinkedIn" href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition duration-300">
              <i className="fab fa-linkedin-in fa-lg"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
