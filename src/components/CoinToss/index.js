// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    Total: 0,
    Heads: 0,
    Tails: 0,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  tossTheCoin = () => {
    // const {Total, Heads, Tails} = this.state

    const randomInteger = Math.floor(Math.random() * 2)
    console.log(randomInteger)

    if (randomInteger === 0) {
      this.setState(prevstate => ({
        Heads: prevstate.Heads + 1,
        Total: prevstate.Total + 1,
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
    } else {
      this.setState(prevstate => ({
        Tails: prevstate.Tails + 1,
        Total: prevstate.Total + 1,
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
    }
  }

  render() {
    const {Total, Heads, Tails, imgUrl} = this.state
    return (
      <div className="Main-container">
        <div className="Content-container">
          <h1 className="Heading">Coin Toss Game</h1>
          <p className="Heads-or-tails">Heads (or) Tails</p>
          <img src={imgUrl} alt="toss result" className="Coin-image" />
          <button
            className="Toss-coin-Button"
            type="button"
            onClick={this.tossTheCoin}
          >
            Toss Coin
          </button>
          <div className="Toss-count">
            <p className="Count">Total: {Total}</p>
            <p className="Count">Heads: {Heads}</p>
            <p className="Count">Tails: {Tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
