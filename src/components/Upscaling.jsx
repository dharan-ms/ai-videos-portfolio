import React from 'react'
import Reveal from './Reveal'

export default function Upscaling() {
  return (
    <section className="upscaling-section" id="upscaling">
      <div className="upscaling-inner">
        <Reveal>
          <div className="upscaling-visual">
            <video autoPlay muted loop playsInline>
              <source src="/runway.mp4" type="video/mp4" />
            </video>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="upscaling-text">
            <div className="section-number">01 — High Resolution Upscaling</div>
            <h2 className="upscaling-heading">
              Upscale any footage<br />
              to <em>cinematic quality</em>
            </h2>
            <p className="upscaling-body">
              Transform low-resolution video into stunning high-definition content.
              Our AI-powered upscaling technology delivers crisp, detailed results
              that rival — and often surpass — traditional production quality.
            </p>
            <div className="upscaling-features">
              <div className="upscale-feature">
                <div className="upscale-feature-icon">&#8599;</div>
                <div>
                  <strong>4K / 8K Output</strong>
                  <p>Upscale any footage up to 8K resolution</p>
                </div>
              </div>
              <div className="upscale-feature">
                <div className="upscale-feature-icon">&#10024;</div>
                <div>
                  <strong>Detail Enhancement</strong>
                  <p>AI reconstructs fine details naturally</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
