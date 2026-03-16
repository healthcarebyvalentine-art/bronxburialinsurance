import React from 'react'
import { scrollTo } from '../utils/scroll'

const QUOTES = [
  `"I became a minister because I believe every life deserves dignity. I became a fiduciary because I believe every family deserves protection."`,
  `"The bill doesn't wait for grief to finish. I make sure your family is never handed that bill."`,
  `"Twenty years ago I sat with a widow who had nothing. That moment is why I do this work."`,
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="two-col">
          {/* LEFT */}
          <div>
            <span className="label">MY STORY</span>
            <h2 className="h2">I Am Rev. Valentine<br />Saint Martin.</h2>
            <div className="divider" />

            <p className="body-text" style={{ marginBottom: 20 }}>
              I carry two callings. As an <span style={{ color: '#D4AF37', fontWeight: 600 }}>Ordained Minister</span>, I have sat with families in their most vulnerable moments — at bedsides, at gravesites, and in the silence that follows loss. I know what grief looks like when it is compounded by financial burden. I have seen it too many times.
            </p>

            <p className="body-text" style={{ marginBottom: 20 }}>
              As a <span style={{ color: '#D4AF37', fontWeight: 600 }}>NY Licensed Fiduciary</span> — FBI Fingerprinted, operating under NY Insurance Law § 2119 — I have spent 20 years mastering the mechanics of insurance so that families like yours never have to. I know how carriers think. I know what policies protect and what policies fail. And I know how to make sure your family is never left holding a bill they cannot pay.
            </p>

            <p className="body-text" style={{ marginBottom: 32 }}>
              I personally write every policy. I personally walk every family through the process. When your family needs to file a claim, they call me — not a 1-800 number. That is my commitment, and it comes from both my license and my collar.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 20px', marginBottom: 32 }}>
              {['Ordained Minister', 'FBI Fingerprinted', 'NY State Licensed', 'Solo Fiduciary', '20 Yrs Experience', '§ 2119 Compliant'].map((b) => (
                <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ color: '#D4AF37', fontSize: 10 }}>✦</span>
                  <span style={{ fontSize: 12, fontWeight: 500, color: 'rgba(249,247,242,0.75)', fontFamily: 'DM Mono, monospace' }}>{b}</span>
                </div>
              ))}
            </div>

            <button className="btn-primary" onClick={() => scrollTo('contact')}>
              SPEAK WITH ME PERSONALLY →
            </button>
          </div>

          {/* RIGHT — Quotes */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {QUOTES.map((q, i) => (
              <div key={i} className="glass-card" style={{
                padding: '24px 28px',
                background: i === 1 ? 'rgba(212,175,55,0.09)' : 'rgba(212,175,55,0.03)',
                border: `1px solid rgba(212,175,55,${i === 1 ? '0.4' : '0.15'})`,
                boxShadow: i === 1 ? 'var(--glow)' : 'none',
                marginLeft: i === 1 ? 24 : 0,
              }}>
                <div style={{ color: '#D4AF37', fontSize: 28, fontFamily: 'Cormorant Garamond, serif', lineHeight: 0.7, marginBottom: 10 }}>"</div>
                <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 16, fontStyle: 'italic', lineHeight: 1.75, color: '#F9F7F2' }}>
                  {q.slice(1)}
                </p>
                <div style={{ color: '#D4AF37', fontSize: 8, letterSpacing: 3, marginTop: 14, fontWeight: 500, fontFamily: 'DM Mono, monospace' }}>
                  — REV. VALENTINE SAINT MARTIN
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
