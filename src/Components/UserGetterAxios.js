import React from 'react';
import axios from 'axios';

class UserGetterAxios extends React.Component {
    state = {
      users: []
    }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const users = res.data;
        this.setState({ users });
      })
  }

  render() {
    return (
      <div>
        {console.log(this.state.users)}
         <h1>
         This is a list of all of the users:
         </h1>
         
          { this.state.users.map(
            user => 
            <ul key={user.id}>
              <li>{user.id}</li>
              <li>{user.name}</li>
              <li>{user.username}</li>
              <li>{user.email}</li>
              <li>{user.address.street}</li>
            </ul>
            )}
      </div>
    )
  }
}

export default UserGetterAxios