import React, { useState } from 'react'
import { BOROUGHS, AGE_RANGES, COVERAGE_AMOUNTS } from '../constants'

export default function LeadForm() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    const formData = new FormData(e.target)

    try {
      const res = await fetch('https://formspree.io/f/meerrvpe', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') return (
    <div style={{ textAlign: 'center', padding: '40px 16px' }}>
      <div style={{ fontSize: 52, marginBottom: 14 }}>🕊</div>
      <h3 style={{ color: '#D4AF37', fontFamily: 'Cormorant Garamond, serif', fontSize: 26, marginBottom: 10, fontWeight: 700 }}>
        I Received Your Information.
      </h3>
      <p style={{ color: 'rgba(249,247,242,0.72)', fontSize: 15, lineHeight: 1.9 }}>
        I will personally reach out to you within 24 hours.<br />
        Thank you for trusting me with something this important.
      </p>
      <p style={{ color: 'rgba(249,247,242,0.35)', fontSize: 11, marginTop: 16, fontFamily: 'DM Mono, monospace' }}>
        — Rev. Valentine Saint Martin
      </p>
    </div>
  )

  return (
    <form onSubmit={handleSubmit}>
      <input type="hidden" name="source" value="bronx-burial-insurance" />

      <label className="f-label">Your Full Name *</label>
      <input className="f-input" name="name" placeholder="First and Last Name" required />

      <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <div>
          <label className="f-label">Phone Number *</label>
          <input className="f-input" style={{ marginBottom: 0 }} name="phone" type="tel" placeholder="(718) 000-0000" required />
        </div>
        <div>
          <label className="f-label">Email Address</label>
          <input className="f-input" style={{ marginBottom: 0 }} name="email" type="email" placeholder="Optional" />
        </div>
      </div>
      <div style={{ marginBottom: 12 }} />

      <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <div>
          <label className="f-label">Age Range *</label>
