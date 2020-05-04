import React, {Component} from 'react';

import '../App.css';
import Offer from "./Offer"



class Summary extends Component {
  state = { 
    offers: [],  
    declinedOffer: false   
  }
  toggleDeclinedOffer= () => {
    this.setState({ declinedOffer: !this.state.declinedOffer})
}
   
  componentDidMount(){
    fetch('http://localhost:3000/api/v1/offers')
    .then(resp => resp.json())
    .then(offers => this.setState({offers}) )
  } 
  

  renderSoldItems = () => {
    // items={this.state.items}  currentUser
        let itemTorender = this.props.items        
        return itemTorender
        .filter(item => item.user_id===this.props.currentUser.id)
        .map(item => 
              <div className="summarySoldDiv">
                    <img  className = "img-thumbnail" src={item.imgUrl} />
                    <p>{item.title}</p>
                    <p>${item.price}</p>
                    <p>{item.condition}</p>
              </div>
            ) 
  }

  renderOffers = () => {
    
    // items={this.state.items}  currentUser
        let offerTorender = this.state.offers        
        return offerTorender
        .filter(offer => offer.item.user_id===this.props.currentUser.id)
        .map(offer => <Offer key={offer.id} offer ={offer} 
        toggleDeclinedOffer={this.toggleDeclinedOffer} 
        declinedOffer={this.state.declinedOffer} 
        DeleteOffer={this.DeleteOffer} 
        handleUpdateItem={this.props.handleUpdateItem}
        updateOffer={this.updateOffer}
        
        />
        ) 
  }

  DeleteOffer = (data) => {
      let newOffers = this.state.offers.filter(offer => offer.id !== data.id)
      this.setState({ offers: newOffers })   
  }

  updateOffer = (updateditem) => {
    let newOffers = this.state.offers.map(offer => {
      if (offer.item.id===updateditem.id){
          return {...offer, }
      }else {
          return offer
      }
    })
    this.setState({offers: newOffers})
    // console.log('new offer', newOffers)
    // console.log('updated item', updateditem)
  }

  render()
  {
    console.log('id of declined offer ******',this.state.declinedOffer)
    console.log('summary all items ******',this.props.items)
    return (
      <div className="App topDiv">
        <div className='summaryDiv'>
            Selling Items
            {this.renderSoldItems()}
        </div>
        <div className='summaryDivOffers'>
            Offers 
            {this.renderOffers()} 
        </div>
      
      </div>
    );
  }
}

export default Summary;  


// import React from 'react';

// import '../App.css';
// import logo from '../logo.svg';


// function Summary() {
//   return (
//     <div className="App">
//       Summary

//     </div>
//   );
// }

// export default Summary;