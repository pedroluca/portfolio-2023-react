import './About.css'
import Pedro from '../../images/profile.jpg'
import PageTitle from '../../components/PageTitle/PageTitle'
import DocumentTitle from '../../components/DocumentTitle/DocumentTitle'

function About() {

  const todayDate = new Date()
  const myBirthday = new Date('2003-01-28')
  const differenceInMilliseconds = todayDate - myBirthday
  const myAge = parseInt(differenceInMilliseconds / (1000 * 60 * 60 * 24 * 365.25))

  return (
    <main className="page page-column">
      <DocumentTitle title="Sobre" />
      <PageTitle name="Sobre mim" />
      <section id="about">
        <img src={Pedro} alt="Pedro is using a white shirt from her college's team, and wearing sunglasses"/>
        <div>
          <p>Meu nome é Pedro Luca, tenho {myAge} anos e sou Técnico em Informática.</p>
          <p>Em 2021, conclui o curso técnico em Informática para Internet no IF Baiano - campus Guanambi, onde atualmente estou cursando a faculdade de Análise e Desenvolvimento de Sistemas.</p>
          <p>Sou apaixonado pelo mundo da programação desde que iniciei os estudos sobre isso em 2018, e me identifico demais com a área do Front-End.</p>
          <p>Tenho experiência com as tecnologias: HTML, CSS, PHP, SQL, C e um conhecimento básico de Javascript.</p>
        </div>
      </section>
      <section>
        <h2 className="blue-title">Bio</h2>
        <blockquote>Meu é Pedro, sou Dev Front-End</blockquote>
      </section>
      <section>
        <h2 className="blue-title">Carreira Acadêmica</h2>
        <div>
          <h4>Técnico em Informática para Internet</h4>
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