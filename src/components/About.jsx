import React from 'react'
import Reveal from './Reveal'

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-inner">
        <Reveal>
          <div className="about-left">
            <div className="section-number">05 — About</div>
            <div className="about-heading">
              About <em>me</em>
            </div>
            <p className="about-text">
              I&apos;m Sankar Mahha Rajh — an AI Generalist and Creative Head
              specializing in AI-generated video and visual content. I work at the
              intersection of cinematic storytelling and generative technology,
              crafting visuals that challenge perception and push creative
              boundaries.
            </p>
            <p className="about-text">
              Every project begins with a vision — a feeling, a mood, a moment —
              and I bring it to life using the most advanced AI video tools
              available. This isn&apos;t about replacing creativity — it&apos;s
              about expanding what&apos;s possible.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
