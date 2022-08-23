import React from 'react'

function Footer() {
    return (
        <div className="bg-gray-200">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:py-6 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl sm:tracking-tight">
              <span className="block">Booksy</span>
              <span className="block text-indigo-600">Read For Free.</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="flex -space-x-2 overflow-hidden">
            <i className="fa-brands fa-facebook-f inline-block p-3 text-center rounded-full ring-1 ring-dark"></i>
            <i class="fa-brands fa-whatsapp inline-block p-3 text-center rounded-full ring-1 ring-dark"></i>
            <i class="fa-brands fa-twitter inline-block p-3 text-center rounded-full ring-1 ring-dark"></i>
            <i class="fa-brands fa-linkedin-in inline-block p-3 text-center rounded-full ring-1 ring-dark"></i>
            <i class="fa-brands fa-instagram inline-block p-3 text-center rounded-full ring-1 ring-dark"></i>
      </div>
            </div>
          </div>
        </div>
      )
}

export default Footer