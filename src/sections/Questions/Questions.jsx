import './Questions.scss';
import classNames from 'classnames';
import Section from "@/layouts/Section";
import Grid from "@/components/Grid";
import Button from "@/components/Button";

const Questions = (props) => {
    const {
        className,
    } = props

    return (
        <Section
            className={classNames(className, 'questions')}
            title="Frequently Asked Questions"
            titleId="questions-title"
            description="Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."
            actions={(<Button label={"Ask a question"} />)}
        >
          gg
          {/*<Grid columns={2}></Grid>*/}
        </Section>
    )
}

export default Questions