import React from 'react'

const TailwindDemo = () => {
  return (
    
    <div className="min-h-screen flex flex-col items-center justify-center gap-10 bg-gradient-to-br from-purple-700 via-pink-500 to-yellow-400 text-white dark:bg-gray-900 dark:text-gray-100 p-8">
      
      {/* Heading */}
      <h1 className="text-6xl font-extrabold tracking-tight drop-shadow-2xl">
        Tailwind Playground 🚀
      </h1>
      
      {/* Subheading */}
      <p className="text-xl md:text-2xl text-gray-200 dark:text-gray-300 max-w-xl text-center">
        Explore background gradients, shadows, responsive text, hover effects, and dark mode—all with Tailwind utilities!
      </p>
      
      {/* Button Group */}
      <div className="flex gap-4 flex-wrap justify-center">
        <button className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg font-semibold">
          Blue Button
        </button>
        <button className="px-6 py-3 rounded-xl bg-green-500 hover:bg-green-600 transition-all shadow-md font-semibold">
          Green Button
        </button>
        <button className="px-6 py-3 rounded-xl bg-yellow-400 hover:bg-yellow-500 transition transform hover:scale-105 font-bold shadow-lg text-gray-900">
          Yellow Button
        </button>
      </div>

      {/* Card Example */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 w-full max-w-6xl">
        {["Red", "Blue", "Green"].map((color) => (
          <div
            key={color}
            className={`p-6 rounded-2xl bg-${color.toLowerCase()}-500 text-white shadow-2xl hover:scale-105 transition-transform`}
          >
            <h2 className="text-2xl font-bold">{color} Card</h2>
            <p className="mt-2">This is a sample card using Tailwind utilities for background, text, shadow, and hover effects.</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-20 text-center text-gray-300 dark:text-gray-500">
        Made with ❤️ using Tailwind CSS
      </footer>
    </div>
  )
}

export default TailwindDemo
