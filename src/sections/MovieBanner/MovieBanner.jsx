import './MovieBanner.scss'
import classNames from 'classnames'
import MovieBannerCard from "@/components/MovieBannerCard/index.js";

const MovieBanner = (props) => {
    const {
        className,
    } = props;

    const titleId = 'movie-banner-title';

    return (
        <section
            className={classNames(className, 'movie-banner container')}
            aria-labelledby={titleId}
        >
            <MovieBannerCard
                title={'kantara'}
                description={'A fiery young man clashes with an unflinching forest officer in a south Indian village where spirituality, fate and folklore rule the lands.'}
                imgSrc={'/src/assets/images/movie-banner/2.jpg'}
                TitleTag={'h1'}
                titleId={titleId}
                isSmallPaddingY
            />
        </section>
    )
}

export default MovieBanner