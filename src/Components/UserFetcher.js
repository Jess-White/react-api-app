import React, {Component} from 'react';

class UserFetcher extends Component {
  state = {
    randomUser: null
  }

  componentDidMount() {
    fetch("https://api.randomuser.me/")
      .then(response => response.json())
      .then(response => {
        console.log(response);
          const user = response.results[0]
          this.setState({ randomUser: user })
      })
    }

  render() {

    if (!this.state.randomUser) {
      return(
        <h1>loading...</h1>
        )
    }

    return (
      <div className="container"> 
        <h1>User Info:</h1>
        <img src={this.state.randomUser.picture.large}/>
        <ol>
        <li>{this.state.randomUser.name.title}</li>
        <li>{this.state.randomUser.name.first}</li>
        <li>{this.state.randomUser.name.last}</li>
        <li>{this.state.randomUser.email}</li>
        <li>{this.state.randomUser.dob.date}</li>
        <li>{this.state.randomUser.dob.age}</li>
        <li>{this.state.randomUser.location.street.number}</li>
        <li>{this.state.randomUser.location.street.name}</li>
        </ol>
      </div>
      )
  };

}



export default UserFetcher