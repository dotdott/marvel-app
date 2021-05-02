import { useState } from 'react';
import { Link } from 'react-router-dom';

import {
    LoginContainer,
} from './styles';

import {
    Title,

    Form,

    UsernameInput,
    PasswordInput,
    LoginButton,

    SubscribeInviteText,
    ErrorText,
} from '../styles';

import { Background } from '../../../components/Background';
import { useDispatch, useSelector } from 'react-redux';

interface ErrorData {
    errors: {
        error: string;
    }
}

export function Signup() {
    const dispatch = useDispatch();

    const [changes, setChanges] = useState({
        email: '',
        password: '',
        password2: '',
        error: '',
    })

    // if(auth.uid) return <Redirect to='/' />

    const ERROR = useSelector((state: ErrorData) => {
        const err = state.errors;

        return err.error
    });


    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (changes.password === changes.password2) {
            dispatch({
                type: 'SIGN_UP',
                email: changes.email,
                password: changes.password
            })
        } else {
            dispatch({
                type: 'CHANGE_ERROR',
                error: 'not_match'
            })
        }
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const name = e.target.name;
        const value = e.target.value;

        if (name === 'email') {
            setChanges({ ...changes, email: value });
        }

        if (name === 'password') {
            setChanges({ ...changes, password: value });
        }

        if (name === 'password2') {
            setChanges({ ...changes, password2: value });
        }

    }
    return (
        <>
            <Background />

            <LoginContainer>
                <Title>Acesse sua conta:</Title>

                <Form onSubmit={e => handleSubmit(e)}>
                    <UsernameInput
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        onChange={e => handleChange(e)}
                    />
                    <PasswordInput
                        type="password"
                        name="password"
                        placeholder="Senha"
                        onChange={e => handleChange(e)}
                    />
                    <PasswordInput
                        type="password"
                        name="password2"
                        placeholder="Confirme sua senha"
                        onChange={e => handleChange(e)}
                    />
                    <ErrorText>
                        {ERROR}
                    </ErrorText>

                    <LoginButton type="submit">Cadastrar</LoginButton>
                </Form>

                <SubscribeInviteText>
                    Já tem uma conta?
                 <Link to="/login">Acesse aqui</Link>
                </SubscribeInviteText>
            </LoginContainer>
        </>
    )
}
