import h from 'snabbdom/h'
import hh from 'hyperscript-helpers'
const { h1, h2, div, br } = hh(h) // eslint-disable-line fp/no-unused-expression
import { btn } from './'

const counter = ({ title, subtitle, decrement, increment }, state) => {
  return div('.counter', [
    h1(title),
    h2(subtitle),
    br(),
    br(),
    // div('.counter-btn', { on: { click: decrement } }, '-'),
    btn('-', decrement),
    h1(state),
    // div('.counter-btn', { on: { click: increment } }, '+'),
    btn('+', increment),
  ])
}

export default counter
