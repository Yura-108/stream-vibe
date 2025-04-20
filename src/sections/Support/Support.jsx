import './Support.scss'
import classNames from 'classnames'
import {Image} from "minista";
import Field from "@/components/Field/index.js";
import Checkbox from "@/components/Checkbox/index.js";
import Button from "@/components/Button/index.js";
import Select from "@/components/Select/index.js";

const Support = (props) => {
  const {
    className,
  } = props;

  const titleId = 'support-title';

  return (
    <section
      className={classNames(className, 'support container')}
      aria-labelledby={titleId}
    >
      <div className="support__body">
        <div className="support__info">
          <h1 id={titleId} className={"support__title h2"}>Welcome to our support page!</h1>
          <div className="support__description">
            <p>We're here to help you with any problems you may be having with our product.</p>
          </div>
        </div>
        <Image src={'/src/assets/images/support/1.png'} className={"support__image"} />
      </div>
      <form action="" className="support__form">
        <Field
          className="support__form-cell"
          label = 'First Name'
          placeholder = 'Ivan'
          isRequired
        />
        <Field
          className="support__form-cell"
          label = 'Last Name'
          placeholder = 'Ivanov'
          isRequired
        />
        <Field
          className="support__form-cell"
          label = 'Email'
          type="email"
          placeholder = 'example@example.com'
          isRequired
        />
        <Field
          className="support__form-cell"
          label = 'Phone Number'
          placeholder = '(999) 999-99-99'
          inputMode={"tel"}
          mask={"(000) 000-00-00"}
          renderBefore={(fieldControlClassName) => (
            <Select
              label={"Phone number prefix"}
              buttonClassName={fieldControlClassName}
              options={[
                {value: '+7', isSelected: true},
                {value: '+1'},
                {value: '+2'},
                {value: '+3'},
              ]}
            />
          )}
        />
        <Field
          className="support__form-cell support__form-cell--wide"
          label = 'Message'
          placeholder = 'Hi! I have a question...'
          type={'textarea'}
          isRequired
        />
        <div className="support__form-cell support__form-cell--wide support__form-cell--actions">
          <Checkbox
            className="support__form-agreement"
            label = 'I agree with Terms of Use and Privacy Policy'
            isRequired
          />
          <Button
            className="support__form-submit-button"
            label={"Send Message"}
            type="submit"
          />
        </div>
      </form>
    </section>
  )
}

export default Support