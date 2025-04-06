import './CategoryCard.scss'
import classNames from 'classnames'
import {Image} from "minista";
import Icon from "@/components/Icon";
import Badge from "@/components/Badge/index.js";

const CategoryCard = (props) => {
  const {
    className,
    title,
    images = [],
    badge
  } = props

  return (
    <a
      className={classNames(className, 'category-card')}
      href={"/movies"}
    >
      <div className="category-card__images">
        {images.map((imgSrc, index) => (
          <Image
            key={index}
            src={imgSrc}
            className="category-card__image"
          />
        ))}
      </div>
      <div className="category-card__body">
        <h3 className="category-card__title">
          {badge && (
            <Badge
              className="category-card__badge"
              mode={"accent"}
              isBig
            >
              {badge}
            </Badge>
          )}
          <span>{title}</span>
        </h3>
        <Icon className="category-card__icon" name="arrow-right" />
      </div>
    </a>
  )
}

export default CategoryCard