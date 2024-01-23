/* eslint-disable jsx-a11y/img-redundant-alt */
import './SetupCard.css'
import JetBrains from '../../images/jetbrains.png'
import MinTheme from '../../images/min.png'
import VSCode from '../../images/vscode.png'
import Laptop from '../../images/laptop.png'
import Headset from '../../images/headset.png'
import Headphone from '../../images/headphone.png'
import Earpods1 from '../../images/earphone1.png'
import Earpods2 from '../../images/earphone2.png'
import Mouse1 from '../../images/mouse1.png'
import Mouse2 from '../../images/mouse2.png'
import Mousepad from '../../images/mousepad.png'
import CodigoLimpo from '../../images/codigo.png'
import Arquitetura from '../../images/arquitetura.png'
import PHP4 from '../../images/php4.jpg'
import DevAndroid from '../../images/dev_android.jpg'
import EstruturaDados from '../../images/estrutura_dados.jpg'
import Deschamps from '../../images/deschamps.png'
import TheNews from '../../images/the_news.png'
import Codecon from '../../images/codecon.png'
import Biro from '../../images/birobirobiro.png'
import Suporte from '../../images/suporte.png'

function SetupCard(props) {
  const handleCardClick = () => window.open(props.url, 'blank')
  
  let imagePath
  if (props.src === 'laptop') imagePath = Laptop
  else if (props.src === 'mouse1') imagePath = Mouse1
  else if (props.src === 'mouse2') imagePath = Mouse2
  else if (props.src === 'earphone1') imagePath = Earpods1
  else if (props.src === 'earphone2') imagePath = Earpods2
  else if (props.src === 'headphone') imagePath = Headphone
  else if (props.src === 'headset') imagePath = Headset
  else if (props.src === 'mousepad') imagePath = Mousepad
  else if (props.src === 'mintheme') imagePath = MinTheme
  else if (props.src === 'jetbrains') imagePath = JetBrains
  else if (props.src === 'vscode') imagePath = VSCode
  else if (props.src === 'codigo') imagePath = CodigoLimpo
  else if (props.src === 'arquitetura') imagePath = Arquitetura
  else if (props.src === 'php4') imagePath = PHP4
  else if (props.src === 'estrutura') imagePath = EstruturaDados
  else if (props.src === 'android') imagePath = DevAndroid
  else if (props.src === 'deschamps') imagePath = Deschamps
  else if (props.src === 'thenews') imagePath = TheNews
  else if (props.src === 'codecon') imagePath = Codecon
  else if (props.src === 'biro') imagePath = Biro
  else if (props.src === 'suporte') imagePath = Suporte

  return (
    <div className="setup-card" onClick={handleCardClick}>
      <img className="img-contain" src={imagePath} alt="Setup item image for recognition" />
      <h4>{props.social}</h4>
      <p>{props.user}</p>
    </div>
  )
}

export default SetupCard