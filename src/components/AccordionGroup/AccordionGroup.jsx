import './AccordionGroup.scss'
import classNames from 'classnames'

const AccordionGroup = (props) => {
  const {
    className,
    columns = 1,
    children,
    isOrderedList = true
  } = props;

  const itemsPerColumn = Math.ceil(children.length / columns);
  console.log(itemsPerColumn);
  const ListTag = isOrderedList ? 'ol' : 'ul'

  return (
    <ListTag className={classNames(className, 'accordion-group', {
      [`accordion-group--${columns}-columns`]: columns > 1,
      'accordion-group--has-counter': isOrderedList
    })}>
      {children.map((child, index) => (
        <li key={index} className={classNames('accordion-group__item', {
          'accordion-group__item--last-column-item': columns > 1 && (index+1) % itemsPerColumn === 0
        })}>
          {child}
        </li>
      ))}
    </ListTag>
  )
}

export default AccordionGroup