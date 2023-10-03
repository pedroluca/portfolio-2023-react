import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Contact.css'
import PageTitle from '../../components/PageTitle/PageTitle'
import LinkCard from '../../components/LinkCard/LinkCard'
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
        <LinkCard src="instagram" url="https://www.instagram.com/pe.uuh" social="Instagram" user="@pe.uuh" />
        <LinkCard src="xtwitter" url="https://www.twitter.com/pedrolucaofc" social="Twitter" user="@pedrolucaofc" />
        <LinkCard src="github" url={githubLink} social="Github" user={data && data.user.login} />
        <LinkCard src="linkedin" url="https://www.linkedin.com/in/pedro-luca-prates" social="Linkedin" user="Pedro Luca Prates" />
        <LinkCard src="outlook" url="mailto: pedrolucaofc@outlook.com" social="Outlook" user="pedrolucaofc" />
        <LinkCard src="youtube" url="https://www.youtube.com/channel/UC7qDaMEUS4MjhQ7UVxQQVMQ" social="YouTube" user="Pedro Luca Prates" />
        <LinkCard src="twitch" url="https://www.twitch.com/PedroLucaOFC" social="Twitch" user="PedroLucaOFC" />
      </section>
    </main>
  )
}

export default Contact