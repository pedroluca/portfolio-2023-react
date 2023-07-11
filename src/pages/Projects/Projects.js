import './Projects.css'
import PageTitle from '../../components/PageTitle/PageTitle'

function Projects() {
  return (
    <div className="page page-column projects-page">
      <PageTitle name="Meus projetos" />
      <section>
        <div>
          <h4>Blog Criança Alerta</h4>
          <p>Blog educativo com o intuito de ensinar para as crianças e adolescentes sobre seus direitos, garantidos por lei, para que a taxa de violência e abuso de crianças diminua.</p>
          <a href="https://www.blogcriancaalerta.epizy.com/" target="blank">Link do blog</a>
        </div>
        <div>
          <h4>Catálogo de Serviços</h4>
          <p>Plataforma online para divulgação de empresas e pequenos comércios na região.</p>
          <p><span>Link da plataforma</span> (fora do ar)</p>
        </div>
        <div>
          <h4>Small Phones</h4>
          <p>Sistema de solitação de atendimentos técnicos. O cliente se cadastra e solicita um técnico.</p>
          <p><span>Link do site</span> (fora do ar)</p>
        </div>
      </section>
    </div>
  )
}

export default Projects