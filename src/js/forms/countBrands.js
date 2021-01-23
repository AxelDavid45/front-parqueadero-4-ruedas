import { sendRequest } from '../utils/sendRequest.js'
import { cardBrands } from '../views/results/cardBrands.js'
import { showAlert } from '../utils/alert.js'

export async function countBrands (resultsPanel) {
  const response = await sendRequest('/vehicle/brand', null, 'get')
  const responseBody = await response.json()

  if (response.status === 200) {
    resultsPanel.innerHTML = cardBrands(responseBody.data)
  }

  if (response.status === 500) {
    resultsPanel.innerHTML = showAlert('danger', responseBody.error)
  }
}
