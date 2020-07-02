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
         <h2>
         User Index:
         </h2>
         
          { this.state.users.map(
            user => 
            <ol key={user.id}>
              <h2>User Info</h2>
              <li>{user.id}</li>
              <li>{user.name}</li>
              <li>{user.username}</li>
              <li>{user.email}</li>
              <li>{user.phone}</li>
              <li>{user.website}</li>
              <h2>Address Info</h2>
              <li>{user.address.city}</li>
              <li>{user.address.geo.lat}</li>
              <li>{user.address.geo.lng}</li>
              <li>{user.address.street}</li>
              <li>{user.address.suite}</li>
              <li>{user.address.zipcode.slice(0,5)}</li>
              <h2>Company Info</h2>
              <li>{user.company.name}</li>
              <li>{user.company.bs}</li>
              <li>{user.company.catchPhrase}</li>
            </ol>
            )}
      </div>
    )
  }
}

export default UserGetterAxios