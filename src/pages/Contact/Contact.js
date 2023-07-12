import './Contact.css'
import PageTitle from '../../components/PageTitle/PageTitle'
import ContactCard from '../../components/ContactCard/ContactCard'
import DocumentTitle from '../../components/DocumentTitle/DocumentTitle'

function Contact() {
  return (
    <main className="page page-column contact-page">
      <DocumentTitle title="Contatos" />
      <PageTitle name="Contate-me" />
      <section>
        <ContactCard src="instagram" url="https://www.instagram.com/pe.uuh" social="Instagram Pessoal" user="@pe.uuh" />
        <ContactCard src="instagram" url="https://www.instagram.com/pedroluca.dev" social="Instagram Profissional" user="@pedroluca.dev" />
        <ContactCard src="twitter" url="https://www.twitter.com/pedrolucaofc" social="Twitter" user="@pedrolucaofc" />
        <ContactCard src="github" url="https://www.github.com/pedroluca" social="Github" user="pedroluca" />
        <ContactCard src="linkedin" url="https://www.linkedin.com/in/pedro-luca-prates" social="Linkedin" user="Pedro Luca Prates" />
        <ContactCard src="outlook" url="mailto: pedrolucaofc@outlook.com" social="E-mail" user="pedrolucaofc" />
        <ContactCard src="youtube" url="https://www.youtube.com/channel/UC7qDaMEUS4MjhQ7UVxQQVMQ" social="YouTube" user="Pedro Luca Prates" />
        <ContactCard src="twitch" url="https://www.twitch.com/PedroLucaOFC" social="Twitch" user="PedroLucaOFC" />
      </section>
    </main>
  )
}

export default Contact