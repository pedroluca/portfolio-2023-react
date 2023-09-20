import './Projects.css'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import PageTitle from '../../components/PageTitle/PageTitle'
import DocumentTitle from '../../components/DocumentTitle/DocumentTitle'

function Projects() {
  return (
    <main className="page page-column projects-page">
      <DocumentTitle title="Projetos" />
      <PageTitle name="Meus projetos" />
      <p>Abaixo estão alguns projetos que desenvolvi:</p>
      <section>
        <ProjectCard title="Blog Criança Alerta" description="Blog educativo com o intuito de ensinar para as crianças e adolescentes sobre seus direitos, garantidos por lei, para que a taxa de violência e abusos de crianças diminua." url="https://www.blogcriancaalerta.epizy.com/" />
        <ProjectCard title="Catálogo de Serviços" description="Plataforma online para divulgação de empresas e pequenos comércios na região." />
        <ProjectCard title="Repage do site do IF Baiano campus Guanambi" description="Atividade acadêmica cujo intuito era desenvolver ou repaginar um site" url="https://repage-if-baiano.vercel.app/" />
        <ProjectCard title="Small Phones" description="Sistema de solicitação de atendimentos técnicos. O cliente e cadastra e entra em contato com um técnico." />
      </section>
    </main>
  )
}

export default Projects