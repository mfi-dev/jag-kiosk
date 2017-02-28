import axios from 'axios'

export const FETCH_IMAGES = 'FETCH_IMAGES'

export function fetchImages (tag) {
  const requestUrl = `http://localhost:3030/${tag}/json`
  const request = axios.get(requestUrl)
  return {
    type: FETCH_IMAGES,
    payload: request
  }
}
