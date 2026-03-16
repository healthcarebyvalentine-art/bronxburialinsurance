import React from 'react'
import { WHO_IS_THIS_FOR } from '../constants'
import { scrollTo } from '../utils/scroll'

export default function WhoIsThisFor() {
  return (
    <section className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="label" style={{ textAlign: 'center' }}>WHO I SERVE</span>
          <h2 className="h2">This Is for Your Family.<br /><span style={{ color: '#D4AF37' }}>Whoever That Means to You.</span></h2>
          <p style={{ color: 'rgba(249,247,242,0.45)', marginTop: 16, fontSize: 15, maxWidth: 520, margin: '16px auto 0', lineHeight: 1.85 }}>
            I have sat with seniors, adult children, and grieving spouses. Every conversation starts the same way — with honesty, patience, and no pressure.
          </p>
        </div>
        <div className="three-col">
          {WHO_IS_THIS_FOR.map((v) => (
            <div key={v.label} className="glass-card" style={{ padding: '38px 28px', textAlign: 'center' }}>
              <div style={{ fontSize: 48, marginBottom: 18 }}>{v.icon}</div>
              <div style={{ color: '#D4AF37', fontSize: 8.5, letterSpacing: 3.5, fontWeight: 600, fontFamily: 'DM Mono, monospace', marginBottom: 16 }}>{v.label}</div>
              <p style={{ color: 'rgba(249,247,242,0.62)', fontSize: 14.5, lineHeight: 1.9 }}>{v.desc}</p>
              <button className="btn-micro" onClick={() => scrollTo('contact')}>TALK TO ME →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
