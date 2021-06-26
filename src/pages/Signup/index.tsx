import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Title,
  Form,
  UsernameInput,
  PasswordInput,
  LoginButton,
  SubscribeInviteText,
  ErrorText,
  LoadingState,
} from "../Login/styles";
import { LoginContainer } from "./styles";
import { Background } from "../../components/Background";

import { useDispatch, useSelector } from "react-redux";
import { Types } from "../../store/reducers/userReducer";
import { signup } from "../../auth/auth";
import { IFirebaseUser, IStateUserProps } from "../../types_global";
import Loader from "../../components/Loader";

export function Signup() {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const { error } = useSelector((state: IStateUserProps) => state.stateUser);

  const [changes, setChanges] = useState({
    email: "",
    password: "",
    password2: "",
    error: "",
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    const result: any = await signup(changes.email, changes.password);

    if (result.type === "SUCCESS") {
      const user: IFirebaseUser = result.value;

      if (user) {
        dispatch({
          type: Types.SET_USER_STORE,
          id: user.uid,
          name: user.displayName,
          email: user.email,
          photo_url: user.photoURL,
          save_login: true,
        });

        setIsLoading(false);
        return history.push("/browse");
      }
    }

    if (result.type === "FAILURE") {
      setIsLoading(false);

      dispatch({
        type: Types.USER_ERROR_AUTH,
        error: result.value,
      });
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "email") {
      setChanges({ ...changes, email: value });
    }

    if (name === "password") {
      setChanges({ ...changes, password: value });
    }

    if (name === "password2") {
      setChanges({ ...changes, password2: value });
    }
  }
  return (
    <>
      <Background />

      <LoginContainer>
        <Title>Acesse sua conta:</Title>

        <Form onSubmit={(e) => handleSubmit(e)}>
          <UsernameInput
            type="email"
            name="email"
            placeholder="E-mail"
            onChange={(e) => handleChange(e)}
          />
          <PasswordInput
            type="password"
            name="password"
            placeholder="Senha"
            onChange={(e) => handleChange(e)}
          />
          <PasswordInput
            type="password"
            name="password2"
            placeholder="Confirme sua senha"
            onChange={(e) => handleChange(e)}
          />
          <ErrorText>{error}</ErrorText>

          <LoginButton type="submit">Cadastrar</LoginButton>
        </Form>

        <SubscribeInviteText>
          Já tem uma conta?
          <Link to="/login">Acesse aqui</Link>
        </SubscribeInviteText>
      </LoginContainer>

      {isLoading && (
        <LoadingState>
          <Loader />
        </LoadingState>
      )}
    </>
  );
}
