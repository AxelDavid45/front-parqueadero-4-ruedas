const API = 'https://backend-4wheels-laravel.herokuapp.com/api'
export const sendRequest = async (url, data, type) => {
  try {
    const options = {
      method: type.toUpperCase(),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    if (data !== null) {
      options.body = JSON.stringify(data)
    }

    const request = await fetch(API + url, options)
    return request
  } catch (err) {
    return false
  }
}