import React, {Component} from 'react'
import {connect} from 'react-redux'
// import { withRouter } from "react-router";

class ProfileCart extends Component {
    state = {
        updateIsClicked: false,
        deleteIsClicked: false,
        // username: '',
        // password: '',
        // email: '',
        // phone: '',
        // profileImage: '',
    }

    toggleUpdateIsClicked= () => {
        this.setState({ updateIsClicked: !this.state.updateIsClicked})
    }

    toggleDeleteIsClicked= () => {
        this.setState({ deleteIsClicked: !this.state.deleteIsClicked})
    }
    handleChange = (event) => {
        this.setState({
              [event.target.name]: event.target.value
        })
    }
  
    handleUpdateProfile = (event) => {
        event.preventDefault()
        let data = {
            username: this.props.username,
            password: this.props.password,
            email: this.props.email,
            phone: this.props.phone,
            profileImage: this.props.profileImage
        }
        let id  = this.props.currentUser.id; 
        console.log(' profile id ', this.props.currentUser.id )             
        fetch(`http://localhost:3000/api/v1/users/${id}`, {
            method: 'PATCH',
            headers: {"Content-Type": "application/json",
                      "Accept": "application/json"},    
            body: JSON.stringify(data)
        })
        .then(resp=>resp.json())
        .then(data1 =>  {
            console.log('updated profile id', data1)
            this.props.updateProfile(data1)})

        this.setState({ updateIsClicked: false,
                        username: '',
                        password: '',
                        email: '',
                        phone: '',
                        profileImage: '',
                     }) 

        // this.props.history.push('/profile')

    } 

    handleDelete = () => {
        let id  = this.props.currentUser.id; 
        console.log(' delete profile id ', this.props.currentUser.id )   
        fetch(`http://localhost:3000/api/v1/watchlists/${id}`, {
            method: "DELETE"
        })
        .then(resp => resp.json())
        .then(data => { 
                console.log('delete watchlist id', data.id)
            
                fetch(`http://localhost:3000/api/v1/shopping_carts/${id}`, {
                method: "DELETE"
                })
                .then(resp => resp.json())
                .then(data => { 
                    console.log('delete shoppingCart id', data.id)
                
                    fetch(`http://localhost:3000/api/v1/users/${id}`, {
                        method: "DELETE"
                    })
                    .then(resp => resp.json())
                    .then(data => { 
                        console.log('delete user id', data.id)
                        this.props.deleteAccount(data)
                    })
                })
        
        })

    }
    

  render(){
      return (
        <div className="search-bar">
            <img  className = "rounded mx-auto d-block profileImage" src={this.props.profileImage} />
            <p> username: {this.props.username} </p>
            <p> email: {this.props.email} </p>
            <p> phone: {this.props.phone} </p>
            <button class="btn btn-danger" onClick={this.handleDelete}>Delete Account</button>
            <button class="btn btn-primary" onClick={this.toggleUpdateIsClicked}>Update Account</button>
            {this.state.updateIsClicked ? 
                <form  onSubmit={this.handleUpdateProfile}>
                    <br></br>
                    
                    <label>username</label>
                    <input type="text" name = "username" value = {this.props.username} 
                    onChange = {this.handleChange}/>
                    <br></br>
                    <br></br>

                    <label>password</label>
                    <input type="text" name = "password" value = {this.props.password} 
                    onChange = {this.handleChange}/>
                    <br></br>
                    <br></br>

                    <label>email</label>  
                    <input type="text" name ="email" value = {this.props.email} 
                    onChange = {this.handleChange}/>
                    <br></br>
                    <br></br>

                    <label>phone</label>  
                    <input type="text" name = "phone" value = {this.props.phone} 
                    onChange = {this.handleChange}/>
                    <br></br>
                    <br></br>

                    <label>profileImage</label>  
                    <input type="text" name = "profileImage" value = {this.props.profileImage} 
                    onChange = {this.handleChange}/>
                    <br></br>
                    <br></br>
                    <button type='Submit' value="Submit" class="btn btn-success">Update Profile</button>
                </form>
                    

            : null}

                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

        </div>
      )
  }
}

function msp(state){
    return {
        // updateIsClicked: state.updateIsClicked,
        // deleteIsClicked: state.deleteIsClicked,
        username: state.username,
        password: state.password,
        email: state.email,
        phone: state.phone,
        profileImage: state.profileImage,
    }
}
export default connect(msp)(ProfileCart)
// export default withRouter(ProfileCart)