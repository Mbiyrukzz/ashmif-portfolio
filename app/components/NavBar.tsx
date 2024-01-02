'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'
import classnames from 'classnames'

const NavBar = () => {
  const currentPath = usePathname()

  const links = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Services', href: '/services' },
    { label: 'Contact Us', href: '/contact' },
  ]

  return (
    <nav className="flex justify-between border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <AiFillCheckCircle />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={classnames({
              'text-slate-950 font-bold': link.href === currentPath,
              'text-slate-800': link.href !== currentPath,
              'hover:text-slate-600 transition-colors': true,
            })}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
