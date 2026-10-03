import React, { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav className={scrolled ? 'scrolled' : ''}>
        <ul className="nav-links">
          <li><a href="#work">Work</a></li>
          <li><a href="#upscaling">Upscaling</a></li>
          <li><a href="#consistency">Consistency</a></li>
          <li><a href="#tools">Tools</a></li>
          <li><a href="#contact" className="nav-cta">Get in touch</a></li>
        </ul>
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          <span /><span /><span />
        </button>
      </nav>
      <div id="mobile-nav" className={`mobile-nav ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
        <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
        <a href="#upscaling" onClick={() => setMenuOpen(false)}>Upscaling</a>
        <a href="#consistency" onClick={() => setMenuOpen(false)}>Consistency</a>
        <a href="#tools" onClick={() => setMenuOpen(false)}>Tools</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>
    </>
  )
}
