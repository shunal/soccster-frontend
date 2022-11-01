import React from 'react';
import GetDrills from './getDrills.js'
import {connect} from 'react-redux'
class Drills extends React.Component {
  render() {
    return <GetDrills></GetDrills>
  }
}
const mapStateToProps = state => {
  return {
    drills: state.drills
  }
}
export default connect(mapStateToProps)(Drills);