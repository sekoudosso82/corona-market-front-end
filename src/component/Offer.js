import React, {Component} from 'react';

import '../App.css';
import logo from '../logo.svg';


class Offer extends Component {
  handleDelete = () => {
    let id  = this.props.offer.id;              
    fetch(`http://localhost:3000/api/v1/offers/${id}`, {
        method: "DELETE"
    })
    .then(resp => resp.json())
    .then(data => { 
        console.log('delete data id', data.id)
        this.props.DeleteOffer(data)
      })
    
  }
  handleAcceptOffer = () => {
    let id  = this.props.offer.item.id; 
    let id2  = this.props.offer.id;
    // data = {...this.props.offer, price:}             
    fetch(`http://localhost:3000/api/v1/items/${id}`, {
      method: 'PATCH',
      headers: {"Content-Type": "application/json",
                "Accept": "application/json"},    
      body: JSON.stringify({price:this.props.offer.amount})
    })
    .then(resp => resp.json())
    .then(renderedData => { 
            console.log('offer posted data ', renderedData)
            if(renderedData.errors){
                alert(renderedData.errors)} 
            else {
                alert('Offer Successfully accepted')
                this.props.handleUpdateItem(renderedData)
                fetch(`http://localhost:3000/api/v1/offers/${id2}`, {
                    method: "DELETE"
                })
                .then(resp => resp.json())
                .then(data => { 
                    console.log('delete data id', data.id)
                    this.props.DeleteOffer(data)
                  })
              }


        // console.log('new price after offer accepted ', data)
        // console.log('this.props.offer ', this.props.offer)
        // this.props.updateOffer(data)
      })

    
  }

  render(){

  
  return (
    <div className="App">
      
      <div className="summarySoldDiv">
                    <img  className = "img-thumbnail" src={this.props.offer.item.imgUrl} />
                    <p>{this.props.offer.user.username}</p>
                    <p>offer price: ${this.props.offer.amount}</p>
                    <p>original price: ${this.props.offer.item.price}</p>
                    <button onClick={this.handleAcceptOffer} className ="btn btn-success singleButtonSized">Accept</button>
                    <button onClick={this.handleDelete} className ="btn btn-danger singleButtonSized">Decline</button>
                    
                    <br></br>
                    <br></br>
              </div>

    </div>
  );
}
}

export default Offer;


// import React from 'react';

// import '../App.css';
// import logo from '../logo.svg';


// function Offers() {
//   return (
//     <div className="App">
//       offers component

//     </div>
//   );
// }

// export default Offers;