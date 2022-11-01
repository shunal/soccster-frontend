import React from 'react';
import { connect } from 'react-redux';

class Home extends React.Component {

  render() {
    console.log(this.props.drills)
    return (
      <div>
        <h1>Home</h1>
      </div>
    )
      
  }
}
const mapStateToProps = state => {
  return {
    drills: state.drills
  }
}
 
export default connect(mapStateToProps)(Home)