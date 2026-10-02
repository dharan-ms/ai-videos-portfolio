import React from 'react'
import Reveal from './Reveal'

const tools = [
  { name: 'Wan', img: '/tool-wan.jpg' },
  { name: 'Kling AI', img: '/tool-kling.jpg' },
  { name: 'Higgsfield', img: '/tool-higgsfield.jpg' },
  { name: 'OpenArt', img: '/tool-openart.jpg' },
  { name: 'Envato', img: '/tool-envato.jpg' },
  { name: 'Runway', img: '/tool-runway.jpg' },
]

export default function Tools() {
  return (
    <section className="tools-section" id="tools">
      <Reveal>
        <div className="section-number">04 — Context Engineered</div>
        <h2 className="tools-heading">
          Masterful execution with<br />
          <em>these platforms</em>
        </h2>
      </Reveal>
      <div className="tools-inner">
        <Reveal delay={0.1}>
          <div className="tools-grid">
            {tools.map(t => (
              <div className="tool-card" key={t.name} title={t.name}>
                <div className="tool-card-img">
                  <img src={t.img} alt={t.name} loading="lazy" />
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="comfyui-highlight">
            <div className="comfyui-visual">
              <img src="/tool-comfyui-new.jpg" alt="Comfy UI" />
            </div>
            <div className="comfyui-text">
              <h3>Comfy UI — Personalized Setup</h3>
              <p>
                A fully personalized setup on your system locally can be provided
                by certified Comfy UI developers at personal request. Get a
                production-ready, customized pipeline tailored to your exact
                workflow and creative requirements.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
