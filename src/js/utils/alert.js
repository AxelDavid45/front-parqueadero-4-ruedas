export const showAlert = (type, message) => {
  return `
  <div class="notification is-${type}">
  ${message}
   </div>
  `
}