import './RatingView.scss'
import classNames from 'classnames'
import starsUnfilledImgSrc from '@/assets/images/rating/stars_unfilled.svg'
import starsFilledImgSrc from '@/assets/images/rating/stars_filled.svg'


const RatingView = (props) => {
    const {
        className,
        value = 5,
        label
    } = props;

    const ariaLabel = `rating: ${value} stars`;

    return (
        <div
            className={classNames(className, 'rating-view')}
            aria-label={ariaLabel}
            title={ariaLabel}
            style={{'--ratingViewValue': value}}
        >
            <div className="rating-view__stars">
                <img
                    className="rating-view__stars-unfilled"
                    src={starsUnfilledImgSrc}
                    width={98}
                    height={18}
                    alt=""
                />
                <img
                    className="rating-view__stars-filled"
                    src={starsFilledImgSrc}
                    width={98}
                    height={18}
                    alt=""
                />
            </div>
            {label && (
                <div className="rating-view__label">{label}</div>
            )}
        </div>
    )
}

export default RatingView