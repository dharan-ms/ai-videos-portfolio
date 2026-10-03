import React from 'react'

export default function Footer() {
  return (
    <footer>
      <div className="footer-copy">&copy; {new Date().getFullYear()} Sankar Mahha Rajh. All rights reserved.</div>
      <div className="footer-links">
        <a
          className="footer-telegram"
          href="https://t.me/the_sacred_one"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M9.04 15.3 8.9 19.1c.4 0 .58-.17.8-.38l1.92-1.84 3.98 2.93c.73.4 1.25.19 1.45-.68l2.63-12.4c.24-1.1-.4-1.53-1.1-1.26L3.3 10.1c-1.07.42-1.05 1.02-.18 1.29l4.3 1.34 10-6.3c.47-.3.9-.13.55.17L9.04 15.3Z" />
          </svg>
          telegram
        </a>
      </div>
    </footer>
  )
}
