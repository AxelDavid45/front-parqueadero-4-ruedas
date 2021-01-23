import { routes } from './utils/routes.js'

const menu = document.getElementById('menu')
const forms = document.getElementById('forms')
const resultsApi = document.getElementById('results-api')

menu.addEventListener('click', function (evt) {
  const form = routes(evt.target.id)
  handleColorTabsMenu(evt)
  forms.innerHTML = form
})

function handleColorTabsMenu(evt) {
  const elementsUl = evt.target.parentNode.parentNode.childNodes
  for(const li of elementsUl) {
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