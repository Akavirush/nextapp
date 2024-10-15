"use client"
import Link from "next/link"
import "@/components/Header/TheHeader.css"
import { useState } from "react"

export const TheHeader = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <header className='navigation'>
            <div className='container'>
                <div className='nav-bar'>
                <h1><Link className='sitelogo' href="/"><img src='/logo.svg'></img></Link></h1>
                <nav className={`${isOpen ? "active" : ""}`}>
                    <ul>
                    <li>
                        <Link href="/">О НАС</Link>
                    </li>
                    <li>
                        <Link href="/">ПРОГРАММЫ</Link>
                    </li>
                    <li>
                        <Link href="/">КОНТАКТЫ</Link>
                    </li>
                    </ul>
                </nav>
                <button className='cms-auth'>Войти</button>
                <button className='burger-btn' onClick={() => setOpen(!isOpen)}><img src='/icons/burger-icon.svg'></img></button>
                </div>
            </div>
        </header>
    )
}