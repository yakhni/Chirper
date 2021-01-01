import React, { Component } from 'react'
import { handleNewTweet } from '../actions/tweets'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class NewTweet extends Component {
  state = {
    text: '',
    toHome: false
  }

  handleChange = (e) => {
    const text = e.target.value
    this.setState(() => ({text}))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { text } = this.state
    const { dispatch, id } = this.props

    dispatch(handleNewTweet(text, id))

    this.setState(() => ({
      text: '',
      isHome: id ? false : true
    }))
  }

  render() {
    const { text, isHome } = this.state
    const tweetLeft = 280 - text.length

    if (isHome === true)
      return <Redirect to='/' />

    return (
      <div>
        <h3 className='center'>Compose new Tweet</h3>
        <form className='new-tweet' onSubmit={this.handleSubmit}>
          <textarea
            placeholder="What's happening?"
            value={text}
            onChange={this.handleChange}
            className='textarea'
            maxLength={280}
          />
          {tweetLeft <= 100 && (
            <div className='tweet-length'>{tweetLeft}</div>
          )}
          <button
            className='btn'
            type='submit'
            disabled={text === ''}
            onClick={this.handleSubmit}
          >
            Submit</button>

        </form>
      </div>
      );
  }
}

// const mapStateToProps()
export default connect()(NewTweet)
