import { FETCH_IMAGES } from '../../actions/FETCH_IMAGES'

const INITIAL_STATE = []

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_IMAGES:
      console.log(action.payload.data)
      return action.payload.data
    default:
      return state
  }
}
