import './ProjectCard.css'

function ContactCard(props) {
  const handleCardClick = () => {
    if (props.url) window.open(props.url, 'blank')
  }
  
  return (
    <div className={`project-card ${props.url ? 'clickable' : 'not-clickable'}`} onClick={handleCardClick}>
      <h4>{props.title}</h4>
      <p>{props.description}</p>
    </div>
  )
}

export default ContactCard