"use client";
import Link from 'next/link';
import React from 'react'

export default function notFound() {
  return (
    <>
     <div className="min-h-screen flex items-center justify-center w-full">
      <div className="bg-white p-8 rounded-md shadow-lg max-w-md w-full">
        <div className="text-center">
          <svg
            className="text-red-500 h-12 w-12 mb-4 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-18-18M8 4h13M8 11h7M4 14h7"
            ></path>
          </svg>
          <h1 className="text-3xl font-extrabold text-red-600 mb-4">Oops! <br /> 404 Resource Not Found</h1>
          <p className="text-gray-800 mb-4">
            We encountered an unexpected error. Our team has been notified.
          </p>
          <p className="text-gray-600 mb-8">
            Please try again later or contact support if the problem persists.
          </p>
          <div className="flex flex-row gap-3 items-center justify-center">
          <button
            onClick={() => window.location.reload()}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-full focus:outline-none transition duration-300"
          >
            Refresh
          </button>
          <Link href="/" className="bg-transparent hover:bg-[rgba(0,0,0,0.1)] text-gray-600 font-semibold py-2 px-6 rounded-full focus:outline-none transition duration-300">Go Back</Link>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
