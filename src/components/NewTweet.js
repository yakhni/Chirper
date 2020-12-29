import React, { Component } from 'react'

class NewTweet extends Component {
  state = {
    text: '',
  }

  handleChange = (e) => {
    const text = e.target.value
    this.setState(() => ({text}))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { text } = this.state

    // TODO complete me
    console.log('New Tweet: ', text)

    this.setState(() => ({
      text: ''
    }))

  }

  render() {
    const { text } = this.state
    {/* TODO: redirect to / if submitted */}
    const tweetLeft = 280 - text.length

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
            <div slaccName='tweet-length'></div>
          )}
          <button
            className='btn'
            type='submit'
            disabled={text === ''}
            /* onClick={this.handleSubmit} */
          >
            Submit</button>

        </form>
        New Tweet
      </div>
      );
  }
}

export default NewTweet
