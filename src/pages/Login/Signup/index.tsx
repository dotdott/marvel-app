import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Background } from '../../../components/Background';

import {
    LoginContainer,
    Title,

    Form,

    UsernameInput,
    PasswordInput,
    LoginButton,

    SubscribeInviteText,
} from '../styles';

export function Signup() {
    const [changes, setChanges] = useState({
        email: '',
        password: '',
        password2: '',
    })

    // if(auth.uid) return <Redirect to='/' />

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        console.log(changes)
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const name = e.target.name;
        const value = e.target.value;

        if(name === 'email'){
            setChanges({...changes, email: value});
        }

        if(name === 'password'){
            setChanges({...changes, password: value});
        }

        if(name === 'password2'){
            setChanges({...changes, password2: value});
        }       

    }
    return (
        <LoginContainer>
            <Background />
            
            <Title>Acesse sua conta:</Title>

            <Form onSubmit={e => handleSubmit(e)}>
                <UsernameInput 
                    type="text" 
                    name="username" 
                    placeholder="Usuário"
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

                <LoginButton type="submit">Cadastrar</LoginButton>
            </Form>
            
            <SubscribeInviteText>
                Já tem uma conta?
                 <Link to="/login">Acesse aqui</Link>
            </SubscribeInviteText>
        </LoginContainer>
    )
}
