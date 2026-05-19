import { useState } from 'react'
import { Menu, X } from 'lucide-react'

type Lang = 'pt' | 'en'

interface NavbarProps {
  lang: Lang
  setLang: (lang: Lang) => void
}

const links = [
  { href: '#services', pt: 'Serviços', en: 'Services' },
  { href: '#about', pt: 'Sobre', en: 'About' },
  { href: '#portfolio', pt: 'Portfólio', en: 'Portfolio' },
  { href: '#contact', pt: 'Contato', en: 'Contact' },
]

export default function Navbar({ lang, setLang }: NavbarProps) {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-gray-100">

      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#hero" className="font-serif text-xl text-ink">
          Davi<span className="text-accent">.</span>
        </a>


        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted hover:text-ink transition-colors"
            >
              {lang === 'pt' ? link.pt : link.en}
            </a>
          ))}
        </div>


        <div className="flex items-center gap-4">
          {/* Seletor de Idioma */}
          <div className="flex border border-gray-200 rounded-full overflow-hidden text-xs font-medium">
            <button
              onClick={() => setLang('pt')}
              className={`px-3 py-1.5 transition-colors ${lang === 'pt' ? 'bg-ink text-white' : 'text-muted hover:text-ink'}`}
            >
              PT
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1.5 transition-colors ${lang === 'en' ? 'bg-ink text-white' : 'text-muted hover:text-ink'}`}
            >
              EN
            </button>
          </div>


          <a
            href="#contact"
            className="hidden md:block bg-ink text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-accent transition-colors"
          >
            {lang === 'pt' ? 'Contato' : 'Contact'}
          </a>


          <button
            className="md:hidden text-ink"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>


      {menuOpen && (
        <div className="md:hidden bg-cream border-t border-gray-100 px-6 py-4 flex flex-col gap-4">

          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-ink"
            >
              {lang === 'pt' ? link.pt : link.en}
            </a>
          ))}


          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="bg-ink text-white text-sm font-medium px-4 py-2 rounded-full text-center hover:bg-accent transition-colors"
          >
            {lang === 'pt' ? 'Contato' : 'Contact'}
          </a>
        </div>
      )}
    </nav>
  )
}