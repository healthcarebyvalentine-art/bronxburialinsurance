import React from 'react'
import { scrollTo } from '../utils/scroll'
import { useCounter } from '../hooks/useCounter'
import LeadForm from './LeadForm'

function StatBox({ target, prefix = '', suffix = '', label }) {
  const [val, ref] = useCounter(target)
  return (
    <div ref={ref}>
      <div style={{ color: '#D4AF37', fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(30px,3vw,44px)', fontWeight: 700, lineHeight: 1 }}>
        {prefix}{val.toLocaleString()}{suffix}
      </div>
      <div style={{ color: 'rgba(249,247,242,0.35)', fontSize: 8, letterSpacing: 3.5, marginTop: 6, fontWeight: 600, fontFamily: 'DM Mono, monospace' }}>
        {label}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="grid-bg" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: 80 }}>

      <div style={{ position: 'absolute', top: '35%', left: '40%', width: 900, height: 900, borderRadius: '50%', background: 'radial-gradient(circle,rgba(212,175,55,0.05) 0%,transparent 65%)', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 0, right: 0, width: 400, height: 400, background: 'radial-gradient(circle at top right,rgba(212,175,55,0.04),transparent 70%)', pointerEvents: 'none' }} />

      <div className="container hero-grid-wrap" style={{ padding: '40px clamp(20px,4vw,64px)', width: '100%', display: 'grid', gridTemplateColumns: '1fr 440px', gap: 'clamp(40px,5vw,100px)', alignItems: 'center' }}>

        {/* LEFT */}
        <div>
          <div className="fade-up" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(212,175,55,0.07)', border: '1px solid rgba(212,175,55,0.25)', borderRadius: 2, padding: '8px 18px', marginBottom: 32 }}>
            <span style={{ color: '#D4AF37', fontSize: 8.5, letterSpacing: 3.5, fontWeight: 600, fontFamily: 'DM Mono, monospace' }}>
              ✝ ORDAINED MINISTER · NY LICENSED FIDUCIARY
            </span>
          </div>

          <h1 className="fade-up-1" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(40px,5.5vw,78px)', fontWeight: 700, lineHeight: 1.05, marginBottom: 28, color: '#F9F7F2' }}>
            I'll Make Sure Your Family<br />
            Never Has to <em style={{ color: '#D4AF37' }}>Pass a Hat.</em>
          </h1>

          <p className="fade-up-2" style={{ fontSize: 16, lineHeight: 1.95, color: 'rgba(249,247,242,0.68)', maxWidth: 560, marginBottom: 24, fontWeight: 300 }}>
            A Bronx burial costs between $8,000 and $15,000. I provide whole life insurance designed specifically to cover that cost — up to $30,000, with a premium locked for life that will never increase.
          </p>

          <p className="fade-up-2" style={{ fontSize: 16, lineHeight: 1.95, color: 'rgba(249,247,242,0.68)', maxWidth: 560, marginBottom: 40, fontWeight: 300 }}>
            I am Rev. Valentine Saint Martin — Ordained Minister, FBI Fingerprinted, NY Licensed Fiduciary. I personally handle every policy I write. No call centers. No junior agents. Just 20 years of experience and a pastor's commitment to your family.
          </p>

          <div className="fade-up-3 cta-row" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 56 }}>
            <button className="btn-primary" onClick={() => scrollTo('contact')}>✝ GET MY FREE COVERAGE QUOTE</button>
            <button className="btn-ghost" onClick={() => scrollTo('about')}>MY STORY →</button>
          </div>

          <div className="fade-up-4 stat-row" style={{ display: 'flex', gap: 56 }}>
            <StatBox target={30000} prefix="$" suffix="+" label="MAX COVERAGE" />
            <StatBox target={20} suffix=" YRS" label="MY EXPERIENCE" />
            <StatBox target={16} suffix="+" label="5-STAR REVIEWS" />
          </div>
        </div>

        {/* RIGHT — FORM */}
        <div className="fade-up-2 hero-form" style={{ background: 'rgba(212,175,55,0.03)', border: '1px solid rgba(212,175,55,0.2)', borderRadius: 4, padding: '36px 30px', boxShadow: '0 48px 100px rgba(0,0,0,0.7), inset 0 1px 0 rgba(212,175,55,0.1)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
          <div style={{ textAlign: 'center', marginBottom: 24 }}>
            <span className="label" style={{ textAlign: 'center' }}>FREE COVERAGE QUOTE</span>
            <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 24, fontWeight: 700, lineHeight: 1.25, color: '#F9F7F2' }}>
              Let Me Protect<br /><span style={{ color: '#D4AF37' }}>Your Family's Tomorrow.</span>
            </h3>
            <p style={{ color: 'rgba(249,247,242,0.4)', fontSize: 11, marginTop: 8, fontFamily: 'DM Mono, monospace' }}>
              NO MEDICAL EXAM · NO OBLIGATION · I RESPOND PERSONALLY
            </p>
          </div>
          <LeadForm />
        </div>
      </div>
    </section>
  )
}
