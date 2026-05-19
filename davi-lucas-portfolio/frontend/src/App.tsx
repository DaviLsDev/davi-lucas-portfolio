import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div className="font-sans text-ink p-8">Projeto iniciado! ✅</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App