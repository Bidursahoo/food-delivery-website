import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><Link to="/" className="nav-Link px-2 text-muted">Foodie</Link></li>
      <li className="nav-item"><Link to="/" className="nav-Link px-2 text-muted">FAQs</Link></li>
      <li className="nav-item"><Link to="/" className="nav-Link px-2 text-muted">About</Link></li>
    </ul>
    <p className="text-center text-muted fw-semibold">© 2023 Bidur Company, Inc</p>
  </footer>
  )
}
