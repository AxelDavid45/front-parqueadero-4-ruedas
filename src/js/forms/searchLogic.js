import { sendRequest } from '../utils/sendRequest.js'
import { cardOwner } from '../views/results/cardOwner.js'
import { showAlert } from '../utils/alert.js'

export async function searchLogic (resultsPanel) {
  const name = document.getElementById('name').value
  if (name !== '') {
    console.log(name)
    const response = await sendRequest(`/vehicle/owner/${name}`, null, 'get')
    const responseBody = await response.json()

    console.log(responseBody.data)
    if (response.status === 200) {
      resultsPanel.innerHTML = cardOwner(responseBody.data)
    }

    if (response.status === 500) {
      resultsPanel.innerHTML = showAlert('danger', responseBody.error)
    }
  }
  return false
}
