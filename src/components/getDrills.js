import React from 'react'
import Konva from 'konva';
import { connect } from 'react-redux'

// Requires a refresh to view 
class GetDrills extends React.Component {

    render() {
      return(
        <div>
          {this.props.drills.map(drill => <Drill key={drill.id} {...drill} />)}
        </div>
         
        )
    }
  }
  const mapStateToProps = state => {
    return {
      drills: state.drills
    }
  }
  export default connect(mapStateToProps)(GetDrills)


  export class Drill extends React.Component {
    componentDidMount(){
     Konva.Node.create(this.props.drawing,`container${this.props.id}`)
    }

    render(){
      return(
      <div class="container" style={{paddingBottom: "20px"}}>
        <h1 style={{textAlign: "center", padding: "10px"}}>{this.props.title}</h1>
        <div id={`container${this.props.id}`}></div>
        <h4 style={{textAlign: "center", padding: "10px"}}>{this.props.description}</h4>
      </div>
      )
    }
  }


  // WITHOUT REDUX

// import React from 'react'
// import Konva from 'konva';

// export default class GetDrills extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         drills: []
//       };
//     }
    
//     componentDidMount() {
//       fetch("http://localhost:3001/drills")
//       .then(res => res.json())
//       .then(
//         (result) => {
//           this.setState({
//             drills: result
//           }) 
//         })
          
//     }
  
//     render() {
//       return(
//         <div>
//           {this.state.drills.map(drill => <Drill key={drill.id} {...drill} />)}
//         </div>
         
//         )
//     }
//   }


//   export class Drill extends React.Component {
//     componentDidMount(){
//      Konva.Node.create(this.props.drawing,`container${this.props.id}`)
//     }

//     render(){
//       return(
//       <div class="container" style={{paddingBottom: "20px"}}>
//         <h1 style={{textAlign: "center", padding: "10px"}}>{this.props.title}</h1>
//         <div id={`container${this.props.id}`}></div>
//         <h4 style={{textAlign: "center", padding: "10px"}}>{this.props.description}</h4>
//       </div>
//       )
//     }
//   }