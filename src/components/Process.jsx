import React from 'react'
import Reveal from './Reveal'

export default function Process() {
  return (
    <section className="process-section" id="process">
      <Reveal>
        <div className="process-header">
          <div className="section-number">06 — Process</div>
          <h2>From prompt<br />to <em>production</em></h2>
        </div>
      </Reveal>
      <div className="process-grid">
        {[
          { label: 'Concept', title: 'Vision & Prompt', text: 'Every project starts with a feeling. I craft detailed prompts that capture mood, motion, and emotion.' },
          { label: 'Generate', title: 'AI Synthesis', text: 'Using FLUX, Pika, Runway, and other cutting-edge models, I generate and iterate until the concept comes alive.' },
          { label: 'Refine', title: 'Color & Motion', text: 'Post-processing, color grading, and motion enhancement bring cinematic quality to every frame.' },
          { label: 'Deliver', title: 'Final Export', text: 'The finished video is delivered in the optimal format — social, broadcast, or cinema-ready.' },
        ].map((step, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="process-card">
              <div className="process-label">{step.label}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
