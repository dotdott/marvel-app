import { Link } from "react-router-dom";

import {
  LoginContainer,
  Title,
  Form,
  UsernameInput,
  PasswordInput,
  SaveLoginWrapper,
  SaveLoginLabel,
  SaveLoginCheckbox,
  ForgetPassword,
  LoginButton,
  SubscribeInviteText,
  SloganWrapper,
  ErrorText,
} from "./styles";

import {
  Container,
  MarvelRedBackground,
  MarvelTitle,
  MarvelWrapper,
} from "../Preload/styles";

import { useEffect, useState } from "react";
import { Background } from "../../components/Background";
import { motion } from "framer-motion";
import {
  loginLogoVariants,
  loginVariants,
  welcomeVariants,
} from "../../components/MotionVariants";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/actions/authActions";
import { Types } from "../../store/reducers/userReducer";
import { IUser } from "../../store/types";

interface IStateUserProps {
  stateUser: IUser;
}

interface IFirebaseUser {
  displayName?: string | null;
  email: string;
  photoURL?: string | null;
  uid: string;
}

export function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const { error, name, id } = useSelector(
    (state: IStateUserProps) => state.stateUser
  );

  useEffect(() => {
    console.log(id, name);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const result: any = await login(input.email, input.password);

    if (result.type === "SUCCESS") {
      const user: IFirebaseUser = result.value;
      if (user) {
        return dispatch({
          type: Types.SET_USER_STORE,
          id: user.uid,
          name: user.displayName,
          email: user.email,
          photo_url: user.photoURL,
        });
      }
    }

    if (result.type === "FAILURE") {
      return dispatch({
        type: Types.USER_ERROR_AUTH,
        error: result.value,
      });
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const type = e.target.type;
    const value = e.target.value;

    if (type === "email") {
      setInput({ ...input, email: value });
    }

    if (type === "password") {
      setInput({ ...input, password: value });
    }
  }

  return (
    <Container>
      <Background />

      <MarvelWrapper>
        <motion.div
          style={{
            height: "100%",
          }}
          initial="enter"
          animate="exit"
          exit="exit"
          variants={loginLogoVariants}
        >
          <SloganWrapper>
            <MarvelRedBackground />
            <MarvelTitle>
              ma <br />
              rve <br />l
            </MarvelTitle>
          </SloganWrapper>
        </motion.div>

        <motion.h1
          className="welcome_message"
          initial="enter"
          animate="exit"
          exit="exit"
          variants={welcomeVariants}
        >
          Bem-vindo(a) de volta !
        </motion.h1>

        <motion.div
          initial="exit"
          animate="enter"
          exit="exit"
          variants={loginVariants}
        >
          <LoginContainer>
            <Title>Acesse sua conta:</Title>

            <Form onSubmit={(e) => handleSubmit(e)} noValidate>
              <UsernameInput
                type="email"
                placeholder="E-mail"
                onChange={(e) => handleChange(e)}
              />
              <PasswordInput
                type="password"
                name="password"
                placeholder="Senha"
                onChange={(e) => handleChange(e)}
              />

              <ErrorText>{error}</ErrorText>
              <SaveLoginWrapper>
                <SaveLoginLabel htmlFor="save">
                  <SaveLoginCheckbox type="checkbox" id="save" />
                  Salvar login
                </SaveLoginLabel>

                <ForgetPassword href="#">Esqueci a senha</ForgetPassword>
              </SaveLoginWrapper>

              <LoginButton type="submit">Entrar</LoginButton>
            </Form>
            <SubscribeInviteText>
              Ainda não tem o login?
              <Link to="/signup"> Cadastre-se</Link>
            </SubscribeInviteText>
          </LoginContainer>
        </motion.div>
      </MarvelWrapper>
    </Container>
  );
}
