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
import { loginLogoVariants, loginVariants } from '../../components/MotionVariants';


export function Login() {
    const [changes, setChanges] = useState({
        email: '',
        password: '',
    })

    // if(auth.uid) return <Redirect to='/' />


    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        console.log(changes.email, changes.password)
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
                    initial="enter"
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
                        <Link to="/signup">Cadastre-se</Link>
                        </SubscribeInviteText>
                    </LoginContainer>
                </motion.div>
            </MarvelWrapper>
        </Container>
    )
}
