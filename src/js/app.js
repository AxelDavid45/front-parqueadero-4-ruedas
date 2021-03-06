import { routes } from './utils/routes.js'
import { createLogic } from './forms/createLogic.js'
import { searchLogic } from './forms/searchLogic.js'
import { countBrands } from './forms/countBrands.js'

const menu = document.getElementById('menu')
const forms = document.getElementById('forms')
const resultsApi = document.getElementById('results-api')
let formUser = null

menu.addEventListener('click', function (evt) {
  const form = routes(evt.target.id)
  handleColorTabsMenu(evt)
  forms.innerHTML = form

  formUser = document.getElementById('form-user')

  if (formUser) {
    formUser.addEventListener('submit', async function (evt) {
      evt.preventDefault()
      const name = evt.target.dataset.name
      if (name === 'createRecord') {
        await createLogic(resultsApi)
      }

      if (name === 'SearchByName') {
        await searchLogic(resultsApi, 'name')
      }

      if (name === 'SearchByLicense') {
        await searchLogic(resultsApi, 'license')
      }

      if (name === 'SearchByIdentity') {
        await searchLogic(resultsApi, 'identity')
      }

      if (name === 'SearchByBrand') {
        await countBrands(resultsApi)
      }

      return false
    })
  }
})

function handleColorTabsMenu (evt) {
  const elementsUl = evt.target.parentNode.parentNode.childNodes
  for (const li of elementsUl) {
    if (li.nodeType === 1) {
      if (li.classList.contains('is-active')) {
        li.classList.remove('is-active')
      }
    }
  }
  if (!evt.target.parentNode.classList.contains('is-active')) {
    evt.target.parentNode.classList.add('is-active')
  }
}
