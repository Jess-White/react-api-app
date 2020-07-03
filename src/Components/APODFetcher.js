import React, {Component} from 'react';

const urls = [
                    "https://apodapi.herokuapp.com/api/",
                    "https://apodapi.herokuapp.com/search/?search_query=planetary%20nebula",
                    "https://apodapi.herokuapp.com/api/?count=10"
                  ]

class APODFetcher extends Component {
  constructor(props) {
        super(props);
        this.state = 
          { 
            APOData: [], 
            NebularData: [], 
            TenData: [],
            returnedData: []
          }
    }


    // componentDidMount() {
    //   fetch("https://apodapi.herokuapp.com/api/")
    //     .then(response => response.json())
    //     .then(response => {
    //       console.log(response);
    //         const APODResponse = response
    //         this.setState({ APOData: APODResponse })
    //     })
    // }

      componentDidMount() {
        Promise.all(urls.map(url =>
          fetch(url)
            .then(response => response.json())
            .then(response => this.state.returnedData.push(response))
          ))
          .then(console.log(this.state.returnedData, "waffle"))
          .then(response => 
            this.setState({
              APOData: this.state.returnedData[0],
              NebularData: this.state.returnedData[1],
              TenData: this.state.returnedData[2]
            }))
            };

  render() {

    if (!this.state.returnedData) {
      return(
        <h1>Ground Control to Major Tom....</h1>
        )
    }

    return (
      <div className="container"> 
        <h1>{this.state.APOData.title}</h1>
        <img style={{width: "700px", height: "500px"}}
          src={this.state.APOData.url}></img>
        <ol>
        <li>{this.state.APOData.date}</li>
        <li>{this.state.APOData.description}</li>
        <li>{this.state.APOData.apod_site}</li>
        </ol>
      </div>
      )
  };

}

export default APODFetcher

  // componentDidMount() {
  //   fetch("https://apodapi.herokuapp.com/api/")
  //     .then(response => response.json())
  //     .then(response => {
  //       console.log(response);
  //         const APODResponse = response
  //         this.setState({ APOData: APODResponse })
  //     })
  //   }