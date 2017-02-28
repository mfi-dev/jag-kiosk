import { FETCH_EARLY_YEARS_IMAGES, FETCH_MODERN_ERA_IMAGES, FETCH_TODAYS_FORCE_IMAGES } from '../../actions/FETCH_IMAGES'

const INITITAL_STATE = {
  EarlyYearsImages: [],
  ModernEraImages: [],
  TodaysForceImages: []
}

export default function (state = INITITAL_STATE, action) {
  switch (action.type) {
    case FETCH_EARLY_YEARS_IMAGES:
      console.log('FETCH_EARLY_YEARS_IMAGES recieved :', action.payload.data)
      return { ...state, EarlyYearsImages: action.payload.data }
    case FETCH_MODERN_ERA_IMAGES:
      console.log('FETCH_MODERN_ERA_IMAGES recieved :', action.payload.data)
      return { ...state, ModernEraImages: action.payload.data }
    case FETCH_TODAYS_FORCE_IMAGES:
      console.log('FETCH_TODAYS_FORCE_IMAGES recieved :', action.payload.data)
      return { ...state, TodaysForceImages: action.payload.data }
    default:
      return state
  }
}
