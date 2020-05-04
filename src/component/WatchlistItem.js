import React, {Component} from 'react'
import { withRouter } from "react-router";

class WatchlistItem extends Component {


  removeFromWatchlist = () => {
    fetch(`http://localhost:3000/api/v1/watchlist_items/${this.props.id}`, {
      method: "DELETE"
    })
    .then(resp => resp.json())
    .then(data => { 
      this.props.handleRemoveFromWatchlist(data)
    })
    
    // this.props.history.push('/watchlist')
  }
  render(){
    console.log('delete from watchlist props id', this.props.id)             
    // console.log('watchlist cartiem props', this.props.id)
      return (
        <div className="search-bar">
            <button class="btn btn-danger" onClick={this.removeFromWatchlist}>revome</button>
            <img  className = "img-fluid" src={this.props.item.imgUrl} />
            <p> {this.props.title} </p>
            <p> ${this.props.item.price} </p>
            <p> {this.props.item.location} </p>
            <p> {this.props.item.condition} </p>
        </div>
      )
  }
}

export default withRouter(WatchlistItem)


// import React from 'react'

// function SearchBar(props) {

//   return (
//     <div className="search-bar">
//       <input onChange={props.handleChange} value={props.searchTerm} placeholder="🔍 Search Item"/>
//     </>
//   )
// }

// export default SearchBar