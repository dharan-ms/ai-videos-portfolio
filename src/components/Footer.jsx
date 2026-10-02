import React from 'react'

export default function Footer() {
  return (
    <footer>
      <div className="footer-copy">&copy; {new Date().getFullYear()} Sankar Mahha Rajh. All rights reserved.</div>
      <div className="footer-links">
        <a href="#">Instagram</a>
        <a href="#">X</a>
        <a href="#">YouTube</a>
        <a href="#">Behance</a>
      </div>
    </footer>
  )
}
