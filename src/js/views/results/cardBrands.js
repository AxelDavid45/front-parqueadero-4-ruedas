export const cardBrands = (data) => {
  let result = ''
  data.forEach(brand => {
    result += `<ul>
        <li><b>Placa:</b> ${brand.placa}</li>
        <li><b>Marca:</b>${brand.marca}</li>
        <li><b>Tipo:</b>${brand.tipo}</li>
    </ul>`
  })
  return result
}