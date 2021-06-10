export function errorsHandler(code: string) {
  let error;

  if (code === "auth/email-already-in-use") {
    return (error = "Email já registrado");
  }

  if (code === "auth/invalid-email") {
    return (error = "Digite um e-mail valido. ex usuario@gmail.com");
  }

  if (code === "auth/weak-password") {
    return (error = "A senha precisa de no mínimo 6 caracteres.");
  }

  if (code === "auth/wrong-password") {
    return (error = "Senha invalida.");
  }

  if (code === "auth/user-not-found") {
    return (error = "Não há cadastro com este e-mail.");
  }

  return error;
}
