import './reset.css'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Радио - В',
  description: 'Лучшее радио',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className='navigation'>
          <div className='container'>
            <div className='nav-bar'>
              <h1><Link className='sitelogo' href="/"><img src='/logo.svg'></img></Link></h1>
              <nav>
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
              <button className='burger-btn'><img src='/icons/burger-icon.svg'></img></button>
            </div>
          </div>
        </header>
        {children}
        <footer className='main-footer'>
          <div className='container'>
            <div className='footer'>
              <h4>Все права защищены, РАДИО-В</h4>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
