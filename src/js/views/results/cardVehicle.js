export const cardVehicle = (data) => {
  return `
<div class="card">
      <div class="card-content">
          <ul>
              <li><b>Placa:</b> ${data.placa}</li>
              <li><b>Marca:</b>${data.marca}</li>
              <li><b>Tipo:</b>${data.tipo}</li>
          </ul>
      </div>
   </div>
  `
}