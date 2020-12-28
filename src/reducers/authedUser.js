import { SET_AUTHED_USER } from '../actions/authedUser'

export default function authedUser (state = null, action) {
  switch (action.type) {
      case SET_AUTHED_USER:
        console.log('SET_AUTH_USER in reducer', action)
        return action.id
      default:
        return state
  }
}
