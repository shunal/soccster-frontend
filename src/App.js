// import React from 'react';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CreateDrill from './components/CreateDrill';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home'
import { NavigationBar } from './components/NavigationBar'
import Drills from './components/Drills'
import { fetchDrills } from './actions/drillActions'
import SearchDrills from './components/SearchDrills'
import {Layout} from "./components/Layout"

class App extends Component {   
  
  componentDidMount() {
    this.props.fetchDrills()
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/create" component={CreateDrill} />
              <Route exact path="/drills" component={Drills} />
              <Route exact path="/searchdrills" component={SearchDrills}/>
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    drills: state.drills
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    fetchDrills: () => dispatch(fetchDrills())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)