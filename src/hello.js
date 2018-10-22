import React from 'react'
import ReactDOM from 'react-dom'

const App = () => (
  <section>
    <h1>Hello!</h1>
    <p>How are you?</p>
  </section>
)

const div = document.getElementById('app')
ReactDOM.render(<App />, div)
