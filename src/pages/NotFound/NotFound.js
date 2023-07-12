import './NotFound.css'
import NotFoundImg from '../../images/dev.gif'
import { Helmet } from 'react-helmet'

function NotFound() {
  return (
    <div className="page page-column not-page">
      <Helmet>
        <title>Página não encontrada</title>
      </Helmet>
      <h1 className="blue-title big-title">Oops...</h1>
      <img src={NotFoundImg} alt="Animated guy with dark blue hood coding in a laptop" />
      <p>Erro 404: Página não encontrada</p>
    </div>
  )
}

export default NotFound