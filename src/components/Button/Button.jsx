import './Button.scss'
import classNames from 'classnames'
import Icon from "@/components/Icon/index.js";


const Button = (props) => {
    const {
        className, href, type = 'button',
        target, label, isLabelHidden = false,
        iconName, iconPosition = 'before', mode='',
        hasFillIcon,
        extraAttrs
    } = props;
    const isLink = href !== undefined;
    const Component = isLink ? 'a' : 'button';
    const linkProps = {href, target};
    const buttonProps = {type};
    const specificProps = isLink ? linkProps : buttonProps;
    const title = isLabelHidden ? label : undefined;
    const iconComponent = iconName && (
        <Icon className={"button__icon"} name={iconName} hasFill={hasFillIcon} />
    );

    return (
        <Component
            aria-label={title}
            title={title}
            className={classNames(className, 'button', {
                [`button--${mode}`]: mode,
            })}
            {...specificProps}
            {...extraAttrs}
        >
            {iconPosition === 'before' && (
                iconComponent
            )}
            {!isLabelHidden && (
                <span className={"button-label"}>{label}</span>
            )}
            {iconPosition === 'after' && (
                iconComponent
            )}
        </Component>
    )
}

export default Button;