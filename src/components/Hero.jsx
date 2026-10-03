import React from 'react'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg">
        <img src="/hero-bg.jpg" alt="" />
      </div>
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1 className="hero-role-title">AI Creative Head</h1>
        <div className="hero-roles">
          <span className="hero-role-badge">AI Generalist</span>
          <span className="hero-role-badge">AI Creative Head</span>
        </div>
      </div>
      <p className="hero-tagline">
        CRAFTING WORLDS WITH INTELLIGENCE<br />
        <em>PRECISION IS THE DIFFERENTIATOR</em>
      </p>
    </section>
  )
}
