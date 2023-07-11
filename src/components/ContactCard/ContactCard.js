import './ContactCard.css'
import Instagram from '../../images/instagram.png'
import Github from '../../images/github.png'
import Linkedin from '../../images/linkedin.png'
import Twitter from '../../images/twitter.png'
import Youtube from '../../images/youtube.png'
import Twitch from '../../images/twitch.png'
import Outlook from '../../images/outlook.png'

function ContactCard(props) {
  let imagePath
  if (props.src === 'instagram') imagePath = Instagram
  else if (props.src === 'github') imagePath = Github
  else if (props.src === 'linkedin') imagePath = Linkedin
  else if (props.src === 'twitter') imagePath = Twitter
  else if (props.src === 'youtube') imagePath = Youtube
  else if (props.src === 'twitch') imagePath = Twitch
  else if (props.src === 'outlook') imagePath = Outlook
  return (
    <div className="contact-card">
      <img src={imagePath} alt="Social media specified logo" />
      <h4>{props.social}</h4>
      <p>{props.user}</p>
    </div>
  )
}

export default ContactCard