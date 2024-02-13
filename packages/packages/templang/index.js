const { init, h, thunk } = require('snabbdom');
const patch = init([thunk]);

module.exports = {
  createVirtualNode(template, state, props) {
    return template(state, props);
  },

  updateState(oldVnode, newState) {
    const newVnode = this.createVirtualNode(oldVnode.data.template, newState, oldVnode.data.props);
    patch(oldVnode, newVnode);
  },
};