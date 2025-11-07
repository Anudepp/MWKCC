import React from 'react'

const ORDER_URL = 'https://tcpsvr121.clickpos.net'

export default function OrderOnline(){
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-extrabold mb-4">Order Online</h1>
      <div className="bg-white p-6 rounded shadow">
        <p>The online ordering is handled by our trusted partner. Click the button below to order.</p>
        <a href={ORDER_URL} target="_blank" rel="noopener noreferrer" className="btn-primary mt-4 inline-block">Open Ordering Site</a>
      </div>
    </div>
  )
}
