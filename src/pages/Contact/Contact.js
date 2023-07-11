import './Contact.css'
import PageTitle from '../../components/PageTitle/PageTitle'
import ContactCard from '../../components/ContactCard/ContactCard'

function Contact() {
  return (
    <div className="page page-column contact-page">
      <PageTitle name="Contate-me" />
      <section>
        <ContactCard src="instagram" social="Instagram Pessoal" user="@pe.uuh" />
        <ContactCard src="instagram" social="Instagram Profissional" user="@pedroluca.dev" />
        <ContactCard src="twitter" social="Twitter" user="@pedrolucaofc" />
        <ContactCard src="github" social="Github" user="pedroluca" />
        <ContactCard src="linkedin" social="Linkedin" user="Pedro Luca Prates" />
        <ContactCard src="outlook" social="E-mail" user="pedrolucaofc" />
        <ContactCard src="youtube" social="YouTube" user="Pedro Luca Prates" />
        <ContactCard src="twitch" social="Twitch" user="PedroLucaOFC" />
      </section>
    </div>
  )
}

export default Contact