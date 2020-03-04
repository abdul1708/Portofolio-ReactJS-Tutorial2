import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'

ReactDOM.render(<App />, document.querySelector('.container'))

// this will remove component from DOM after 10000 ms
setTimeout(() => {
  ReactDOM.unmountComponentAtNode(document.querySelector('.container'))
}, 10000)