import React, {Component} from 'react';
import ProfileCart from './ProfileCart'
import '../App.css';
import {connect} from 'react-redux'

class Profile extends Component {
  state = { 
    users: [],     
  }
  componentDidMount(){
    fetch('http://localhost:3000/api/v1/users')
    .then(resp => resp.json())
    .then(users => this.setState({users}) )
  } 
  renderProfile = () => {
        return this.state.users
        .filter(user => user.id === this.props.currentUser.id)
        .map(user => <ProfileCart  key={user.id} {...user} 
        currentUser={this.props.currentUser} 
        updateProfile={this.updateProfile} 
        deleteAccount={this.deleteAccount}/>            
      )  
  }

  updateProfile = (updatedProfile) => {
    console.log('updated profile', updatedProfile)
    let newUsers = this.state.users.map(user => {
        if (user.id===updatedProfile.id){
            return updatedProfile
        }else {
            return user
        }
    })
    this.setState({users: newUsers})
  }

  deleteAccount = (accountToDelete) => {
    let newUsers = this.state.users.filter(user => user.id !== accountToDelete.id)
    this.setState({ items: newUsers })
  }

  render(){
    return (
      <div className="App">
                  {this.renderProfile()} 
      </div>
    );
}}

function msp(state){
  return { 
    users: state.users,     
  }
}
export default connect(msp)(Profile);

