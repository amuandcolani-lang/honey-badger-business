'use client'
import {useState} from 'react'
const cards=[
 ['Till','Fast sales, barcode scanning, MT/Empty and split payments.'],
 ['Products & Stock','Products, suppliers, receiving and audited stock movements.'],
 ['Money','Expenses, salaries and Cash / Card / Transfer tracking.'],
 ['Business Performance','Revenue, gross profit, estimated net profit and business health.'],
 ['Staff','Owner and staff access with outlet permissions.'],
 ['Subscription','14-day trial, renewal status and expiry protection.']
]
export default function Home(){
 const [role,setRole]=useState('Owner')
 return <main>
  <header><div className="logo">HB</div><div><h1>Honey Badger Business</h1><p>Your business, all in one place.</p></div></header>
  <section className="hero"><span className="pill">NEW FOUNDATION</span><h2>Simple business control.<br/>Built to last.</h2><p>Independent PWA foundation for Honey Badger Business, ready to connect to the existing Supabase Business Management Platform.</p>
  <div className="roles">{['Owner','Staff','Super Admin'].map(x=><button key={x} className={role===x?'active':''} onClick={()=>setRole(x)}>{x}</button>)}</div>
  <div className="notice">Current view: <b>{role}</b></div></section>
  <section className="grid">{cards.map(([a,b])=><article key={a}><h3>{a}</h3><p>{b}</p><button>Open</button></article>)}</section>
  <footer>Honey Badger Business • PWA-ready foundation</footer>
 </main>
}
