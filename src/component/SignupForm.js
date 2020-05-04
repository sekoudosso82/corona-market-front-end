import React from 'react'

class SignupForm extends React.Component {

  state = {
    username: "",
    password: "",
    passwordConfirmation: "",
    // email: '',
    // phone: '',
    shoppingCartId: null
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    if (this.state.password === this.state.passwordConfirmation){

      fetch("http://localhost:3000/api/v1/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({username: this.state.username, 
                              password: this.state.password,
                             })
      })
      .then(res => res.json())
      .then(response => {
        
        if(response.errors){
          alert(response.errors)} 
        else {
          console.log('new signup data id', response.user.id) 
          this.props.setUser(response)
          let shop = {user_id: response.user.id}
// create shoppingCart({shoppingCartId: response.user.id})
          fetch("http://localhost:3000/api/v1/shopping_carts", {
          method: 'Post',
          headers: {"Content-Type": "application/json",
                    "Accept": "application/json"},    
          body: JSON.stringify({user_id: response.user.id})
          })
          .then(resp=>resp.json())
          .then(data => console.log('shopping cart created',data))
// create watchlist
          fetch("http://localhost:3000/api/v1/watchlists", {
            method: 'Post',
            headers: {"Content-Type": "application/json",
                      "Accept": "application/json"},    
            body: JSON.stringify(shop)
            })
            .then(resp=>resp.json())
            .then(data => console.log('watchlist cart created',data))

            
          }
          
        })
        
        
        
      } else {
        alert("Passwords don't match! check for case_sensitive Password should be atlease 3 characters")
      }
      
      this.setState({
        username: "",
        password: "",
        passwordConfirmation: "",
        
      })
      
    }
    
    render(){
      return (
        
        <form className="formLogin" onSubmit={this.handleSubmit}>
          <div class="form-row">
            <div>       
              <h1 className='salut'> Hi {this.state.username}</h1>
              <input className="form-control sellItemDivInput" placeholder="username" name="username" 
                    value={this.state.username} 
                    onChange={this.handleChange}/>
              
              <input className="form-control sellItemDivInput" placeholder="password" name="password" 
                    value={this.state.password} type="password"  
                    onChange={this.handleChange}/>
             
              <input className="form-control sellItemDivInput" placeholder="passwordConfirmation" name="passwordConfirmation" 
                    value={this.state.passwordConfirmation} type="password"  
                    onChange={this.handleChange}/>

              <input className="form-control sellItemDivInput" placeholder="email" name="email" 
                    value={this.state.email} type="email"  
                    onChange={this.handleChange}/>
            
              <input className="form-control sellItemDivInput" placeholder="phone" name="phone" 
                    value={this.state.phone} type="phone"  
                    onChange={this.handleChange}/>
              
              <button className="form-control sellItemDivInput" type="submit">Sign Up</button>
            </div>
          </div> 
        </form>
    )
  }
  
  
}



export default SignupForm  


// import React from 'react'

// class SignupForm extends React.Component {

//   state = {
//     username: "",
//     password: "",
//     passwordConfirmation: "",
//     // email: '',
//     // phone: '',
//     shoppingCartId: null
//   }

//   handleChange = (event) => {
//     this.setState({
//       [event.target.name]: event.target.value
//     })
//   }

//   handleSubmit = (e) => {
//     e.preventDefault()

//     if (this.state.password === this.state.passwordConfirmation){

//       fetch("http://localhost:3000/api/v1/users", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Accept": "application/json"
//         },
//         body: JSON.stringify({username: this.state.username, 
//                               password: this.state.password,
//                              })
//       })
//       .then(res => res.json())
//       .then(response => {
        
//         if(response.errors){
//           alert(response.errors)} 
//         else {
//           console.log('new signup data id', response.user.id) 
//           this.props.setUser(response)
//           let shop = {user_id: response.user.id}
//           // this.setState({shoppingCartId: response.user.id})
//           fetch("http://localhost:3000/api/v1/shopping_carts", {
//           method: 'Post',
//           headers: {"Content-Type": "application/json",
//                     "Accept": "application/json"},    
//           body: JSON.stringify(shop)
//           })
//           .then(resp=>resp.json())
//           .then(data => console.log('shopping cart created',data))
// // create watchlist
//           fetch("http://localhost:3000/api/v1/watchlists", {
//             method: 'Post',
//             headers: {"Content-Type": "application/json",
//                       "Accept": "application/json"},    
//             body: JSON.stringify(shop)
//             })
//             .then(resp=>resp.json())
//             .then(data => console.log('watchlist cart created',data))

            
//           }
          
//         })
        
        
        
//       } else {
//         alert("Passwords don't match! check for case_sensitive Password should be atlease 3 characters")
//       }
      
//       this.setState({
//         username: "",
//         password: "",
//         passwordConfirmation: "",
        
//       })
      
//     }
    
//     render(){
//       return (
//         <div className="center-form">
 
//         <form className="formLogin" onSubmit={this.handleSubmit}>
//           <h1 className='salut'> Hi {this.state.username}</h1>
//           <input className="formInput" name="username" 
//                  value={this.state.username} 
//                  onChange={this.handleChange}placeholder="username"/>
//           <br></br>
//           <br></br>
//           <input className="formInput" name="password" 
//                  value={this.state.password} type="password"  
//                  onChange={this.handleChange}placeholder="password"/>
//           <br></br>
//           <br></br>
//           <input className="formInput" name="passwordConfirmation" 
//                  value={this.state.passwordConfirmation} type="password"  
//                  onChange={this.handleChange}placeholder="password confirmation"/>
//           <br></br>
//           <br></br>
          
//           <input className="formInput" name="email" 
//                  value={this.state.email} type="email"  
//                  onChange={this.handleChange}placeholder="email"/>
//           <br></br>
//           <br></br>
//           <input className="formInput" name="phone" 
//                  value={this.state.phone} type="phone"  
//                  onChange={this.handleChange}placeholder="phone"/>
              
//           <button className="formInput" type="submit">Sign Up</button>
//         </form>
//       </div>
//     )
//   }
  
  
// }



// export default SignupForm



