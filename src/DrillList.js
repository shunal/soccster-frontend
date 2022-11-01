import React from 'react';

class DrillList extends React.Component {
  listDrills = () => {
    return this.props.drills.map(drill => <img key={drill.picture} title={drill.title} description={drill.description} />)
  }

  render() {    
    return (
      <div>
        {this.listDrills()}
      </div>
    )
  }
}

export default DrillList;