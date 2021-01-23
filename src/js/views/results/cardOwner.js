export const cardOwner = (data) => {
  return `
  <div class="card">
      <header class="card-header">
          <h1 class="card-header-title">
              Cedula: ${data.cedula}
          </h1>
      </header>
      <div class="card-content">
          <ul>
              <li><b>Nombre:</b>${data.nombre}</li>
              <li><b>-----Vehiculos-----</b></li>
              ${data.vehiculos.map(vehicle => {
                return `
                  <li>
                  ---
                    <ul>
                        <li><b>Placa:</b> ${vehicle.placa}</li>
                        <li><b>Marca:</b>${vehicle.marca}</li>
                        <li><b>Tipo:</b>${vehicle.tipo}</li>
                    </ul>
                  </li>
              `
})}
          </ul>
      </div>
    </div>
  `
}
