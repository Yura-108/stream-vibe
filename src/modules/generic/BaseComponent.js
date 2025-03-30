class BaseComponent {
  constructor() {
    if(this.constructor === BaseComponent) {
      throw new Error("Cannot construct BaseComponent");
    }
  }

  getProxyState(initialState) {
    return new Proxy(initialState, {
      get: (target, prop) => target[prop],
      set: (target, prop, newValue) => {
        const oldValue = target[prop];

        target[prop] = newValue;

        if (newValue !== oldValue) {
          this.updateUI();
        }

        return true
      },
    })
  }

  /* Перерисовка UI в отвкт на обновление состояния */
  updateUI() {
    throw new Error('Необходимо реализовать метод updateUI');
  }
}

export default BaseComponent;