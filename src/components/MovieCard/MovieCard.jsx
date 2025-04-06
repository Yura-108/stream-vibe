import './MovieCard.scss'
import classNames from 'classnames'

const MovieCard = (props) => {
  const {
    className,
  } = props

  return (
    <div
      className={classNames(className, 'movie-card')}
    >
      MovieCard
    </div>
  )
}

export default MovieCard