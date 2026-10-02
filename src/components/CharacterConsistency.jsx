import React from 'react'
import Reveal from './Reveal'

export default function CharacterConsistency() {
  return (
    <section className="consistency-section" id="consistency">
      <Reveal>
        <div className="consistency-inner">
          <div className="consistency-visual">
            <video autoPlay muted loop playsInline>
              <source src="/samantha-fighting.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="consistency-text">
            <div className="section-number">03 — Character Consistency</div>
            <h2 className="consistency-heading">
              Character consistency<br />
              at its <em>finest</em>
            </h2>
            <p className="consistency-body">
              Maintain perfect character identity across every frame. Our AI
              ensures faces, expressions, and features remain consistent throughout
              your video — no jarring changes, no broken immersion.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
