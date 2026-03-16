import React from 'react'
import { scrollTo } from '../utils/scroll'

const LINKS = [
  ['ABOUT ME',   'about'],
  ['THE COST',   'cost'],
  ['MY PROCESS', 'process'],
  ['FAQ',        'faq'],
  ['CONTACT',    'contact'],
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{ background: '#030303', borderTop: '1px solid rgba(212,175,55,0.1)', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1300, margin: '0 auto', padding: '48px clamp(20px,4vw,64px) 32px' }}>
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 40, alignItems: 'start' }}>

          {/* Brand */}
          <div>
            <div style={{ color: '#D4AF37', fontSize: 11, letterSpacing: 4, fontWeight: 600, fontFamily: 'DM Mono, monospace', marginBottom: 8 }}>
              BRONX BURIAL INSURANCE
            </div>
            <div style={{ color: 'rgba(249,247,242,0.25)', fontSize: 8.5, letterSpacing: 2, fontFamily: 'DM Mono, monospace', marginBottom: 16, lineHeight: 1.7 }}>
              REV. VALENTINE SAINT MARTIN<br />
              ORDAINED MINISTER · NY LICENSED FIDUCIARY
            </div>
            <p style={{ color: 'rgba(249,247,242,0.38)', fontSize: 12.5, lineHeight: 1.8, maxWidth: 280 }}>
              I personally provide whole life insurance designed to cover burial and final expenses for Bronx families and all five NYC boroughs.
            </p>
            <div style={{ marginTop: 20 }}>
              <a
                href="https://healthinsurancebenefitsbyvalentinesaintmartin.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'rgba(212,175,55,0.5)', fontSize: 8.5, fontFamily: 'DM Mono, monospace', letterSpacing: 2, textDecoration: 'none' }}
              >
                MY MAIN PRACTICE →
              </a>
            </div>
          </div>

          {/* Nav */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'center' }}>
            {LINKS.map(([label, id]) => (
              <button key={id} className="nav-link" onClick={() => scrollTo(id)} style={{ fontSize: 8.5 }}>{label}</button>
            ))}
          </div>

          {/* Right */}
          <div style={{ textAlign: 'right' }}>
            <div style={{ color: '#D4AF37', fontSize: 9, letterSpacing: 3, fontWeight: 600, fontFamily: 'DM Mono, monospace', marginBottom: 10 }}>
              SERVING ALL 5 NYC BOROUGHS
            </div>
            <div style={{ color: 'rgba(249,247,242,0.28)', fontSize: 10, lineHeight: 1.9 }}>
              Bronx · Manhattan · Brooklyn<br />
              Queens · Staten Island
            </div>
            <div style={{ marginTop: 20, color: 'rgba(249,247,242,0.2)', fontSize: 9.5, fontFamily: 'DM Mono, monospace', lineHeight: 1.8 }}>
              Ordained Minister<br />
              NY State Licensed<br />
              FBI Fingerprinted<br />
              § 2119 Compliant
            </div>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(212,175,55,0.07)', padding: '16px clamp(20px,4vw,64px)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
        <div style={{ color: 'rgba(249,247,242,0.2)', fontSize: 10, fontFamily: 'DM Mono, monospace' }}>
          © {year} Bronx Burial Insurance by Valentine Saint Martin. All rights reserved.
        </div>
        <div style={{ color: 'rgba(249,247,242,0.2)', fontSize: 10, fontFamily: 'DM Mono, monospace' }}>
          bronx-burial-insurance.com
        </div>
      </div>
    </footer>
  )
}
