type Lang = 'pt' | 'en'

interface FooterProps {
  lang: Lang
}

export default function Footer({ lang }: FooterProps) {
  return (
    <footer className="bg-ink text-white/50 text-sm py-8 px-6 text-center">
      <p>
        © 2025 Davi Lucas ·{' '}
        {lang === 'pt' ? 'Desenvolvedor Freelancer' : 'Freelance Developer'} ·{' '}
        {lang === 'pt' ? 'Feito com amor e muito Java' : 'Made with love and a lot of Java'}
      </p>
    </footer>
  )
}