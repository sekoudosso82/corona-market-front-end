import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom'
import {LoginForm, SignupForm, Profile, 
        ShowSingleItem, SellItem, Watchlist, 
        Summary, Offer, AllSellings, AllPurchasedItems,  
        ShoppingCart, Items, Currency} from './component'

import { connect } from 'react-redux'
import NavBar from './container/NavBar'
import ItemsContainer from './container/ItemsContainer.js'
import UsersContainer from './container/UsersContainer.js'


class  App extends Component {
  state = { 
    shoppedItem: [],
    shoppingCartItem: [],
    // shopItemNum:null,
    shoppingcartId: null,
    currentUser: null ,
    searchTerm: "",
    sortChoice: '',
  }

  componentDidMount(){
    const token = localStorage.token
    
    if(token){
      fetch("http://localhost:3000/api/v1/auto_login", {
        headers: { "Authorization": token }
      })
      .then(res => res.json())
      .then(response => {
        if (response.errors){
          alert(response.errors)
        } else {
          this.setState({
            currentUser: response
          })
        }})}
  }

  fetchShopItems = () =>{
    fetch('http://localhost:3000/api/v1/shopping_cart_items')
      .then(resp => resp.json())
      .then(data => { 
        this.setState({shoppingCartItem: 
          data.filter(item => item.shopping_cart_id === this.state.currentUser.id), 
          // shopItemNum: data.filter(item => item.shopping_cart_id === this.props.currentUser.id).length
        }) 
        
      }) 
  } 

  emptyShoppingCart = () =>{
        this.setState({shoppingCartItem: [] 
        })  
  } 
  updateShopItem = (data) => { 
    this.setState({ shoppingCartItem: [...this.state.shoppingCartItem, data]})

  }

  


  setUser = (response) => {
    console.log('response in app component', response)
    this.setState({
      currentUser: response.user
    }, () => {
      localStorage.token = response.token
      this.props.history.push("/items")
    })
    
  } 

  // handlenumItem = (numb) => {
  //   this.setState({ shopItemNum: numb })
  // }

  logout = () => {
    this.setState({ 
      currentUser: null
    }, () => { localStorage.removeItem('token')
              //  this.props.history.push('/login')
  })
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }


  render() {
    console.log('this props history ' , this.props.history)
    console.log('****app currentUser  ***' , this.state.currentUser)

  return (

    <>
      
        <NavBar fixed="top"  currentUser={this.state.currentUser} logout={this.logout}
          searchTerm={this.state.searchTerm} 
          sortChoice={this.state.sortChoice}
          handleChange={this.handleChange} 
          shoppingCartItem={this.state.shoppingCartItem} 
          // shopItemNum={this.state.shopItemNum} 

          />

        {this.state.currentUser ? 
        <div> 
        <Switch>
          <Route path="/items" render={routerProps => <ItemsContainer {...routerProps} 
                                                    currentUser={this.state.currentUser} 
                                                    searchTerm={this.state.searchTerm}
                                                    updateShopItem={this.updateShopItem} 
                                                    sortChoice={this.state.sortChoice}/>} />

          <Route path="/watchlist" render={() => <Watchlist currentUser={this.state.currentUser}/>}/>
          <Route path="/shoppingcart" render={() => <ShoppingCart currentUser={this.state.currentUser} 
            fetchShopItems={this.fetchShopItems} 
            shoppingCartItem={this.state.shoppingCartItem} 
            emptyShoppingCart={this.emptyShoppingCart}
          />}/>
      
          <Route path="/profile" render={routerProps => <Profile {...routerProps} currentUser={this.state.currentUser}/>}/>

          {/* <Route path="/summary" component={Summary} /> */}
          {/* <Route path="/offer" component={Offers} /> */}
          <Route path="/allsellings" component={AllSellings} />
          <Route path="/allparchaseditems " component={AllPurchasedItems} />
          
          <Route path="/currency" component={Currency} />
          
        </Switch>
        </div>
        : 
        <div>
            <h1 className="warning"> Please Login or SignUp 🤙  </h1>
          <Switch>
            <Route path="/signup" render={() => <SignupForm  setUser={this.setUser}/>}/>
            <Route path="/login" render={routerProps => <LoginForm {...routerProps} setUser={this.setUser}/>}/>
          </Switch>
        </div>
        }
     
    </>
  );
  }
}

function msp(state){
  return {
    shoppedItem: state.shoppedItem,
    // shopItemNum:null,
    shoppingcartId: state.shoppingcartId,
    currentUser: state.currentUser ,
    searchTerm: state.searchTerm,
    sortChoice: state.sortChoice,
  }
}



export default connect(msp)(App);

