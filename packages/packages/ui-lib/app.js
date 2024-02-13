const { h } = require('snabbdom');
const UIComponent = require('./packages/ui-lib/dist/ui-lib');

const template = (state, { updateState }) => {
  return h('div', [
    h('h1', state.count),
    h('button', { on: { click: () => updateState({ count: state.count + 1 }) } }, 'Add'),
  ]);
};

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  const component = new UIComponent(template, { count: 0 }, app);

  console.log('Component mounted');
});