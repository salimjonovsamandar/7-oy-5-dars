import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from "../../../public/Logo.png"
import "../../app/globals.css"

function Header() {
  return (
    <div>
      <header className="w-full bg-blue-950">
        <div className="navbar text-white container items-center justify-betwen mx-auto gap-9 p-4">
          <div className="navbar-start">
            <div >
              <Image src={Logo} alt="Logo "></Image>
            </div>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="gap-9 menu-horizontal px-1">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/Includes">Includes</Link>
              </li>
              <li>
                <Link href="/About">About</Link>
              </li>
              <li>
                <Link href="/Best">Best</Link>
              </li>
              <li>
                <Link href="/Book">Book</Link>
              </li>
              <li>
                <Link href="/Learn">Learn</Link>
              </li>
              <li>
                <Link href="/Trail">Trail</Link>
              </li>
              <li>
                <Link href="/Readers">Readers</Link>
              </li>
              <li>
                <Link href="/Resources">Resources</Link>
              </li>
              <li className='mr-4'>
                <Link href="/Subscribe">Subscribe</Link>
              </li>
            </ul>
            <button className="btn btn-warning">Order Today</button>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header