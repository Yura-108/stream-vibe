import './Select.scss'
import classNames from 'classnames'
import getIdFromTitle from "@/utils/getIdFromTitle.js";

const Select = (props) => {
  const {
    className,
    id = getIdFromTitle(props.label),
    label,
    isLabelHidden = true,
    /**
     * Array<{
     *   value: string
     *   isSelected?: boolean
     * }>
     */
    options = [],
    buttonClassName,
  } = props;

  const IDs = {
    originalControl: id,
    label: `${id}-label`,
    dropdown: `${id}-dropdown`,
  };

  const selectedOptions = options.find(({isSelected}) => isSelected) ?? options[0];

  return (
    <div
      className={classNames(className, 'select')}
      data-js-select={""}
    >
      <label id={IDs.label} htmlFor={IDs.originalControl} className={classNames('select__label', {
        'visually-hidden': isLabelHidden,
      })}>
        {label}
      </label>
      <select
        className={classNames('select__original-control', buttonClassName)}
        id={IDs.originalControl}
        tabIndex={-1}
        defaultValue={selectedOptions.value}
        data-js-select-original-control={""}
      >
        {options.map(({value}, index) => (
          <option value={value} key={index}>{value}</option>
        ))}
      </select>
      <div className="select__body">
        <div
          className={classNames('select__button', buttonClassName)}
          role={"combobox"}
          aria-expanded={false}
          aria-haspopup="listbox"
          aria-controls={IDs.dropdown}
          aria-labelledby={IDs.label}
          tabIndex={0}
          data-js-select-button={""}
        >
          {selectedOptions.value}
        </div>
        <div
          className={"select__dropdown"}
          id={IDs.dropdown}
          role="listbox"
          aria-labelledby={IDs.label}
          data-js-select-dropdown={""}
        >
          {options.map((option, index) => {
            const {value, isSelected} = option;

            return (
              <div
                className={classNames('select__option', {
                  'is-selected': isSelected,
                  'is-current': isSelected,
                })}
                id={`${id}-option-${index}`}
                role="option"
                aria-selected={isSelected}
                data-js-select-option={""}
                key={index}
              >
                {value}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Select