import React, {Component} from 'react'
import { withRouter } from "react-router";
import {connect} from 'react-redux'


class ShoppingCartItem extends Component {


  // removeFromShop = () => {
  //   fetch(`http://localhost:3000/api/v1/shopping_cart_items/${this.props.id}`, {
  //     method: "DELETE"
  //   })
  //   .then(resp => resp.json())
  //   .then(data => { 
  //     this.props.RemoveFromShoppingCart(data)
  //   })
    
  //   // this.props.history.push('/watchlist')
  // }
  render(){
    console.log('delete from shoppingCart props id', this.props.id)             
      return (
        <div className="search-bar">
            <img  className = "img-fluid" src={this.props.item.imgUrl} />
            <p> {this.props.title} </p>
            <p> ${this.props.item.price} </p>
            <p> {this.props.item.location} </p>
            <p> {this.props.item.condition} </p>
            <button class="btn btn-danger" onClick={() => this.props.removeFromShoppingCart(this.props.id)}>revome</button>
            <br></br>
            <br></br>
        </div>
      )
  }
}

const mdp = dispatch => {
  return {
    removeFromShoppingCart: (id) => dispatch({type: 'REMOVE_FROM_SHOPPINGCART', 
                                         payload: {id}}),  
  }
}

export default withRouter(connect(null, mdp)(ShoppingCartItem))

