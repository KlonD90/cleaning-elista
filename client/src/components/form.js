import css from "./admin.module.css";

export const FormEmail = () => {
  return (
    <div>
        <label>
          <span>* E-mail:</span>
          <input
            id="email"
            type="email"
            name="email"
            minLength="6"
            pattern="^[a-z0-9._+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            placeholder="example@mail.com"
            required />
        </label>
      </div>
  );
}

export const FormPassword = () => {
  return (
    <div>
      <label>
      <span>* Пароль:</span>
        <input
          id="pswrd"
          type="password"
          minLength="8"
          maxLength="16"
          pattern="[A-Za-z0-9]{8,16}"
          placeholder="Passw0rd"
          required />
      </label>
    </div>
  );
}

export const FormRemember = () => {
  return (
    <div>
      <label className={css.remember}>
        <input
          type="checkbox"
          id="remember"
          className={css.remember} />
        <span className={css.remember}>Запомнить меня</span>
      </label>
    </div>
  );
}

export const FormButton = () => {
  return (
    <div>
      <label className={css.button}>
        <input
          type="submit"
          id="login"
          className={css.button} />
      </label>
    </div>
  );
}

export const FormName = () => {
  return (
    <div>
      <label>
        <span>* Имя:</span>
        <input
          type="text"
          id="name"
          pattern="[A-Za-zА-Яа-яЁё]{1,30}"
          placeholder="Имярек"
          required />
      </label>
    </div>
  );
}

export const FormPhoto = () => {
  return (
    <div>
      <label>
        <span>* Фото:</span>
        <input
          type="file"
          id="photo"
          accept="image/jpeg,image/png,image/gif"
          className={css.photo}
          required />
      </label>
    </div>
  );
}
