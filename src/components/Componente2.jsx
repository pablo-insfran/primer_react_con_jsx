import './style.css'
import React, { Component } from 'react'

export class Componente2 extends Component {
  render() {
    return (
      <div>
        <h2>Things I need to do:</h2>
        <ol>
            <li>Learn React</li>
            <li>Climb Mt. Everest</li>
            <li>Run a marathon</li>
            <li>Feed the dogs</li>
        </ol>
      </div>
    )
  }
}

export default Componente2;