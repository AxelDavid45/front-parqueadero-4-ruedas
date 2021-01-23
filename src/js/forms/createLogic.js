import { sendRequest } from '../utils/sendRequest.js'
import { cardNewRegister } from '../views/results/cardNewRegister.js'
import { showAlert } from '../utils/alert.js'

export async function createLogic (resultsPanel) {
  const name = document.getElementById('name').value
  const identity = document.getElementById('identity').value
  const licensePlate = document.getElementById('licensePlate').value
  const type = document.getElementById('type').value
  const brand = document.getElementById('brand').value

  if (name !== '' && identity !== '' && licensePlate !== '' && type !== '' && brand !== '') {
    const body = { name, identity_card: identity, license_plate: licensePlate, brand, type }
    const response = await sendRequest('/vehicle', body, 'post')
    const responseBody = await response.json()

    if (response.status === 201) {
      resultsPanel.innerHTML = cardNewRegister()
    }

    if (response.status === 500) {
      resultsPanel.innerHTML = showAlert('danger', responseBody.error)
    }

    if (response.status === 409) {
      resultsPanel.innerHTML = showAlert('danger', responseBody.message)
    }
  }
}
