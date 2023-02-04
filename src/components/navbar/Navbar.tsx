import styles from "./Navbar.module.scss"

import { Link, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"

import { FaInstagram, FaTwitter } from "react-icons/fa"

export default function Navbar(){

    const { pathname } = useLocation()

    const [ active, setActive ] = useState(false);
    const [ underline, setUnderline ] = useState<string>()

    useEffect(()=>{
        setUnderline(pathname)
    }, [pathname])

    useEffect(()=>{
        window.addEventListener('resize', ()=>{
            if(window.innerWidth >= 768 && active) setActive(!active)
        })
    })

    const closeMenu = ()=>{
        if(window.innerWidth > 768) return

        if(active) setActive(!active) 
    }

    return(
        <header 
            className={`${active ? `${styles.header} ${styles.active}` : styles.header} 
            ${ (pathname !== '/gallery/') ? `${styles.black}` : `${styles.light}`}`}
        >
            <h1><Link to='/gallery/'>Zion Taylor</Link></h1>
            
            <div className={styles.headerMenu}>
                <div className={styles.headerLinks}>
                    <nav className={styles.headerNavLinks}>
                        <Link to='../gallery/' className={underline === '/gallery/' ? styles.underline : ''}
                        onClick={closeMenu}>Trabalhos</Link>
                        <Link to='about' className={underline === '/gallery/about' ? styles.underline : ''}
                        onClick={closeMenu}>Sobre</Link>
                        <Link to='contact' className={underline === '/gallery/contact' ? styles.underline : ''}
                        onClick={closeMenu}>Contato</Link>
                    </nav>
                    <nav className={styles.headerSocialMedia} >
                        <a href="https://instagram.com">
                            <FaInstagram />
                        </a>
                        <a href="https://twitter.com">
                            <FaTwitter />
                        </a>
                    </nav>
                </div>
            </div>

            <div 
                className={active ? `${styles.menu} ${styles.active}` : styles.menu} 
                onClick={()=>setActive(!active)}
            >
                <span className={styles.trace}></span>
                <span className={styles.trace}></span>
            </div>

        </header>
    )
}