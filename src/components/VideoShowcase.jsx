import React, { useState } from 'react'
import Reveal from './Reveal'

const categories = ['all', 'cinematic', 'action', 'commercial', 'artistic']

function ReelRow({ reel, onOpen, reverse }) {
  return (
    <div className={`showcase-row ${reverse ? 'showcase-row--reverse' : ''}`}>
      <div className="showcase-row-text">
        <div className="reel-cat">{reel.category}</div>
        <h3 className="reel-title">{reel.title}</h3>
        <p className="reel-desc">{reel.desc}</p>
        <div className="reel-meta-row">
          {reel.meta.map(m => <span key={m} className="reel-meta">{m}</span>)}
        </div>
        <button
          className="reel-watch-btn"
          onClick={() => onOpen(reel.video, reel.title, reel.desc)}
        >
          Watch Reel
        </button>
      </div>
      <div className="showcase-row-visual">
        <video autoPlay muted loop playsInline>
          <source src={reel.video} type="video/mp4" />
        </video>
        <button
          className="reel-play-btn"
          onClick={() => onOpen(reel.video, reel.title, reel.desc)}
        >
          <svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21" /></svg>
        </button>
      </div>
    </div>
  )
}

export default function VideoShowcase({ reels, onOpen }) {
  const [filter, setFilter] = useState('all')

  const visible = filter === 'all'
    ? reels
    : reels.filter(r => r.category === filter)

  return (
    <section className="showcase-section" id="work">
      <div className="showcase-header">
        <Reveal>
          <div>
            <div className="section-number">02 — Selected Work</div>
            <h2>AI-crafted <em>visual experiments</em></h2>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="filter-row">
            {categories.map(c => (
              <button
                key={c}
                className={`filter-pill ${filter === c ? 'active' : ''}`}
                onClick={() => setFilter(c)}
              >
                {c === 'all' ? 'All' : c[0].toUpperCase() + c.slice(1)}
              </button>
            ))}
          </div>
        </Reveal>
      </div>
      <div className="showcase-rows">
        {visible.map((reel, i) => (
          <Reveal key={reel.id} delay={i * 0.1}>
            <ReelRow reel={reel} onOpen={onOpen} reverse={i % 2 !== 0} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
