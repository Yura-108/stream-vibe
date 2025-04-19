import './Seasons.scss';
import AccordionGroup from "@/components/AccordionGroup/index.js";
import seasonItems from "@/components/Seasons/seasonItems.js";
import Accordion from "@/components/Accordion/index.js";
import EpisodeCard from "@/components/EpisodeCard/index.js";


const Seasons = (props) => {
  const {
    className,
  } = props;

  return (
    <AccordionGroup
      className={"seasons"}
      mode={'dark'}
      isOrderedList={false}
    >
      {seasonItems.map(({title, subtitle, episodes}, index) => (
        <Accordion
          title={title}
          subtitle={subtitle}
          titleLevelClassName={'h4'}
          name={"seasons"}
          isOpen={index === 0}
          id={`season-${index}`}
          key={index}
          isArrowButton={true}
        >
          <ul className={"seasons__list"}>
            {episodes.map((episode, index) => (
              <li className={"season__item"} key={index}>
                <EpisodeCard {...episode} />
              </li>
            ))}
          </ul>
        </Accordion>
      ))}
    </AccordionGroup>
  )
}

export default Seasons