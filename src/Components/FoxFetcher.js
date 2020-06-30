import React, {Component} from 'react';

class FoxFetcher extends Component {
  state = {
    randomFox: null
  }

  componentDidMount() {
    fetch("https://randomfox.ca/floof/")
      .then(response => response.json())
      .then(response => {
        console.log(response);
          const fox = response
          this.setState({ randomFox: fox })
      })
    }

  render() {

    if (!this.state.randomFox) {
      return(
        <h1>fetching fox for FoxFetcher component via fetch...</h1>
        )
    }

    return (
      <div className="container"> 
        <h1>
        Have I fetched a fox?
        </h1>
        <h2>
        {this.state.randomFox}
        </h2>
      </div>
      )
  };

}



export default FoxFetcher