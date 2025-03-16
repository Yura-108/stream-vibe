import './Hero.scss'
import classNames from 'classnames'

const Hero = (props) => {
  const {
    className,
  } = props

  return (
    <div className={classNames(className, 'hero')}>
      Hero
    </div>
  )
}

export default Hero