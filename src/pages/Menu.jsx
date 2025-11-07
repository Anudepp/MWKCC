import React, { useState } from 'react'
import { motion } from 'framer-motion'
import menuData from '../data/menuData'

const tabs = [
  { key: 'kebabs', label: 'Kebabs' },
  { key: 'burgers', label: 'Burgers' },
  { key: 'snackPacks', label: 'Snack Packs' },
  { key: 'charcoalChicken', label: 'Charcoal Chicken' },
  { key: 'fromTheFryer', label: 'From The Fryer' },
  { key: 'saladsAndSauces', label: 'Salads & Sauces' },
  { key: 'drinks', label: 'Drinks' },
  { key: 'greekSouvlaGyros', label: 'Greek Souvla & Gyros' },
  { key: 'catering', label: 'Catering' }
]

export default function Menu(){
  const [active, setActive] = useState('kebabs')

  const renderItems = (data) => {
    if(!data) return <p>No data</p>

    // Standard items (like kebabs, burgers, etc.)
    if(data.items && Array.isArray(data.items)){
      return (
        <>
          {data.items.map((it, idx) => (
            <motion.div 
              key={idx} 
              initial={{opacity:0, y:8}} 
              animate={{opacity:1, y:0}} 
              transition={{delay: idx*0.02}} 
              className="bg-white p-4 rounded shadow mb-4"
            >
              <div className="flex justify-between">
                <div>
                  <div className="font-semibold">{it.name}</div>
                  {it.desc && <div className="text-sm text-gray-600 mt-1">{it.desc}</div>}
                  {it.note && <div className="text-xs text-yellow-700 mt-1">{it.note}</div>}
                </div>

                <div className="text-right text-sm">
                  {it.sizes ? it.sizes.map((s)=> <div key={s.label}>{s.label}: ${s.price.toFixed(2)}</div>) :
                   it.price ? <div className="font-semibold">${it.price.toFixed(2)}</div> :
                   it.prices ? Object.entries(it.prices).map(([k,v])=> <div key={k}>{k}: ${v.toFixed(2)}</div>) :
                   it.priceText ? <div>{it.priceText}</div> : null}
                </div>
              </div>
            </motion.div>
          ))}

          {/* ✅ Add Extras */}
          {data.extras && (
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-red-700 mb-2">Extras</h3>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                {data.extras.map((extra, idx) => (
                  <li key={idx} className="flex justify-between bg-gray-50 px-3 py-2 rounded-lg border border-gray-200">
                    <span>{extra.name}</span>
                    <span>{extra.price ? `$${extra.price.toFixed(2)}` : extra.priceText}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* ✅ Add Sauces */}
          {data.saucesAvailable && (
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-red-700 mb-2">Available Sauces</h3>
              <p className="text-sm text-gray-700">
                {data.saucesAvailable.join(', ')}
              </p>
            </div>
          )}

          {/* ✅ Add Gluten-Free Pitta */}
          {data.glutenFreePitta && (
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-red-700 mb-2">Gluten-Free Pitta</h3>
              <p className="text-sm text-gray-700">
                Available for an extra ${data.glutenFreePitta.price.toFixed(2)}
              </p>
            </div>
          )}
        </>
      )
    }

    // Snack packs or boxes
    if(data.prices || data.boxes){
      return (
        <div className="space-y-4">
          {data.prices && Object.keys(data.prices).map((meat)=>(
            <div key={meat} className="bg-white p-4 rounded shadow flex justify-between">
              <div><div className="font-semibold">{meat}</div><div className="text-sm text-gray-600">Sizes</div></div>
              <div className="text-right text-sm">{Object.entries(data.prices[meat]).map(([size,price])=> <div key={size}>{size}: ${price.toFixed(2)}</div>)}</div>
            </div>
          ))}

          {data.boxes && data.boxes.map((b,i)=> (
            <div key={i} className="bg-white p-4 rounded shadow">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-semibold">{b.name}</div>
                  {b.desc && <div className="text-sm text-gray-600">{b.desc}</div>}
                </div>
                <div className="text-right text-sm">
                  {b.prices && Object.entries(b.prices).map(([k,v])=> <div key={k}>{k}: ${v.toFixed(2)}</div>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      )
    }

    return <pre>{JSON.stringify(data,null,2)}</pre>
  }

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-extrabold mb-6 text-red-700">Menu</h1>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="flex flex-wrap md:flex-nowrap bg-gradient-to-r from-red-700 to-black text-white">
          {tabs.map(t=> (
            <button 
              key={t.key} 
              onClick={()=>setActive(t.key)} 
              className={`px-4 py-3 md:flex-1 text-sm font-semibold text-center ${active===t.key ? 'bg-black/20' : ''}`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="p-6 bg-gray-50">
          <motion.div 
            key={active} 
            initial={{opacity:0, y:6}} 
            animate={{opacity:1, y:0}} 
            transition={{duration:0.25}}
          >
            {renderItems(menuData[active])}
          </motion.div>
        </div>
      </div>
    </div>
  )
}