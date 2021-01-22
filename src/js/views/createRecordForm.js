export const createForm = () => {
  return `
    <form action="#" id="create-form">
        <div class="field">
            <label class="label">Nombre del propietario</label>
            <div class="control">
                <input class="input" type="text" placeholder="Nombre">
            </div>
        </div>
        <div class="field">
            <label class="label">Cedula del propietario</label>
            <div class="control">
                <input class="input" type="text" placeholder="Cedula">
            </div>
        </div>
        <div class="field">
            <label class="label">Placa del vehiculo</label>
            <div class="control">
                <input class="input" type="text" placeholder="Placas">
            </div>
        </div>
        <div class="field">
            <label class="label">Placa del vehiculo</label>
            <div class="control">
                <input class="input" type="text" placeholder="Placas">
            </div>
        </div>
        <div class="field">
            <input type="submit" class="button is-link" value="Registrar">
        </div>
    </form>
    `
}
