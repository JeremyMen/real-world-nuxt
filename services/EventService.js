import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:3000/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

const getEvents = () => http.get('/events')
const getEvent = (id) => http.get(`/events/${id}`)

export default {
  getEvents,
  getEvent
}
