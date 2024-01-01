import Link from 'next/link'
import React from 'react'
import { AiFillCaretUp } from 'react-icons/ai'

const NavBar = () => {
  const links = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Services', href: '/services' },
    { label: 'Contact Us', href: '/contact' },
  ]

  return (
    <nav className="flex justify-between border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <AiFillCaretUp />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-slate-900 hover:text-slate-500 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
