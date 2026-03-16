import React from 'react'
import { REVIEWS } from '../constants'

function RevCard({ review }) {
  return (
    <div className="rev-card">
      <span style={{ color: '#D4AF37', letterSpacing: 2, fontSize: 13 }}>★★★★★</span>
      <p style={{ color: 'rgba(249,247,242,0.82)', fontFamily: 'Cormorant Garamond, serif', fontSize: 15.5, fontStyle: 'italic', lineHeight: 1.8, margin: '12px 0 16px' }}>
        "{review.text}"
      </p>
      <div style={{ borderTop: '1px solid rgba(212,175,55,0.12)', paddingTop: 12 }}>
        <div style={{ color: '#D4AF37', fontFamily: 'DM Mono, monospace', fontSize: 9, fontWeight: 500, letterSpacing: 2 }}>{review.author}</div>
        <div style={{ color: 'rgba(249,247,242,0.38)', fontFamily: 'DM Mono, monospace', fontSize: 8.5, marginTop: 3, letterSpacing: 1 }}>{review.role}</div>
      </div>
    </div>
  )
}

export default function Reviews() {
  return (
    <section id="proof" className="section" style={{ padding: 'clamp(70px,8vw,110px) 0' }}>
      <div style={{ textAlign: 'center', marginBottom: 52, padding: '0 clamp(20px,4vw,64px)' }}>
        <span className="label" style={{ textAlign: 'center' }}>BRONX FAMILIES SPEAK</span>
        <h2 className="h2">Their Peace of Mind.<br /><span style={{ color: '#D4AF37' }}>My Purpose.</span></h2>
      </div>
      {[REVIEWS.slice(0, 8), REVIEWS.slice(8, 16)].map((row, ri) => (
        <div key={ri} style={{ overflow: 'hidden', marginBottom: 18 }}>
          <div className={`ticker-track ticker-${ri === 0 ? 'l' : 'r'}`} style={{ display: 'flex', gap: 16, animationDuration: `${36 + ri * 10}s` }}>
            {[...row, ...row].map((r, i) => <RevCard key={i} review={r} />)}
          </div>
        </div>
      ))}
    </section>
  )
}
