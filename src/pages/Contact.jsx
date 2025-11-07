import React from 'react'

export default function Contact(){
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-extrabold mb-4">Contact</h1>

      <div className="bg-white p-6 rounded shadow">
        <p className="mb-4"><strong>Address:</strong> 402 Maitland Rd, Mayfield NSW 2304</p>
        <p className="mb-4"><strong>Hours:</strong> Wed–Sat 11:00AM - 08:30PM (Closed Sun–Tue)</p>

        <form className="grid gap-3 max-w-md">
          <input className="border p-2 rounded" placeholder="Name" />
          <input className="border p-2 rounded" placeholder="Email" />
          <textarea className="border p-2 rounded" rows="6" placeholder="Message"></textarea>
          <button type="button" className="btn-primary">Send</button>
        </form>
      </div>
    </div>
  )
}
