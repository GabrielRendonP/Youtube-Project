import PropTypes from 'prop-types'
import styles from './item.module.scss'

function Item({title, description, thumbnails}) {

  return (
    <>
    <div className={styles.video}>
      <p> {title} </p>
      <p> {description} </p>
      <img src={thumbnails.medium.url} />
    </div>
    </>
  )
}
Item.propTypes = {}
export default Item