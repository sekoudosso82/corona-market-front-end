import React, {Component} from 'react';

import { useHistory } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

import '../App.css';
import Items from '../component/Items';
import SellItem from '../component/SellItem';
import ShowSingleItem from '../component/ShowSingleItem';
import Summary from '../component/Summary';
import {connect} from 'react-redux'



class  ItemsContainer extends Component {
  state = { 
    items: [],     
  }
   
  componentDidMount(){
    fetch('http://localhost:3000/api/v1/items')
    .then(resp => resp.json())
    .then(items => this.setState({items}) )
  } 
  handleChange = (event) => {
    this.setState({
          [event.target.name]: event.target.value
    })
  }

  addItem = (newItem) => {
    this.setState({ items: [...this.state.items, newItem]
    })
  }
  DeleteItem = (itemToDelete) => {
    let newItems = this.state.items.filter(item => item.id !== itemToDelete.id)
    this.setState({ items: newItems })
  }

  handleUpdateItem = (updatedItem) => {
    let newItems = this.state.items.map(item => {
        if (item.id===updatedItem.id){
            return updatedItem
        }else {
            return item
        }
    })
    this.setState({items: newItems})
}
  

  render(){
    console.log('items container state: ', this.state)
    console.log('****item Container currentUser.id  ***' , this.props.currentUser.id)
    console.log('****item Container props.id  ***' , this.props.id)
      return (
        <div className="App">

        <Switch>
        <Route path='/items/summary' render={routerProps => 
            <Summary {...routerProps} items={this.state.items}  
            currentUser ={this.props.currentUser} 
            handleUpdateItem={this.handleUpdateItem} /> }
          />
          
        <Route path='/items/sell' render={routerProps => 
            <SellItem {...routerProps} addItem={this.addItem} userId={this.props.currentUser.id} /> }
          />
          {/* <Route path='/items/:id' component={ShowSingleItem} /> */}
          <Route path='/items/:id' render={routerProps => 
            <ShowSingleItem {...routerProps} 
            DeleteItem={this.DeleteItem} 
            handleUpdateItem={this.handleUpdateItem}
            handleChange={this.handleChange} 
            userId={this.props.currentUser.id}
            updateShopItem={this.props.updateShopItem} />} 
          />

          <Route path='/items' render={routerProps => 
            <Items {...routerProps} currentUser ={this.props.currentUser} 
            items={this.state.items} searchTerm={this.props.searchTerm}
            sortChoice={this.props.sortChoice} 
            
            /> }
          />

          
          
        </Switch>
        </div>
      );
  }
}

function msp(state){
  return { 
    items: state.items,     
  }
}

export default connect(msp)(ItemsContainer);


// import React, {Component} from 'react';

// import { useHistory } from 'react-router-dom';
// import { Route, Switch } from 'react-router-dom';

// import '../App.css';
// import Items from '../component/Items';
// import SellItem from '../component/SellItem';
// import ShowSingleItem from '../component/ShowSingleItem';



// class  ItemsContainer extends Component {
//   state = { 
//     items: [],     
//   }
   
//   componentDidMount(){
//     fetch('http://localhost:3000/api/v1/items')
//     .then(resp => resp.json())
//     .then(items => this.setState({items}) )
//   } 
//   handleChange = (event) => {
//     this.setState({
//           [event.target.name]: event.target.value
//     })
//   }

//   addItem = (newItem) => {
//     this.setState({ items: [...this.state.items, newItem]
//     })
//   }
//   DeleteItem = (itemToDelete) => {
//     let newItems = this.state.items.filter(item => item.id !== itemToDelete.id)
//     this.setState({ items: newItems })
//   }

//   handleUpdateItem = (updatedItem) => {
//     let newItems = this.state.items.map(item => {
//         if (item.id===updatedItem.id){
//             return updatedItem
//         }else {
//             return item
//         }
//     })
//     this.setState({items: newItems})
// }
  

//   render(){
//     console.log('****item Container currentUser.id  ***' , this.props.currentUser.id)
//     console.log('****item Container props.id  ***' , this.props.id)
//       return (
//         <div className="App">

//         <Switch>
//         <Route path='/items/sell' render={routerProps => 
//             <SellItem {...routerProps} addItem={this.addItem} userId={this.props.currentUser.id} /> }
//           />
//           {/* <Route path='/items/:id' component={ShowSingleItem} /> */}
//           <Route path='/items/:id' render={routerProps => 
//             <ShowSingleItem {...routerProps} 
//             DeleteItem={this.DeleteItem} 
//             handleUpdateItem={this.handleUpdateItem}
//             handleChange={this.handleChange} 
//             userId={this.props.currentUser.id} />} 
//           />

//           <Route path='/items' render={routerProps => 
//             <Items {...routerProps} currentUser ={this.props.currentUser} 
//             items={this.state.items} searchTerm={this.props.searchTerm}
//             sort={this.state.sort} 
            
//             /> }
//           />
          
//         </Switch>
//         </div>
//       );
//   }
// }


// export default ItemsContainer;

