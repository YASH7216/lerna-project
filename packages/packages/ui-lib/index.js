const templang = require('../templang');
const { init, h, thunk } = require('snabbdom');
const patch = init([thunk]);

class UIComponent {
  constructor(template, initialState, container) {
    this.state = initialState;
    this.container = container;
    this.vnode = templang.createVirtualNode(template, this.state, { updateState: this.updateState.bind(this) });
    patch(container, this.vnode);
  }

  updateState(newState) {
    this.state = { ...this.state, ...newState };
    templang.updateState(this.vnode, this.state);
  }
}

module.exports = UIComponent;