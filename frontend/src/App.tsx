import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

type Lang = 'pt' | 'en'

function App() {
  const [lang, setLang] = useState<Lang>('pt')

  return (
    <div className="min-h-screen bg-cream">
      <Navbar lang={lang} setLang={setLang} />
      <main className="pt-16">
        <div className="p-8 font-sans text-ink">Projeto iniciado! ✅</div>
      </main>
      <Footer lang={lang} />
    </div>
  )
}

export default App