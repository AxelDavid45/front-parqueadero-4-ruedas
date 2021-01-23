export const searchIdentityForm = () => {
  return `
    <form action="#" id="form-user" data-name="SearchByIdentity">
        <div class="field">
            <label class="label">Cedula</label>
            <div class="control">
                <input class="input" type="text" placeholder="Cedula">
            </div>
        </div>
        <div class="field">
            <input type="submit" class="button is-link" value="Buscar">
        </div>
    </form>
    `
}
