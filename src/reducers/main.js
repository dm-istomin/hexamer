import { SET_URL } from '../actions/actions'

function navigation(state = {}, action) {
  switch(action.type) {
    case SET_URL:
      return { ...state, url: action.url };
    default:
      return state;
  }
}

export default navigation;
