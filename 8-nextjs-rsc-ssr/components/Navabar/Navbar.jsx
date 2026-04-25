import React from 'react'
import Link from 'next/link'

function Navbar() {
    return (
        <nav className='flex justify-around pt-10  items-center'>
            <div className='text-3xl'>
                <Link href='/'>Musawer</Link>
            </div>
            <ul className='flex gap-4'>
                <li className='hover:text-red-900'>
                    <Link href='/'>Home</Link>
                </li>
                <li className='hover:text-red-900'>
                    <Link href='/clientsidepage'>Client</Link>
                </li>
                <li className='hover:text-red-900'>
                    <Link href='/serversidepage'>Server</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
