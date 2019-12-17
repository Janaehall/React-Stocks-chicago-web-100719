import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  createStocks = () => {
    return this.props.stocks.map(stock => {
      return <Stock stock={stock} togglePortfolio={this.props.togglePortfolio} myPort={true}/>
    })
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.createStocks()
          }
      </div>
    );
  }

}

export default PortfolioContainer;
