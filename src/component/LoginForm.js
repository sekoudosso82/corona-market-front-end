import React from 'react'

class LoginForm extends React.Component {

  state = {
    username: "",
    password: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(response => {
      //set user to state
      //redirect!
      if (response.errors){
        alert(response.errors)
      } else {
        // this.props.history.push("/items")
        this.props.setUser(response)
      }
    })
    this.setState({
        username: "",
        password: ""
      })

  }

  render(){
    return (
      
      
      <form className="formLogin" onSubmit={this.handleSubmit}>
                    {/* <h1 className="warning"> Please Login or SignUp 🤙  </h1> */}
              <div class="form-row loginDiv">
                  <div>
                    <h1 className='salut'> Hi {this.state.username}</h1>
                    <input className="form-control loginInput" placeholder="username" className='formInput' name="username" 
                      value={this.state.username} 
                      onChange={this.handleChange}placeholder="username"/>
                    <br></br>
                    <br></br>
                    <br></br>
                    <input className="form-control loginInput" placeholder="password" className='formInput' name="password" 
                        value={this.state.password} type="password"  
                        onChange={this.handleChange}placeholder="password"/>
                  </div>
              <br></br>
              <div className="loginSubmit">
                  <button className="formInput" type="submit">Log In</button>
              </div>
              </div>  
          </form>
    
    )
  }
  
}

export default LoginForm


// import React from 'react'

// class LoginForm extends React.Component {

//   state = {
//     username: "",
//     password: ""
//   }

//   handleChange = (event) => {
//     this.setState({
//       [event.target.name]: event.target.value
//     })
//   }

//   handleSubmit = (e) => {
//     e.preventDefault()

//     fetch("http://localhost:3000/api/v1/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//       },
//       body: JSON.stringify(this.state)
//     })
//     .then(res => res.json())
//     .then(response => {
//       //set user to state
//       //redirect!
//       if (response.errors){
//         alert(response.errors)
//       } else {
//         this.props.setUser(response)
//       }
//     })

//     this.setState({
//         username: "",
//         password: ""
//       })

//   }

//   render(){
//     return (
//       <div className="center-form">
//           <h1 className='salut'> Hi {this.state.username}</h1>
//         <form className="formLogin" onSubmit={this.handleSubmit}>

//           <input className='formInput' name="username" 
//                  value={this.state.username} 
//                  onChange={this.handleChange}placeholder="username"/>
//           <br></br>
//           <br></br>
//           <input className='formInput' name="password" 
//                  value={this.state.password} type="password"  
//                  onChange={this.handleChange}placeholder="password"/>
//           <br></br>
//           <br></br>
//           <button className="formInput" type="submit">Log In</button>
//         </form>
//       </div>
//     )
//   }
  
// }

// export default LoginForm

// // import React from 'react';

// // import '../App.css';
// // import logo from '../logo.svg';


// // function LoginForm() {
// //   return (
// //     <div className="App">
// //       Login

// //     </div>
// //   );
// // }

// // export default LoginForm;