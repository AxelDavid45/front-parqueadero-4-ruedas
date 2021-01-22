import { createForm } from '../views/createRecordForm.js'
import { searchNameForm } from '../views/searchNameForm.js'
import { searchIdentityForm } from '../views/searchIdentityForm.js'
import { searchLicenseForm } from '../views/searchLicenseForm.js'
import { searchBrandsForm } from '../views/searchBrandsForm.js'

export const routes = (routeId) => {
  if (routeId === 'new-menu') {
    return createForm()
  }

  if (routeId === 'search-name-menu') {
    return searchNameForm()
  }

  if (routeId === 'search-license-menu') {
    return searchLicenseForm()
  }

  if (routeId === 'search-owner-menu') {
    return searchIdentityForm()
  }

  if (routeId === 'search-brands-menu') {
    return searchBrandsForm()
  }
}
