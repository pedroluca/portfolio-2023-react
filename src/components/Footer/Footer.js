import './Footer.css'
import Instagram from '../../images/instagram.png'
import Github from '../../images/github.png'
import Linkedin from '../../images/linkedin.png'
import Xtwitter from '../../images/xtwitter.png'
import Youtube from '../../images/youtube.png'
import Twitch from '../../images/twitch.png'

function Footer() {
  return (
    <div className="footer-bar">
      <nav>
        <a href="https://www.instagram.com/pedroluca.dev" target="blank" id="instagram"><span>instagram</span><img src={Instagram} alt="Instagram logo"/></a>
        <a href="https://www.github.com/pedroluca" target="blank" id="github"><span>github</span><img src={Github} alt="Github logo"/></a>
        <a href="https://www.linkedin.com/in/pedro-luca-prates" target="blank" id="linkedin"><span>linkedin</span><img src={Linkedin} alt="Linkedin logo"/></a>
        <a href="https://www.twitter.com/pedrolucaofc" target="blank" id="twitter"><span>twitter</span><img src={Xtwitter} alt="X logo"/></a>
        <a href="https://www.youtube.com/channel/UC7qDaMEUS4MjhQ7UVxQQVMQ/" target="blank" id="youtube"><span>youtube</span><img src={Youtube} alt="Youtube logo"/></a>
        <a href="https://www.twitch.com/pedrolucaofc" target="blank" id="twitch"><span>twitch</span><img src={Twitch} alt="Twitch logo"/></a>
      </nav>
    </div>
  )
}

export default Footer