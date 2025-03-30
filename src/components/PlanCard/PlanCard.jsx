import './PlanCard.scss'
import classNames from 'classnames'
import Button from "@/components/Button/index.js";

const PlanCard = (props) => {
  const {
    className,
    title,
    description,
    price
  } = props;

  return (
    <div
      className={classNames(className, 'plan-card')}
    >
      <div className="plan-card__info">
        <h3 className="plan-card__title h4">
          {title}
        </h3>
        <div className="plan-card__description">
          <p>{description}</p>
        </div>
      </div>
      <div className="plan-card__condition">
        <span className="plan-card__price">{price.value}</span>
        <span className="plan-card__period">{price.label}</span>
      </div>
      <div className="plan-card__actions">
        <Button label={"Start Free Trial"} href={"/subscription"} mode={"black-08"} />
        <Button label={"Choose Plan"} href={"/subscription"} />
      </div>
    </div>
  )
}

export default PlanCard