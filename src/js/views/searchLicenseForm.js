export const searchLicenseForm = () => {
  return `
    <form action="#" id="search-license-form">
        <div class="field">
            <label class="label">Placas</label>
            <div class="control">
                <input class="input" type="text" placeholder="Placas">
            </div>
        </div>
        <div class="field">
            <input type="submit" class="button is-link" value="Buscar">
        </div>
    </form>
    `
}
