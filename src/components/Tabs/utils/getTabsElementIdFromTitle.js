import getIdFromTitle from "@/utils/getIdFromTitle.js";

const getTabsElementIdFromTitle = title => {
  const titleFormatted =getIdFromTitle(title);

  return {
    buttonId: `${titleFormatted}-tab`,
    contentId: `${titleFormatted}-tabpanel`
  }
}

export default getTabsElementIdFromTitle;