import React from 'react'

export default function Gallery(){
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-extrabold mb-4">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="h-48 bg-gray-100 rounded flex items-center justify-center">Image</div>
        <div className="h-48 bg-gray-100 rounded flex items-center justify-center">Image</div>
        <div className="h-48 bg-gray-100 rounded flex items-center justify-center">Image</div>
      </div>
    </div>
  )
}
