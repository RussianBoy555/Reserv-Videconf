export const emailValidator = email => {
    if (!email) {
      return "Email es requerido";
    } else if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
      return "Formato de correo incorrecto";
    }
    return "";
  };
  
  export const passwordValidator = password => {
    if (!password) {
      return "Contraseña es requerida";
    } else if (password.length < 8) {
      return "La contraseña debe tener al menos 8 caracteres";
    }
    return "";
  };