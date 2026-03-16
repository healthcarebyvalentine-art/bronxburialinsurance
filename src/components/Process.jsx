import React from 'react'
import { PROCESS_STEPS } from '../constants'
import { scrollTo } from '../utils/scroll'

export default function Process() {
  return (
    <section id="process" className="section" style={{ background: 'linear-gradient(135deg,rgba(212,175,55,0.06),rgba(5,5,5,0.98))', borderTop: '1px solid rgba(212,175,55,0.12)', borderBottom: '1px solid rgba(212,175,55,0.12)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <span className="label" style={{ textAlign: 'center' }}>HOW I WORK WITH YOU</span>
        <h2 className="h2" style={{ marginBottom: 20 }}>Simple. Honest. Personal.</h2>
        <p style={{ color: 'rgba(249,247,242,0.52)', fontSize: 15, lineHeight: 1.9, maxWidth: 600, margin: '0 auto 60px' }}>
          I designed this process for busy families and seniors who deserve straightforward answers — not confusing paperwork or high-pressure sales calls.
        </p>

        <div className="four-col" style={{ marginBottom: 56 }}>
          {PROCESS_STEPS.map((s) => (
            <div key={s.n} style={{ padding: '0 8px' }}>
              <div style={{ color: '#D4AF37', fontFamily: 'Cormorant Garamond, serif', fontSize: 58, fontWeight: 700, opacity: 0.18, lineHeight: 1, marginBottom: 10 }}>{s.n}</div>
              <div style={{ color: '#D4AF37', fontSize: 9, letterSpacing: 3, fontWeight: 600, fontFamily: 'DM Mono, monospace', marginBottom: 12 }}>{s.t}</div>
              <p style={{ color: 'rgba(249,247,242,0.55)', fontSize: 13.5, lineHeight: 1.85 }}>{s.d}</p>
            </div>
          ))}
        </div>

        <div style={{ background: 'rgba(212,175,55,0.05)', border: '1px solid rgba(212,175,55,0.18)', borderRadius: 4, padding: '20px 32px', maxWidth: 680, margin: '0 auto 40px', display: 'inline-block' }}>
          <p style={{ color: 'rgba(249,247,242,0.55)', fontSize: 12, fontFamily: 'DM Mono, monospace', lineHeight: 1.8 }}>
            ⚖ DISCLOSURE: The policy I provide is a whole life insurance product. All terms, including any waiting periods or graded benefit structures, are disclosed in full before any application is submitted. NY Insurance Law § 2119.
          </p>
        </div>

        <div>
          <button className="btn-primary" onClick={() => scrollTo('contact')}>
            ✝ START MY FREE QUOTE
          </button>
        </div>
      </div>
    </section>
  )
}
