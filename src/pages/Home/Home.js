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
      </div>
    </main>
  )
}

export default Home