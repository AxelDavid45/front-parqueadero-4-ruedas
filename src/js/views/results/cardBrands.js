export const cardBrands = (data) => {
  return `
     ${data.map(brand => {
      return `----<ul>
      <li><b>Marca:</b> ${brand.marca}</li>
      <li><b>Cantidad:</b> ${brand.cantidad}</li>
       </ul>---`
     })}
  `
}