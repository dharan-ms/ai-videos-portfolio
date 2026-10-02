import React, { useEffect, useRef } from 'react'

export default function Lightbox({ open, video, title, desc, onClose }) {
  const videoRef = useRef(null)

  useEffect(() => {
    if (open && videoRef.current) {
      videoRef.current.load()
      videoRef.current.play().catch(() => {})
    }
  }, [open, video])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (open) {
      document.addEventListener('keydown', handleKey)
      return () => document.removeEventListener('keydown', handleKey)
    }
  }, [open, onClose])

  return (
    <div
      className={`lightbox ${open ? 'open' : ''}`}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
    >
      <button className="lightbox-close" onClick={onClose}>
        &times;
      </button>
      <div className="lightbox-video">
        <video ref={videoRef} controls>
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="lightbox-info">
        <h3 id="lightbox-title">{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  )
}
