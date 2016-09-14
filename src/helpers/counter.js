import h from 'snabbdom/h'
import hh from 'hyperscript-helpers'
const { h1, h2, div, br } = hh(h)
import { btn } from './'

const counter = ({ title, subtitle, decrement, increment }, state) =>
  div('.counter', [
    h1(title),
    h2(subtitle),
    br(),
    br(),
    btn('-', decrement),
    h1(state),
    btn('+', increment),
  ])

export default counter
