import axios from 'axios'

export class FeedService {
  private httpClient
  constructor() {
    this.httpClient = axios.create({
      baseURL: 'http://localhost:8001'
    })
  }

  ping() {
    return this.httpClient.get('/ping')
  }

  feed(username: string) {
    return this.httpClient.get(`/users/${username}/feed`)
  }

  info(username: string) {
    return this.httpClient.get(`/users/${username}/info`)
  }


}
