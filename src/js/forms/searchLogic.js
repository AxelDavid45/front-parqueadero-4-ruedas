import { sendRequest } from '../utils/sendRequest.js'
import { cardOwner } from '../views/results/cardOwner.js'
import { showAlert } from '../utils/alert.js'
import { cardVehicle } from '../views/results/cardVehicle.js'

const URLS = {
  license: '/vehicle',
  name: '/vehicle/owner',
  identity: '/vehicle/owner/identity'
}

export async function searchLogic (resultsPanel, urlName) {
  if (document.getElementById('filter')) {
    const filter = document.getElementById('filter').value
    if (filter !== '') {
      if (URLS[urlName]) {
        const response = await sendRequest(`${URLS[urlName]}/${filter}`, null, 'get')
        const responseBody = await response.json()

        if (response.status === 200) {
          if (urlName === 'identity' || urlName === 'name') {
            resultsPanel.innerHTML = cardOwner(responseBody.data)
          } else {
            resultsPanel.innerHTML = cardVehicle(responseBody.data)
          }
        }

        if (response.status === 500) {
          resultsPanel.innerHTML = showAlert('danger', responseBody.error)
        }
      }
    }
  }
  return false
}
