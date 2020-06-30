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
        <h1>
        hello world
        {this.state.randomUser.email}
        </h1>
        <h2>
        {this.state.randomUser.name.first} is my first name
        </h2>
      </div>
      )
  };

}



export default UserFetcher