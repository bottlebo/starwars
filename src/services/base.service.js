import axios from 'axios'
export class BaseService {
  api = 'https://swapi.dev/api/';
  get (url) {
    return new Promise(function (resolve, reject) {
      axios.get(url, {
        crossDomain: true,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        resolve(response.data)
      })
        .catch(function (error) {
          reject(error)
        })
    })
  }
  buildUri (data) {
    let q = ''
    if (data) {
      for (let key of Object.keys(data)) {
        q += `&${key}=` + data[key]
      }
      if (q.length) q = q.replace('&', '?')
    }
    return q
  }
}
