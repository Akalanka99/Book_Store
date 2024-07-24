import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

//react icon
import { FaBlog } from "react-icons/fa6";


const Navbar = () => {
    const[isMenuOpen, setIsMenuOpen] = useState(false);
    const[isSticky, setIsSticky] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

   // naviteam 
   const naviteam = [
    {link:"Home", path:"/"},
    {link:"About", path:"/about"},
    {link:"Shop", path:"/shop"},
    {link:"sell your book", path:"/admin/dashboard"},
    {link:"Blog", path:"/blog"},
   ]
  return (
    <header>
        <nav>
            <div>
                {/* logo */}
                <Link to = "/"className='text-2xl font-bold text-blue-700 flex items-center gap-2'><FaBlog className='inline-block'/>Books</Link>

                {/* naviteam */}
                <ul>
                    {
                      naviteam.map(({link, path}) => <Link key={path} to={path} className='block text-base text-black uppercase cursor-pointer hover:text-blue-700'>{link}</Link>)  
                    }
                </ul>
            </div>
        </nav>  
    </header>
  )
}

export default Navbar

