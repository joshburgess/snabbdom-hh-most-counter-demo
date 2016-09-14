import h from 'snabbdom/h'
import hh from 'hyperscript-helpers'
const { div } = hh(h)

const btn = (text, clickHandler) =>
  div('.counter-btn', { on: { click: clickHandler } }, text)

export default btn
