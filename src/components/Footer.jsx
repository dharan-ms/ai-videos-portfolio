import React from 'react'

export default function Footer() {
  return (
    <footer>
      <div className="footer-copy">&copy; {new Date().getFullYear()} Sankar Mahha Rajh. All rights reserved.</div>
      <div className="footer-links">
        <a href="https://t.me/the_sacred_one">telegram — @the_sacred_one</a>
      </div>
    </footer>
  )
}
