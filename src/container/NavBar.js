import React from 'react';
// import {Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom';

import '../App.css';
import { SellItem, Watchlist, Summary , SearchBar, Currency, 
  FilterBar, ShoppingCart, UserController} from '../component'; 
import {connect} from 'react-redux'


function NavBar(props){
    console.log('nav bar prop countShoppingCartitems length', props.shoppingCartItems.length)
  return (
   <div className=" navbar fixed-top navbar-dark bg-primary">
   
          <div className="navDiv"> 
          

          <Link to="/items"><div className="navCLass " >Home</div></Link>


          <Link to="/items/sell">
              <div className="navCLass">Sell</div>
          </Link>
          
          {/* <div className="navCLass"> 
            <SearchBar handleChange={props.handleChange} searchTerm={props.searchTerm}/> </div> */}
          
          <div className="navCLassFilter "> 
            <FilterBar handleChange={props.handleChange} 
                       searchTerm={props.searchTerm}
                       sortChoice={props.sortChoice}
                      //  handleSort={props.handleSort}

            /> </div>
        <Link to="/watchlist">
            <div className="navCLass">👓 list</div>
        </Link>

        <Link to="/shoppingcart">
            <div className="navCLass">
             <span className="shopItemNum">{props.shoppingCartItem.length}</span> 
             Shopping 🛒</div>
        </Link>

        <Link to="/items/summary">
            <div className="navCLass">Summary</div> 
        </Link>

        <Link to="/currency">
            <div className="navCLass">Currency</div>
        </Link>

        <Link to="/profile">
            <div className="navCLass">Profile</div>
        </Link>
          <div className="navBarLogin"> 
            <UserController  logout={props.logout} currentUser={props.currentUser} /> </div>

      </div>
      </div>
      
  )
}

function msp(state){
    return { 
        shoppingCartItems: state.shoppingCartItems, 
      // shopItemNum: state.shopItemNum
         
    }
  }


// const mdp = dispatch => {
//     return {
//         countShoppingCartitems: () => dispatch({type: 'COUNTSHOPPINGCARTITEMS'}),
//     }
//   }

export default  connect(msp)(NavBar)
