import { useState } from 'react'

const galleryImages = [
  {
    id: 1,
    alt: 'Gallery image 1 showing a modern office workspace with computers and plants',
    src: 'https://storage.googleapis.com/a1aa/image/3d086c6d-7445-4918-24a3-cf1bc4d0866f.jpg'
  },
  {
    id: 2,
    alt: 'Gallery image 2 showing a team collaborating in a bright meeting room',
    src: 'https://storage.googleapis.com/a1aa/image/d96e6db4-0409-463c-9f73-af29ed486144.jpg'
  },
  {
    id: 3,
    alt: 'Gallery image 3 showing a close-up of hands typing on a laptop keyboard',
    src: 'https://storage.googleapis.com/a1aa/image/a6da9072-90bd-4b02-2321-96b1e87f4aab.jpg'
  },
  {
    id: 4,
    alt: 'Gallery image 4 showing a creative brainstorming session with sticky notes on wall',
    src: 'https://storage.googleapis.com/a1aa/image/f811338e-8247-434a-82e9-62657c0de22c.jpg'
  },
  {
    id: 5,
    alt: 'Gallery image 5 showing a developer coding on multiple monitors',
    src: 'https://storage.googleapis.com/a1aa/image/aac576ff-98b0-41ad-25e3-aefdbc97f383.jpg'
  },
  {
    id: 6,
    alt: 'Gallery image 6 showing a modern office building exterior with glass facade',
    src: 'https://storage.googleapis.com/a1aa/image/eaf4c86d-71b1-4418-7c5c-9f09980f542c.jpg'
  },
  {
    id: 7,
    alt: 'Gallery image 7 showing a designer sketching UI wireframes on paper',
    src: 'https://storage.googleapis.com/a1aa/image/3bc4dc3f-de4a-4d23-744e-7206bfb9032d.jpg'
  },
  {
    id: 8,
    alt: 'Gallery image 8 showing a team celebrating success in office environment',
    src: 'https://storage.googleapis.com/a1aa/image/4a051994-e122-4f33-7c94-a53c6d5aa390.jpg'
  }
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div className="container mx-auto p-6">
      <section className="mb-16">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4 text-center animate-slide-up">
          Our Gallery
        </h1>
        <p className="text-center text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-12">
          Explore our project gallery showcasing our work, team, and office environments.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id} 
              onClick={() => setSelectedImage(image)}
              className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition duration-300 group animate-slide-up"
              style={{animationDelay: `${(index % 8) * 0.1}s`}}
            >
              <img 
                alt={image.alt} 
                className="rounded-lg shadow-md object-cover w-full h-48 group-hover:scale-110 transition duration-500" 
                src={image.src}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Modal for full image view */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full w-10 h-10 flex items-center justify-center transition duration-300"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  )
}
