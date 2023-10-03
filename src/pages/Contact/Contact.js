import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Contact.css'
import PageTitle from '../../components/PageTitle/PageTitle'
import ContactCard from '../../components/ContactCard/ContactCard'
import DocumentTitle from '../../components/DocumentTitle/DocumentTitle'

function Contact() {
  const username = `pedroluca`
  const githubLink = `https://www.github.com/${username}`

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
    <main className="page page-column contact-page">
      <DocumentTitle title="Meus Links" />
      <PageTitle name="Meus Links" />
      <section>
        <ContactCard src="instagram" url="https://www.instagram.com/pe.uuh" social="Instagram" user="@pe.uuh" />
        <ContactCard src="xtwitter" url="https://www.twitter.com/pedrolucaofc" social="Twitter" user="@pedrolucaofc" />
        <ContactCard src="github" url={githubLink} social="Github" user={data && data.user.login} />
        <ContactCard src="linkedin" url="https://www.linkedin.com/in/pedro-luca-prates" social="Linkedin" user="Pedro Luca Prates" />
        <ContactCard src="outlook" url="mailto: pedrolucaofc@outlook.com" social="Outlook" user="pedrolucaofc" />
        <ContactCard src="youtube" url="https://www.youtube.com/channel/UC7qDaMEUS4MjhQ7UVxQQVMQ" social="YouTube" user="Pedro Luca Prates" />
        <ContactCard src="twitch" url="https://www.twitch.com/PedroLucaOFC" social="Twitch" user="PedroLucaOFC" />
      </section>
    </main>
  )
}

export default Contact