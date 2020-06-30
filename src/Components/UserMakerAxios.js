import React from 'react';
import axios from 'axios';

export default class UserMakerAxios extends React.Component {
  state = {
    name: '',
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const user = {
      name: this.state.name
    };

    axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}

// class UserGetterAxios extends Component {
//   state = {
//     randomUser: null
//   }

//   componentDidMount() {
//     fetch("https://api.randomuser.me/")
//       .then(response => response.json())
//       .then(response => {
//         console.log(response);
//           const user = response.results[0]
//           this.setState({ randomUser: user })
//       })
//     }

//   render() {

//     if (!this.state.randomUser) {
//       return(
//         <h1>loading...</h1>
//         )
//     }

//     return (
//       <div className="container"> 
//         <h1>
//         The page is showing up - yay!
//         </h1>
//       </div>
//       )
//   };

// }