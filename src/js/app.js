import { routes } from './utils/routes.js'
import { createLogic } from './forms/createLogic.js'

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