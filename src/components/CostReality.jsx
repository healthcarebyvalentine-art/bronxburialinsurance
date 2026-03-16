import React from 'react'
import { COST_BREAKDOWN } from '../constants'
import { scrollTo } from '../utils/scroll'

export default function CostReality() {
  return (
    <section id="cost" className="section section-alt">
      <div className="container">
        <div className="two-col" style={{ alignItems: 'start' }}>

          {/* LEFT — Cost table */}
          <div>
            <span className="label">THE REALITY</span>
            <h2 className="h2">The Bill Your Family<br />Will Face Without You.</h2>
            <div className="divider" />
            <p className="body-text" style={{ marginBottom: 36 }}>
              This is not a scare tactic. This is what a Bronx family faces within days of losing someone they love — before the grief has had a chance to settle. I have seen it. I have sat in those rooms. This is why I do this work.
            </p>

            <div style={{ border: '1px solid rgba(212,175,55,0.18)', borderRadius: 4, overflow: 'hidden', marginBottom: 24 }}>
              {COST_BREAKDOWN.map((row, i) => (
                <div key={row.item} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '14px 20px',
                  background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent',
                  borderBottom: i < COST_BREAKDOWN.length - 1 ? '1px solid rgba(212,175,55,0.08)' : 'none',
                }}>
                  <span style={{ color: 'rgba(249,247,242,0.72)', fontSize: 14 }}>{row.item}</span>
                  <span style={{ color: '#D4AF37', fontFamily: 'DM Mono, monospace', fontSize: 12, fontWeight: 500 }}>{row.range}</span>
                </div>
              ))}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 20px', background: 'rgba(212,175,55,0.08)', borderTop: '1px solid rgba(212,175,55,0.25)' }}>
                <span style={{ color: '#F9F7F2', fontSize: 14, fontWeight: 700 }}>Total Family Exposure</span>
                <span style={{ color: '#D4AF37', fontFamily: 'DM Mono, monospace', fontSize: 13, fontWeight: 700 }}>$11,650 – $23,800</span>
              </div>
            </div>

            <p style={{ color: 'rgba(249,247,242,0.35)', fontSize: 11, fontFamily: 'DM Mono, monospace', lineHeight: 1.75 }}>
              Premiums vary by age, health, and coverage amount. Contact me for your personal quote.
            </p>
          </div>

          {/* RIGHT — Solution */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div className="glass-card" style={{ padding: '36px 32px', borderTop: '2px solid #D4AF37' }}>
              <div style={{ fontSize: 42, marginBottom: 16, textAlign: 'center' }}>🛡</div>
              <div style={{ color: '#D4AF37', fontSize: 9, letterSpacing: 3.5, fontWeight: 600, fontFamily: 'DM Mono, monospace', textAlign: 'center', marginBottom: 18 }}>
                MY WHOLE LIFE POLICY
              </div>
              {[
                'Whole life insurance — permanent, never expires',
                'Coverage up to $30,000',
                'Premium locked for life — never increases',
                'No medical exam required',
                'Cash value builds over time',
                'Tax-free benefit paid to your family',
                'I personally walk your family through the claim',
              ].map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 12 }}>
                  <span style={{ color: '#D4AF37', fontSize: 10, marginTop: 4, flexShrink: 0 }}>✦</span>
                  <span style={{ color: 'rgba(249,247,242,0.78)', fontSize: 14, lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
              <button className="btn-primary" onClick={() => scrollTo('contact')} style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}>
                GET MY FREE QUOTE
              </button>
            </div>

            <div style={{ background: 'rgba(212,175,55,0.04)', border: '1px solid rgba(212,175,55,0.15)', borderRadius: 4, padding: '18px 22px' }}>
              <div style={{ color: '#D4AF37', fontSize: 8, letterSpacing: 3, fontWeight: 600, fontFamily: 'DM Mono, monospace', marginBottom: 8 }}>⚖ FULL DISCLOSURE</div>
              <p style={{ color: 'rgba(249,247,242,0.5)', fontSize: 12, lineHeight: 1.8 }}>
                The product I provide is a traditional whole life insurance policy. I disclose all policy terms, waiting periods, and graded benefit structures before any application is submitted. I operate under NY Insurance Law § 2119 — your interests always come first.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
