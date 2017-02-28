import axios from 'axios'

export const FETCH_EARLY_YEARS_IMAGES = 'FETCH_EARLY_YEARS_IMAGES'
export const FETCH_MODERN_ERA_IMAGES = 'FETCH_MODERN_ERA_IMAGES'
export const FETCH_TODAYS_FORCE_IMAGES = 'FETCH_TODAYS_FORCE_IMAGES'

export function fetchImages (tag) {
  let ACTION_TYPE = ''
  switch (tag) {
    case 'early-years':
      ACTION_TYPE = FETCH_EARLY_YEARS_IMAGES
      break
    case 'todays-force':
      ACTION_TYPE = FETCH_TODAYS_FORCE_IMAGES
      break
    case 'modern-era':
      ACTION_TYPE = FETCH_MODERN_ERA_IMAGES
      break
  }
  const requestUrl = `http://localhost:3030/${tag}/json`
  const request = axios.get(requestUrl)
  return {
    type: ACTION_TYPE,
    payload: request
  }
}
