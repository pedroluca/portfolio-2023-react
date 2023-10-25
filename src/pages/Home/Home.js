import './Home.css'
import React from 'react'
import { Helmet } from 'react-helmet'

function Home() {
  return (
    <main className="page home-page">
      <Helmet>
        <title>Pedro Luca Prates</title>
      </Helmet>
      <div>
        <h1 className="blue-title big-title">Pedro Luca Prates</h1>
        <p id="sub-title">Desenvolvedor Front-End | Técnico em Informática</p>
        <p>Estudante de Análise e Desenvolvimento de Sistemas</p>
        <button id="contact-button" onClick={() => {window.location.href = 'mailto:pedrolucaofc@outlook.com'}}>
          Vamos desenvolver algum projeto juntos
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-arrow-up-right"><path d="M17 7l-10 10"></path><path d="M8 7l9 0l0 9"></path></svg>
        </button>
      </div>
    </main>
  )
}

export default Home