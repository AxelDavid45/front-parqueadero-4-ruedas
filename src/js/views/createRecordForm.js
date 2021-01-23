export const createForm = () => {
  return `
    <form action="#" id="form-user" data-name="createRecord">
        <div class="field">
            <label class="label">Nombre del propietario</label>
            <div class="control">
                <input class="input" type="text" placeholder="Nombre" id="name">
            </div>
        </div>
        <div class="field">
            <label class="label">Cedula del propietario</label>
            <div class="control">
                <input class="input" type="text" min="4" placeholder="Cedula" id="identity">
            </div>
        </div>
        <div class="field">
            <label class="label">Placa del vehiculo</label>
            <div class="control">
                <input class="input" type="text" placeholder="Placas" min="7" id="licensePlate">
            </div>
        </div>
        <div class="field">
            <label class="label">Marca</label>
            <div class="control">
                <input class="input" type="text" placeholder="Marca" id="brand">
            </div>
        </div>
        <div class="field">
            <label class="label">Tipo</label>
            <div class="control">
                <input class="input" type="text" placeholder="Tipo vehiculo" id="type">
            </div>
        </div>
        <div class="field">
            <input type="submit" class="button is-link" value="Registrar">
        </div>
    </form>
    `
}
