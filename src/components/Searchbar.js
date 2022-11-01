import React from 'react';
import { withRouter } from 'react-router-dom'

class Searchbar extends React.Component {
  
 
  setRedirect = (e) => {
    e.preventDefault()
    this.props.history.push(`/searchdrills?=${this.state.searchParams}`)
  }


  mySearchHandler = (event) => {
    this.setState({searchParams: event.target.value})
    console.log(this.state)
}



  render() {
    return <form onSubmit={this.setRedirect}>
        <input placeholder="Search Drills" type="text" onChange={this.mySearchHandler}></input>
        <button type="submit">
          {console.log(this.state)}
          Search</button>
    </form>
  }
}
 
export default withRouter(Searchbar);