import React from 'react'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg">
        <img src="/hero-bg.jpg" alt="" />
      </div>
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1 className="hero-name-box">Sankar Mahha Rajh</h1>
        <p className="hero-role-plain">AI generalist</p>
      </div>
      <div className="hero-tagline">
        <span className="hero-statement-craft">Crafting Worlds</span>
        <span className="hero-statement-with">with</span>
        <span className="hero-statement-intel">Intelligence</span>
      </div>
    </section>
  )
}
