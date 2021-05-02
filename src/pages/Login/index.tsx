import { Link } from 'react-router-dom';

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
} from './styles';

import {
    Container,
    MarvelRedBackground,
    MarvelTitle,
    MarvelWrapper,
} from '../Preload/styles';

import { useState } from 'react';
import { Background } from '../../components/Background';
import { motion } from 'framer-motion';
import { loginLogoVariants, loginVariants, welcomeVariants } from '../../components/MotionVariants';
import { useDispatch, useSelector } from 'react-redux';


interface ErrorData {
    errors: {
        error: string;
    }
}

export function Login() {
    const [changes, setChanges] = useState({
        email: '',
        password: '',
    })

    const dispatch = useDispatch();

    const ERROR = useSelector((state: ErrorData) => {
        const err = state.errors;

        return err.error
    });


    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        dispatch({ 
            type: 'SIGN_IN',
            email: changes.email,
            password: changes.password
        })
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const type = e.target.type;
        const value = e.target.value;

        if (type === 'email') {
            setChanges({ ...changes, email: value });
        }

        if (type === 'password') {
            setChanges({ ...changes, password: value });
        }
    }

    return (
        <Container>
            <Background />
            
            <MarvelWrapper>
                <motion.div
                    style={{
                        height: '100%',
                    }}
                    initial={false}
                    animate="exit"
                    exit="exit"
                    variants={loginLogoVariants}
                >
                    <SloganWrapper>
                        <MarvelRedBackground />
                        <MarvelTitle>
                            ma <br />
                            rve <br />
                            l
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

                        <Form onSubmit={e => handleSubmit(e)}>
                            <UsernameInput
                                type="email"
                                placeholder="E-mail"
                                onChange={e => handleChange(e)}
                            />
                            <PasswordInput
                                type="password"
                                name="password"
                                placeholder="Senha"
                                onChange={e => handleChange(e)}
                            />

                            <ErrorText>{ERROR}</ErrorText>

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
    )
}
