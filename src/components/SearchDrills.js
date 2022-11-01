import React from 'react';
import {withRouter} from 'react-router-dom';
import Konva from 'konva';

class SearchDrills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          drills: []
        };
      }

      componentDidMount() {
        fetch("https://soccster-api.herokuapp.com/drills")
        .then(res => res.json())
        .then(
          (result) => {
     
            this.setState({
              drills: result
            }) 
          })
      }
    
      filter = () => {
        let params = this.props.location.search.slice(2)
        let filteredDrills = this.state.drills.filter(drill => drill.category === params)
        let finishedDrills = filteredDrills.map(drill => <FilteredDrill key={drill.id} {...drill} />)
          return (
            finishedDrills
          )
    }

  render() {
  return <div>
            {console.log(this.state.drills)}
            {this.filter()}
        </div>
  }
}



class FilteredDrill extends React.Component {

    componentDidMount(){
     Konva.Node.create(this.props.drawing,`container${this.props.id}`)
    }

    render(){
      return(
      <div>
        <h1 style={{textAlign: "center", padding: "10px"}}>{this.props.title}</h1>
        <div id={`container${this.props.id}`}></div>
        <h4 style={{textAlign: "center", padding: "10px"}}>{this.props.description}</h4>
      </div>
      )
    }
  }


export default withRouter(SearchDrills);
