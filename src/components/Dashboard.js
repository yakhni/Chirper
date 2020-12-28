import React, { Component } from 'react';
import { connect } from 'react-redux'

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h3 className='center'>Your Timeline</h3>
          {this.props.tweetIds.map((id) => (
            <li key={id}>
              {id}
            </li>
          ))}
      </div>
    );
  }
}

function mapStateToProps({ tweets }) {
  return {
    tweetIds: Object.keys(tweets).sort(
      (a, b) => tweets[b].timestamp - tweets[a].timestamp)
  }
}
export default connect(mapStateToProps)(Dashboard)
