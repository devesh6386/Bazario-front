import React from 'react'
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="h-16 bg-purple-700 flex flex-row justify-between px-3 items-center text-white">
            <div className='logo font-bold text-lg'>
                <Link href='/'>
                Bazario
                </Link>
            </div>
            <ul className='justify-center gap-4 flex flex-row items-center'>
                
                <Link href='/about'><li>About</li></Link>
                <Link href='/contact'><li>Contact</li></Link>
                <Link href='/tutorial'><li>How it works</li></Link>
                <li className='flex gap-3'>
                    <Link href="/"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold'>Login</button></Link>
                </li>
            </ul>
        </nav>
    );
}
export default Navbar