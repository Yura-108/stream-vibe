import './MoviesBanner.scss'
import classNames from 'classnames'
import Slider from "@/components/Slider/index.js";
import MovieBannerCard from "@/components/MovieBannerCard/index.js";

const MoviesBanner = (props) => {
  const {
    className,
  } = props;

  const titleId = 'movies-banner-title';

  const moviesCards = [
    {
      title: 'Avengers : Endgame',
      description: 'With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos\'s actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.',
      imgSrc: '/src/assets/images/movie-banner/1.jpg',
    },
    {
      title: 'Avengers : Endgame 2',
      description: 'With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos\'s actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.',
      imgSrc: '/src/assets/images/movie-banner/1.jpg',
    },
    {
      title: 'Avengers : Endgame 3',
      description: 'With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos\'s actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.',
      imgSrc: '/src/assets/images/movie-banner/1.jpg',
    },
    {
      title: 'Avengers : Endgame 4',
      description: 'With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos\'s actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.',
      imgSrc: '/src/assets/images/movie-banner/1.jpg',
    },
  ]

  return (
    <section
      className={classNames(className, 'movies-banner container')}
      aria-labelledby={titleId}
    >
      <h1 className="visually-hidden" id={titleId}>
        Movies  & Shows
      </h1>
      <Slider
        sliderParams={{slidesPerView: 1, breakpoints: {1024: {allowTouchMove: false}}}}
        navigationPosition={"abs-bottom"}
        hasScrollbarOnMobile={false}
      >
        {moviesCards.map((moviesCard, index) => (
          <MovieBannerCard {...moviesCard} key={index} />
        ))}
      </Slider>
    </section>
  )
}

export default MoviesBanner