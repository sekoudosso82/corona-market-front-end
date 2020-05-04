import React, {Component} from 'react';

import '../App.css';
import WatchlistItem from './WatchlistItem'
import {connect} from 'react-redux'



class Watchlist extends Component {
  state = { 
    watchlistItems: [],     
  }
  componentDidMount(){
    fetch('http://localhost:3000/api/v1/watchlist_items')
    .then(resp => resp.json())
    .then(watchlistItems => this.setState({watchlistItems}) )
  } 
  renderWatchlistItems = () => {
        return this.state.watchlistItems
        .filter(item => item.watchlist_id === this.props.currentUser.id)
        .map(item => <WatchlistItem  key={item.id} {...item} 
                      handleRemoveFromWatchlist={this.handleRemoveFromWatchlist}/>            
            )  
  }
  handleRemoveFromWatchlist = (data) => {
        console.log('delete watchlist data id', data.id)
        this.setState({watchlistItems: this.state.watchlistItems
          .filter(item => item.id!==data.id)})
  }

  render(){
    return (
      <div className="App">
                  {this.renderWatchlistItems()} 
      </div>
    );
}}  

function msp(state){
  return { 
    watchlistItems: state.watchlistItems,     
  }
}
 
export default connect(msp)(Watchlist);  


// import React from 'react';

// import '../App.css';


// function Watchlist() {
//   return (
//     <div className="App">
//        👓 List component watchlist watchlist watchlist


//     </div>
//   );
// }

// export default Watchlist;