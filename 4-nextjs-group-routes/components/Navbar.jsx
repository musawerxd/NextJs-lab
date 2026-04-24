import React from 'react'
import Link from 'next/link'
function Navbar() {
    return (
        <header className='flex justify-around bg-[#212121] items-center'>
            <div className='text-3xl'>Musawer</div>
            <div>
                <ul className='flex gap-4'>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>

                </ul>
            </div>
        </header>
    )
}

export default Navbar
