import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  constructor(){
    super()
    this.state = {
      stocks: [],
      myStocks: [],
      filter: 'All',
      priceSort: false,
      alphabetSort: false
    }
  }
  

  componentDidMount(){
    fetch('http://localhost:3000/stocks')
    .then(resp => resp.json())
    .then(stocks => {
      this.setState({
        stocks: this.addAttr(stocks)
      })
    })
  }

  toggleSort = sortBy => {
    this.setState({
      [sortBy]: !this.state[sortBy]
    })
  }


  addAttr = stocks => {
    return stocks.map(stock => {
      return {...stock, portfolio: false}
    })
  }

  togglePortfolio = (thisStock, myPort) => {
    let port
    myPort === true? port = false : port = true
    this.setState({
      stocks: this.state.stocks.map(stock => {
        return stock === thisStock ? {...stock, portfolio: port} : stock
      })
    })
  }

  handleFilter = e => {
    this.setState({
      filter: e.target.value
    })
  }

  filterStocks = () => {
    let stocks = this.state.stocks
    if(this.state.alphabetSort) {
      stocks = stocks.sort((a,b) => a.name > b.name? 1: -1)
    }
    if(this.state.priceSort) {
      stocks = stocks.sort((a,b) => a.price > b.price? 1: -1)
    }
    if(this.state.filter !== "All") {
      stocks = stocks.filter(stock => stock.type === this.state.filter)
    }
    return stocks
  }

  // sortStocks = e  => {
  //   let stocks 
  //   if (e.target.value === "Alphabetically") {
  //     stocks = this.state.stocks.sort((a,b) => a.name > b.name? 1 : -1)
  //   } else if (e.target.value  === "Price") {
  //     stocks = this.state.stocks.sort((a,b) => a.price > b.price? 1: -1)
  //   } else {
  //     stocks = this.state.stocks
  //   }
  //   this.setState({
  //     stocks: stocks
  //   })
  // }


  render() {
    console.log(this.state.sort)
    return (
      <div>
        <SearchBar handleFilter={this.handleFilter} toggleSort={this.toggleSort} alphabet={this.state.alphabetSort} price={this.state.priceSort}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.filterStocks()} togglePortfolio={this.togglePortfolio}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.filterStocks().filter(stock => stock.portfolio)} togglePortfolio={this.togglePortfolio}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
