import React, {Component} from 'react'
import { withRouter } from "react-router";

class ShoppingCartItem extends Component {


  removeFromShoppingCart = () => {
    fetch(`http://localhost:3000/api/v1/shopping_cart_items/${this.props.id}`, {
      method: "DELETE"
    })
    .then(resp => resp.json())
    .then(data => { 
      this.props.handleRemoveFromShoppingCart(data)
    })
    
    // this.props.history.push('/watchlist')
  }
  render(){
    console.log('delete from shoppingCart props id', this.props.id)             
      return (
        <div className="search-bar">
            <img  className = "img-fluid" src={this.props.item.imgUrl} />
            <p> {this.props.title} </p>
            <p> ${this.props.item.price} </p>
            <p> {this.props.item.location} </p>
            <p> {this.props.item.condition} </p>
            <button class="btn btn-danger" onClick={this.removeFromShoppingCart}>revome</button>
            <br></br>
            <br></br>
        </div>
      )
  }
}

export default withRouter(ShoppingCartItem)


// import React from 'react'

// function SearchBar(props) {

//   return (
//     <div className="search-bar">
//       <input onChange={props.handleChange} value={props.searchTerm} placeholder="🔍 Search Item"/>
//     </>
//   )
// }

// export default SearchBar