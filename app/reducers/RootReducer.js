import { combineReducers } from 'redux'
import ImagesReducer from './ImagesReducer'

const RootReducer = combineReducers({
  images: ImagesReducer
})

export default RootReducer
