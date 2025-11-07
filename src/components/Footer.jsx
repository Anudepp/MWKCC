import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-gray-50 border-t mt-8">
      <div className="container py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-semibold">Mayfield West Kebabs & Charcoal Chicken</h4>
          <p className="text-sm text-gray-600 mt-2">402 Maitland Rd, Mayfield NSW 2304</p>
          <p className="text-sm text-gray-600 mt-1">Hours: Wed–Sat 11:00AM - 08:30PM (Closed Sun–Tue)</p>
        </div>

        <div>
          <h5 className="font-semibold">Connect</h5>
          <ul className="mt-2 text-sm text-gray-600">
            <li><a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="https://www.facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold">Contact</h5>
          <p className="text-sm text-gray-600 mt-2">Phone: (see live site)</p>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 py-3 border-t">
        © {new Date().getFullYear()} Mayfield West Kebabs & Charcoal Chicken
      </div>
    </footer>
  )
}
