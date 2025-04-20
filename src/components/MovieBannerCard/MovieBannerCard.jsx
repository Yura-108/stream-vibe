import './MovieBannerCard.scss'
import classNames from 'classnames'
import {Image} from "minista";
import Button from "@/components/Button/index.js";

const MovieBannerCard = (props) => {
  const {
    className,
    title,
    titleId,
    TitleTag = 'h2',
    description,
    imgSrc,
    isSmallPaddingY = false,
  } = props;

  return (
    <div
      className={classNames(className, 'movie-banner-card')}
    >
      <Image src={imgSrc} className={"movie-banner-card__image"}/>
      <div className={classNames("movie-banner-card__inner", {
        'movie-banner-card__inner--small-padding-y': isSmallPaddingY
      })}>
        <div className="movie-banner-card__body">
          <TitleTag id={titleId} className={"movie-banner-card__title h3"}>{title}</TitleTag>
          <div className="movie-banner-card__description hidden-mobile">
            <p>{description}</p>
          </div>

        </div>
        <footer className="movie-banner-card__footer">
          <Button
            className="movie-banner-card__play-button"
            iconName={"play"}
            label={"Play Now"}
            hasFillIcon
          />
          <div className="movie-banner-card__actions">
            <Button
              mode={"black-06"}
              iconName={"plus"}
              label={"Add to playlist"}
              isLabelHidden
            />
            <Button
              mode={"black-06"}
              iconName={"like"}
              label={"Like"}
              isLabelHidden
            />
            <Button
              mode={"black-06"}
              iconName={"volume"}
              label={"Mute"}
              isLabelHidden
            />
          </div>
        </footer>
      </div>
    </div>
  )
}

export default MovieBannerCard