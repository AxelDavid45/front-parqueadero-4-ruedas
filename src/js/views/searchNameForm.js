export const searchNameForm = () => {
  return `
    <form action="#" id="search-name-form">
        <div class="field">
            <label class="label">Nombre del propietario</label>
            <div class="control">
                <input class="input" type="text" placeholder="Nombre">
            </div>
        </div>
        <div class="field">
            <input type="submit" class="button is-link" value="Buscar">
        </div>
    </form>
    `
}
