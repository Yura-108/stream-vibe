import './Collections.scss'
import classNames from 'classnames'
import Tabs from "@/components/Tabs/index.js";
import collectionGroups from "@/sections/Collections/collectionGroups.js";
import getIdFromTitle from "@/utils/getIdFromTitle.js";
import Section from "@/layouts/Section/index.js";
import SliderNavigation from "@/components/Slider/components/SliderNavigation/index.js";
import Slider from "@/components/Slider/index.js";
import CategoryCard from "@/components/CategoryCard/index.js";
import MovieCard from "@/components/MovieCard/index.js";

const Collections = (props) => {
  const {
    className,
  } = props

  return (
    <Tabs
      className={classNames(className, 'collections container')}
      title={"collection"}
      isEnableOnlyOnMobile
      items={collectionGroups.map((collectionGroup, index) => ({
        isActive: collectionGroup.isActive,
        title: collectionGroup.title,
        children: (
          <div className={classNames(className, 'collection__group')}>
            <p className="collection__title hidden-mobile">{collectionGroup.title}</p>
            {collectionGroup.items.map((collectionItem, index) => {
              const {title, movieItems, categoryItems, sliderParams} = collectionItem;
              const titleFormatted = `${getIdFromTitle(collectionGroup.title)}-${getIdFromTitle(title)}`;
              const titleId = `${titleFormatted}-title`;
              const sliderNavigationId = `${titleFormatted}-slider-navigation`;

              return (
                <Section
                  className={"collections__section"}
                  title={title}
                  titleId={titleId}
                  actions={(<SliderNavigation id={sliderNavigationId} mode="tile"/>)}
                  isActionsHiddenOnMobile
                  key={index}
                >
                  <Slider
                    sliderParams={sliderParams}
                    navigationTargetElementId={sliderNavigationId}
                    isBeyondTheViewportOnMobileS
                  >
                    {categoryItems?.map((categoryItem, index) => (
                      <CategoryCard {...categoryItem} key={index} />
                    )) ?? movieItems?.map((movieItem, index) => (
                      <MovieCard {...movieItem} key={index} />
                    ))}
                  </Slider>
                </Section>
              )
            })}
          </div>
        )
      }))}
    />
  )
}

export default Collections