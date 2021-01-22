import { routes } from './utils/routes.js'

const menu = document.getElementById('menu')
const forms = document.getElementById('forms')

menu.addEventListener('click', function (evt) {
  const form = routes(evt.target.id)
  forms.innerHTML = form
  console.log(evt.target.id)
})
