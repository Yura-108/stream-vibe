import './Grid.scss'
import classNames from 'classnames'

const Grid = (props) => {
    const {
        className,
        columns=1,
        children,
    } = props

    return (
        <ul
            className={classNames(className, 'grid', {
                [`grid--${columns}`]: columns > 1,
            })}
        >
            {children.map((child, index) => (
                <li key={index} className={"grid__item"}>
                    {child}
                </li>
            ))}
        </ul>
    )
}

export default Grid