import './Badge.scss'
import classNames from 'classnames'
import Icon from "@/components/Icon";

const Badge = (props) => {
    const {
        className,
        mode = '', // '' - default | accent
        isBig = false,
        iconName,
        hasFillIcon,
        iconAriaLabel,
        children,
    } = props;

    return (
        <div
            className={classNames(className, 'badge', {
                [`badge--${mode}`]: mode,
                'badge--big': isBig,
            })}
        >
            {iconName && (
                <Icon
                    className={"badge__icon"}
                    name={iconName}
                    hasFill={hasFillIcon}
                    aria-label={iconAriaLabel}
                />
            )}
            <span>{children}</span>
        </div>
    )
}

export default Badge