const API = 'http://parqueadero-4-gradi.me/api'
export const sendRequest = async (url, data, type) => {
  try {
    const bodyRequest = JSON.stringify(data)
    const request = await fetch(API + url, {
      method: type.toUpperCase(),
      headers: {
        'Content-Type': 'application/json'
      },
      body: bodyRequest
    })
    return request
  } catch (err) {
    return false
  }
}