import React from 'react'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img src="/hero-bg.jpg" alt="" />
      </div>
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="hero-overline">AI Generalist</div>
        <h1 className="hero-title">
          <span className="hero-name-line">Sankar Mahha Rajh</span>
          <span className="hero-role-line">AI Creative Head</span>
        </h1>
        <p className="hero-tagline">
          Crafting worlds with Intelligence<br />
          <em>Precision is the differentiator</em>
        </p>
        <div className="hero-line" />
      </div>
    </section>
  )
}
