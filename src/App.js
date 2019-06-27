import React, { Component } from 'react';
import './App.css';
import ListItem from './ListItem/ListItem';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {};
    this.stockArray = ["spy,fb,goog,msft,trc"];

    this.updateStocksToState = this.updateStocksToState.bind(this);
  }

  getStockUrl(stockName){
    return "https://api.iextrading.com/1.0/stock/market/batch?symbols="+stockName+"&types=quote"
  }

  updateStocksToState(stockArray){
    this.setState({
      stocks : stockArray
    });
  }

  componentWillMount(){
    let urlString = this.getStockUrl("spy,fb,goog,msft,trc");
    console.log(urlString)

    let stockArray = new Array();
    fetch(urlString)
    .then( res => res.json() )
    .then( 
      (result) => {
        for(let prop in result){
          if( result.hasOwnProperty(prop) ){
            console.log(result[prop]["quote"]);
            stockArray.push(
              {
                id : result[prop]["quote"]["symbol"],
                name : result[prop]["quote"]["companyName"],
                open : result[prop]["quote"]["open"],
                close : result[prop]["quote"]["close"],
                high : result[prop]["quote"]["high"],
                low : result[prop]["quote"]["low"],
                Volume : result[prop]["quote"]["avgTotalVolume"],
                latestprice :  result[prop]["quote"]["latestPrice"],
                sector : result[prop]["quote"]["sector"]
              }
            );
          }
        }
        this.updateStocksToState(stockArray);
      }
    )
  }

  componentDidMount(){
    //  let stockList = this.state.stocks.map(element=>{
    //     return (
    //     <ListItem 
    //       name = {element.name}
    //       key = {element.id}
    //       opne = {element.open}
    //       close = {element.close}
    //       high = {element.high}
    //       low = {element.low}
    //       volume = {element.volumevolume}
    //       latestprice = {element.latestprice}
    //       sector = {element.sector}
    //     />
    //   )
    // })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to StockBoard</h1>
        </header>
        <div className="stocktable">
            <ListItem 
                name = "Name"
                opne = "Open"
                close = "Close"
                high = "High"
                low = "Low"
                volume = "Adj Close"
                latestprice = "Latest Price"
                sector = "Sector"
                type = "Head"
              />
        {
          <stockList />
        }
        
        </div>
        
      </div>
    );
  }
}

export default App;
