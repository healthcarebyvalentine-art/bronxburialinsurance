import React from 'react'
import LeadForm from './LeadForm'

export default function Contact() {
  return (
    <section id="contact" className="section" style={{ background: 'linear-gradient(180deg,#050505,rgba(212,175,55,0.05),#050505)' }}>
      <div className="container">
        <div className="two-col" style={{ alignItems: 'start' }}>

          {/* LEFT */}
          <div>
            <span className="label">LET'S TALK</span>
            <h2 className="h2">
              One Conversation.<br />
              <span style={{ color: '#D4AF37' }}>A Lifetime of Protection.</span>
            </h2>
            <div className="divider" />

            <p className="body-text" style={{ marginBottom: 32 }}>
              I personally respond to every inquiry — usually within 24 hours. There is no sales script, no pressure, and no obligation. Just an honest conversation between you and me about what your family needs and what I can provide.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 22, marginBottom: 36 }}>
              {[
                { icon: '✝', title: 'I Respond As a Pastor and a Professional', desc: 'My Reverend title is not marketing. It is a commitment. I approach every family with the same care I bring to pastoral work.' },
                { icon: '🔏', title: 'Your Information Is Protected', desc: 'As your fiduciary, I am legally obligated to protect your information. I never sell your data or share it with third parties.' },
                { icon: '⚖', title: 'Full Disclosure Before Any Application', desc: 'I disclose every policy term, every waiting period, and every detail before you sign anything. No surprises. Ever.' },
              ].map((item) => (
                <div key={item.title} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', border: '1px solid rgba(212,175,55,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0, background: 'rgba(212,175,55,0.04)' }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ color: '#D4AF37', fontSize: 9, letterSpacing: 2.5, fontWeight: 600, fontFamily: 'DM Mono, monospace', marginBottom: 5 }}>{item.title}</div>
                    <p style={{ color: 'rgba(249,247,242,0.55)', fontSize: 13.5, lineHeight: 1.8 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Cross-link to parent site */}
            <div style={{ background: 'rgba(212,175,55,0.04)', border: '1px solid rgba(212,175,55,0.15)', borderRadius: 4, padding: '18px 22px' }}>
              <div style={{ color: '#D4AF37', fontSize: 8, letterSpacing: 3, fontWeight: 600, fontFamily: 'DM Mono, monospace', marginBottom: 8 }}>
                🏛 LOOKING FOR BROADER COVERAGE?
              </div>
              <p style={{ color: 'rgba(249,247,242,0.5)', fontSize: 12, lineHeight: 1.8, marginBottom: 10 }}>
                I also provide income protection, disability, critical illness, and full wealth planning for healthcare workers and small business owners across NYC.
              </p>
              <a
                href="https://healthinsurancebenefitsbyvalentinesaintmartin.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#D4AF37', fontSize: 9, letterSpacing: 2.5, fontFamily: 'DM Mono, monospace', fontWeight: 600, textDecoration: 'none' }}
              >
                VISIT MY MAIN PRACTICE →
              </a>
            </div>
          </div>

          {/* RIGHT — FORM */}
          <div style={{ background: 'rgba(212,175,55,0.04)', border: '1px solid rgba(212,175,55,0.2)', borderRadius: 4, padding: '38px 32px', boxShadow: '0 40px 100px rgba(0,0,0,0.7), var(--glow)' }}>
            <div style={{ textAlign: 'center', marginBottom: 24 }}>
              <span className="label" style={{ textAlign: 'center' }}>FREE COVERAGE QUOTE</span>
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 24, fontWeight: 700, lineHeight: 1.25, color: '#F9F7F2' }}>
                Protect Your Family.<br /><span style={{ color: '#D4AF37' }}>I Handle Everything Personally.</span>
              </h3>
            </div>
            <LeadForm />
          </div>

        </div>
      </div>
    </section>
  )
}
