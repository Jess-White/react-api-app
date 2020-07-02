import React, {Component} from 'react';

class APODFetcher extends Component {
  constructor(props) {
        super(props);
        this.state = { APOData: [], NebularData: [], TenData: []};
    } 

  urls: [
                "https://apodapi.herokuapp.com/api/",
                "https://apodapi.herokuapp.com//search/?search_query=planetary%20nebula",
                "https://apodapi.herokuapp.com/api/?count=10",
                ];

  componentDidMount() {
        Promise.all(urls.map(url =>
          fetch(url)
            .then(checkStatus)
            .then(parseJSON)
            .catch(error => console.log('Threw an error, sorry!', error))
          ))
          .then(data => {
            const apod_data = data[0];
            const nebular_data = data[1];
            const ten_data = data[2];
            this.setState({
              APOData: apod_data,
              NebularData: nebular_data,
              TenData: ten_data
            })
          })
        }

  function checkStatus(response {
        if (response.ok) {
          return Promise.resolve(response);
        } else {
          return Promise.reject(new Error(response.statusText));
        }
      }

      function parseJSON(response) {
        return response.json();
      }

    const { APOData, NebularData, TenData } = this.state;
      console.log(APOData, NebularData, TenData);

  render() {

    if (!this.state.APOData) {
      return(
        <h1>Ground Control to Major Tom....</h1>
        )
    }

    return (
      <div className="container"> 
        <h1>{this.state.APOData.title}</h1>
        <iframe style={{width: "700px", height: "500px"}}
          src={this.state.APOData.url}></iframe>
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