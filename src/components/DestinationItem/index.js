import './index.css'

function DestinationItem(props) {
  const {ele} = props
  const {name, ImgUrl} = ele

  return (
    <li className="card">
      <img src={ImgUrl} alt="place" className="img" />
      <p>{name}</p>
    </li>
  )
}
export default DestinationItem
