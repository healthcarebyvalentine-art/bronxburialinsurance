import React, { useState } from 'react'
import { FAQS } from '../constants'

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(index === 0)
  return (
    <div style={{ background: 'rgba(212,175,55,0.025)', border: '1px solid rgba(212,175,55,0.14)', borderLeft: '2px solid #D4AF37', borderRadius: 4, marginBottom: 14, overflow: 'hidden' }}>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', padding: '20px 26px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, textAlign: 'left' }}
      >
        <span style={{ color: '#F9F7F2', fontFamily: 'Cormorant Garamond, serif', fontSize: 18, fontStyle: 'italic', lineHeight: 1.35 }}>
          {faq.q}
        </span>
        <span style={{ color: '#D4AF37', fontSize: 22, flexShrink: 0, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s', lineHeight: 1 }}>+</span>
      </button>
      {open && (
        <div style={{ padding: '0 26px 22px' }}>
          <p style={{ color: 'rgba(249,247,242,0.68)', fontSize: 14.5, lineHeight: 1.9 }}>{faq.a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="section section-alt">
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 clamp(20px,4vw,64px)' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <span className="label" style={{ textAlign: 'center' }}>HONEST ANSWERS</span>
          <h2 className="h2">Questions I Hear<br /><span style={{ color: '#D4AF37' }}>From Every Family.</span></h2>
          <p style={{ color: 'rgba(249,247,242,0.4)', marginTop: 16, fontSize: 14, lineHeight: 1.8 }}>
            I believe you deserve straight answers before you make any decision. No fine print. No surprises.
          </p>
        </div>
        {FAQS.map((faq, i) => (
          <FAQItem key={i} faq={faq} index={i} />
        ))}
      </div>
    </section>
  )
}
