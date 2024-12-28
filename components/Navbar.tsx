import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <nav className='p-4'>
            <ul className='flex gap-4'>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/blog'>Blog</Link>
                </li>
                <li>
                    <Link href='/contact'>Contact</Link>
                </li>
            </ul>
        </nav>
    )
}
