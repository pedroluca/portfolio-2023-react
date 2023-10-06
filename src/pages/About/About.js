import { useEffect, useState } from 'react'
import axios from 'axios'
import './About.css'
import Pedro from '../../images/profile.jpg'
import PageTitle from '../../components/PageTitle/PageTitle'
import DocumentTitle from '../../components/DocumentTitle/DocumentTitle'

function About() {

  const todayDate = new Date()
  const myBirthday = new Date('2003-01-28')
  const differenceInMilliseconds = todayDate - myBirthday
  const myAge = parseInt(differenceInMilliseconds / (1000 * 60 * 60 * 24 * 365.25))

  const username = `pedroluca`

  const [data, setData] = useState()

  useEffect(() => {
    axios.get(`https://api.github.com/users/${username}`)
      .then(response => {
        setData({ user: response.data })
      })
      .catch(error => {
        console.error('Erro na solicitação:', error)
        setData({ error: 'Erro na solicitação' })
      })
  }, [username])

  return (
    <main className="page page-column">
      <DocumentTitle title="Sobre" />
      <PageTitle name="Sobre mim" />
      <section id="about">
        <img src={Pedro} alt="White guy with brown hair, smiling and looking to the camera, wearing a white team t-shirt and black sunglasses, behind him there's a beach and some people sitting and watching the sunset, this beach is in Ponta do Mutá, Bahia, Brazil."/>
        <div>
          <p>Meu nome é Pedro Luca Prates, tenho {myAge} anos e sou Técnico em Informática e Desenvolvedor Front-End.</p>
          <p>Em 2021, conclui a minha formação como Técnico em Informática para Internet no IF Baiano - <em>campus</em> Guanambi, mesma instituição onde atualmente estou cursando Análise e Desenvolvimento de Sistemas.</p>
          <p>Sou apaixonado pelo mundo da programação desde que iniciei meus estudos na área, em 2018, e tenho muita afinidade com Front-End, apesar de também gostar e compreender facilmente as complexidades do Back-End (Já desenvolvi alguns projetos como Dev Full-Stack).</p>
          <p>Tenho experiência com as tecnologias: HTML, CSS, JavaScript, PHP, SQL, C e atualmente estou estudando React.JS e Java (respectivamente: para projetos pessoais e/ou profissionais e disciplina na faculdade).</p>
        </div>
      </section>
      <section>
        <h2 className="blue-title">Bio</h2>
        <blockquote>{data && data.user.bio}</blockquote>
      </section>
      <section>
        <h2 className="blue-title">Carreira Acadêmica</h2>
        <div>
          <h4>Ensino Médio integrado ao curso Técnico em Informática para Internet</h4>
          <p>IF Baiano • Guanambi, BA</p>
          <p>Jan. 2018 -- Ago. 2021</p>
        </div>
        <div>
          <h4>Técnologo em Análise e Desenvolvimento de Sistemas</h4>
          <p>IF Baiano • Guanambi,BA</p>
          <p>Ago. 2022 -- Jun. 2025</p>
        </div>
      </section>
      <section>
        <h2 className="blue-title">Carreira Profissional</h2>
        <div>
          <h4>Desenvolvedor Front-End</h4>
          <p>Freelancer • Guanambi, BA</p>
          <p>Ago. 2021 -- Presente</p>
        </div>
        <div>
          <h4>Técnico de TI</h4>
          <p>Hospital Geral de Guanambi • Guanambi, BA</p>
          <p>Dez. 2021 -- Ago. 2022</p>
        </div>
      </section>
    </main>
  )
}

export default About