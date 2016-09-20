import { SET_URL } from '../actions/actions'

function navigation(state = {}, action) {
  switch(action.type) {
    case SET_URL:
      return action.url;
    default:
      return state;
  }
}

export default navigation;
