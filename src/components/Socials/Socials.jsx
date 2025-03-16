import './Socials.scss';
import classNames from "classnames";
import Button from "@/components/Button";

const Socials = (props) => {
  const {
    className, socialLinks
  } = props;
  return (
    <div className={classNames(className, 'soc1als')}>
      <ul className="soc1als__list">
        {socialLinks.map(({label, iconName}, index) => (
          <li key={index} className={"soc1al__item"}>
            <Button
              className={"soc1als_link"}
              mode={"black-10"}
              href={"/"}
              target={"_blank"}
              label={label}
              isLabelHidden
              iconName={iconName}
              hasFillIcon
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Socials;