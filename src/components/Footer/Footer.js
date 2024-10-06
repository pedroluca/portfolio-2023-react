import './Footer.css'
import Instagram from '../../images/linear-instagram-darkgray-888.png'
import Github from '../../images/linear-github-darkgray-888.png'
import Linkedin from '../../images/linear-linkedin-darkgray-888.png'
import Xtwitter from '../../images/linear-X-darkgray-888.png'
import Youtube from '../../images/linear-youtube-darkgray-888.png'
import Twitch from '../../images/linear-twitch-darkgray-888.png'

function Footer() {
  return (
    <div className="footer-bar">
      <nav>
        <a href="https://www.instagram.com/pedroluca.p" target="blank" id="instagram"><img src={Instagram} alt="Instagram logo"/></a>
        <a href="https://www.github.com/pedroluca" target="blank" id="github"><img src={Github} alt="Github logo"/></a>
        <a href="https://www.linkedin.com/in/pedrolucaofc" target="blank" id="linkedin"><img src={Linkedin} alt="Linkedin logo"/></a>
        <a href="https://www.twitter.com/pedrolucaofc" target="blank" id="twitter"><img src={Xtwitter} alt="X logo"/></a>
        <a href="https://www.youtube.com/channel/UC7qDaMEUS4MjhQ7UVxQQVMQ/" target="blank" id="youtube"><img src={Youtube} alt="Youtube logo"/></a>
        <a href="https://www.twitch.com/pedrolucaofc" target="blank" id="twitch"><img src={Twitch} alt="Twitch logo"/></a>
      </nav>
    </div>
  )
}

export default Footer