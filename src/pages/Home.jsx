import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Home(){
  return (
    <div className="container py-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <motion.h1 initial={{y:10, opacity:0}} animate={{y:0, opacity:1}} className="text-4xl font-extrabold mb-4">Mayfield West Kebabs & Charcoal Chicken</motion.h1>
          <p className="text-gray-700 mb-6">Three generations secret recipes made in-house — kebabs, charcoal chicken and more. Fresh, tasty, fast.</p>
          <div className="flex gap-3">
            <Link to="/menu" className="btn-primary inline-block">VIEW MENU</Link>
            <a href="/order-online" className="inline-block px-4 py-2 border rounded-md">ORDER ONLINE</a>
          </div>
        </div>

        <div>
          <div className="w-full h-72 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
            Hero image placeholder
          </div>
        </div>
      </div>

      <section className="mt-10 grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-xl shadow">
          <h4 className="font-semibold mb-2">Freshly cooked</h4>
          <p className="text-sm text-gray-600">Prepared fresh daily with quality ingredients.</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow">
          <h4 className="font-semibold mb-2">Takeaway & Delivery</h4>
          <p className="text-sm text-gray-600">Order online or pick up in-store.</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow">
          <h4 className="font-semibold mb-2">Family recipes</h4>
          <p className="text-sm text-gray-600">Three generations of flavor.</p>
        </div>
      </section>
    </div>
  )
}
