import {
  observe,
  fromEvent,
  scan,
} from 'most'
import { holdSubject } from 'most-subject'
import snabbdom from 'snabbdom'
import snabbdomClass from 'snabbdom/modules/class'
import snabbdomProps from 'snabbdom/modules/props'
import snabbdomEventlisteners from 'snabbdom/modules/eventlisteners'
import snabbdomStyle from 'snabbdom/modules/style'
const patch = snabbdom.init([
  snabbdomClass,
  snabbdomProps,
  snabbdomEventlisteners,
  snabbdomStyle,
])

// Create stream of actions
const createStream = holdSubject

// Action dispatcher
const dispatch = (action, actions$) => actions$.next(action)

// Logging
const logState = state => console.log('Current state: ', state)
const enableLogging = state$ => observe(logState, state$)

// Run function (waits for initial DOM render)
const run = (f, mountNode) =>
  fromEvent('DOMContentLoaded', window).take(1).observe(_ => f(mountNode))

// Render virtual DOM node changes to the DOM as they stream in
const renderChanges = vTree$ =>
  mountNode => scan(patch, mountNode, vTree$).drain()

export {
  createStream,
  dispatch,
  enableLogging,
  renderChanges,
  run,
}
