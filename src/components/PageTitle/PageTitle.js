import './PageTitle.css'

function PageTitle(props) {
  return (
    <h1 className="blue-title big-title">{props.name}</h1>
  )
}

export default PageTitle