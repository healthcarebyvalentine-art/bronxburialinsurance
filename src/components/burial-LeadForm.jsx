import React, { useState } from 'react'
import { FORM_ENDPOINT, BOROUGHS, AGE_RANGES, COVERAGE_AMOUNTS } from '../constants'

export default function LeadForm() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', age: '', coverage: '', borough: '', forSelf: 'Myself', notes: '',
  })
  const [status, setStatus] = useState(null)
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = async () => {
    if (!form.name || !form.phone || !form.age || !form.coverage || !form.borough) {
      setStatus('validate')
      return
    }
    setStatus('sending')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...form, source: 'bronx-burial-insurance.com' }),
      })
      if (res.ok) setStatus('success')
      else setStatus('error')
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
    <div>
      <label className="f-label">Your Full Name *</label>
      <input className="f-input" placeholder="First and Last Name" value={form.name} onChange={set('name')} />

      <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <div>
          <label className="f-label">Phone Number *</label>
          <input className="f-input" style={{ marginBottom: 0 }} type="tel" placeholder="(718) 000-0000" value={form.phone} onChange={set('phone')} />
        </div>
        <div>
          <label className="f-label">Email Address</label>
          <input className="f-input" style={{ marginBottom: 0 }} type="email" placeholder="Optional" value={form.email} onChange={set('email')} />
        </div>
      </div>
      <div style={{ marginBottom: 12 }} />

      <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <div>
          <label className="f-label">Age Range *</label>
          <select className="f-input" style={{ marginBottom: 0 }} value={form.age} onChange={set('age')}>
            <option value="">Select Age</option>
            {AGE_RANGES.map((a) => <option key={a} value={a}>{a}</option>)}
          </select>
        </div>
        <div>
          <label className="f-label">Coverage Amount *</label>
          <select className="f-input" style={{ marginBottom: 0 }} value={form.coverage} onChange={set('coverage')}>
            <option value="">Select Amount</option>
            {COVERAGE_AMOUNTS.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>
      <div style={{ marginBottom: 12 }} />

      <label className="f-label">Borough *</label>
      <select className="f-input" value={form.borough} onChange={set('borough')}>
        <option value="">Select Borough</option>
        {BOROUGHS.map((b) => <option key={b} value={b}>{b}</option>)}
      </select>

      <label className="f-label">Coverage Is For</label>
      <select className="f-input" value={form.forSelf} onChange={set('forSelf')}>
        <option value="Myself">Myself</option>
        <option value="My Parent">My Parent</option>
        <option value="My Spouse">My Spouse</option>
        <option value="Other Family Member">Other Family Member</option>
      </select>

      <label className="f-label">Anything I Should Know?</label>
      <input className="f-input" placeholder="Health conditions, previous denials, questions..." value={form.notes} onChange={set('notes')} />

      {status === 'validate' && (
        <p style={{ color: '#ff6b6b', fontSize: 11, fontFamily: 'DM Mono, monospace', marginBottom: 10 }}>
          ⚠ Please complete all required fields (*)
        </p>
      )}
      {status === 'error' && (
        <p style={{ color: '#ff6b6b', fontSize: 11, fontFamily: 'DM Mono, monospace', marginBottom: 10 }}>
          ⚠ Submission error — please try again shortly.
        </p>
      )}

      <button
        className="btn-primary"
        onClick={submit}
        disabled={status === 'sending'}
        style={{ width: '100%', justifyContent: 'center', marginTop: 4, padding: '16px 0', fontSize: 10 }}
      >
        {status === 'sending' ? 'SENDING YOUR INFORMATION...' : '✝ GET MY FREE COVERAGE QUOTE'}
      </button>

      <p style={{ color: 'rgba(249,247,242,0.28)', fontSize: 8.5, textAlign: 'center', marginTop: 10, fontFamily: 'DM Mono, monospace', letterSpacing: 1 }}>
        NO OBLIGATION · I NEVER SELL YOUR DATA · NY § 2119
      </p>
    </div>
  )
}
