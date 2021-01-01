import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import LoadingBar from 'react-redux-loading'
import NewTweet from './NewTweet'
import TweetPage from './TweetPage'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './Nav'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Fragment>
        <LoadingBar />
        <div id='container'>
          <Router>
            <Nav />
            {this.props.loading === true
              ? null
              : <div>
                  <Route exact path='/' component={Dashboard} />
                  <Route path='/tweet/:id' component={TweetPage}/>
                  <Route path='/new' component={NewTweet}/>
              </div>
            }
          </Router>
        </div>
      </Fragment>
    )
  }
}
function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}
export default connect(mapStateToProps)(App)
