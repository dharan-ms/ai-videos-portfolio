import React from 'react'
import Reveal from './Reveal'

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <Reveal>
        <div className="contact-inner">
          <h2 className="contact-heading">
            Have a project<br />
            in <em>mind</em>?
          </h2>
          <p className="contact-text">
            Available for commercial projects, music videos, creative experiments,
            and collaborations. Let&apos;s discuss your vision.
          </p>
          <a href="mailto:san.sankarms@gmail.com" className="contact-email">
            san.sankarms@gmail.com
          </a>
        </div>
      </Reveal>
    </section>
  )
}
