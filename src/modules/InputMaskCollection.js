import getAttrNameFromSelector from "@/utils/getAttrNameFromSelector.js";
import IMask from "imask";

const rootSelector = '[data-js-input-mask]';

class InputMask {
  selectors = {
    root: rootSelector,
  }

  constructor(rootElement) {
    this.rootElement = rootElement;
    this.init()
  }

  init() {
    const mask = this.rootElement.getAttribute(
      getAttrNameFromSelector(this.selectors.root)
    );

    IMask(this.rootElement, { mask })
  }
}

class InputMaskCollection {
  constructor() {
    this.init();
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((el) => {
      new InputMask(el);
    })
  }
}

export default InputMaskCollection;