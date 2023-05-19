import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import {
    LoginSection,
    CardView,
    CardWrapper,
    FooterWrapper,
    A
} from "./log-in.styles";
import { useAuth } from './auth';
import request from 'superagent';
import { Toast } from 'primereact/toast';
import { useNavigate } from "react-router-dom";

function Footer(): JSX.Element {
    return (
        <span>
            <A href="https://www.freepik.com/free-vector/football-sketch-with-smokey-wave-design-vector-illustration_30699996.htm#query=soccer%20drawing&position=10&from_view=keyword&track=ais">Image by Rochak Shukla</A> on Freepik
        </span>
    );
}

function Login() {
    const [credential, setCredential] = React.useState<string>('');
    const [loading, setLoading] = React.useState<boolean>(false);
    const toast: null | React.RefObject<Toast> = React.useRef(null);
    const { login } = useAuth();
    const navigate = useNavigate();

    const header = (
        <img alt="Meu Time logo" src="/assets/login-image.jpg" />
    );

    const footer = (
        <div className='flex justify-content-end'>
            <Button onClick={handleLogin} loading={loading} label='Login' />
        </div>
    );

    async function handleLogin(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        setLoading(true);
        
        if (!credential) {
            toast?.current?.show(
                {
                    severity: 'error',
                    summary: 'Algo deu errado',
                    detail: 'Por favor, checar chave de autenticacao e tentar novamente',
                }
            );
            return;
        }

        try {
            const response: any = await request
                .get('https://v3.football.api-sports.io/status')
                .set('x-rapidapi-key', credential)
                .set('x-rapidapi-host', 'v3.football.api-sports.io');

            if (response.body.errors?.token && toast) {
                toast.current?.show(
                    {
                        severity: 'error',
                        summary: 'Algo deu errado',
                        detail: 'Por favor, checar chave de autenticacao e tentar novamente',
                    }
                );
                throw new Error(response.body.errors?.token);
            }
            
            login(credential);
            navigate('/');
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setCredential(event.target.value);
    }

    return (
        <LoginSection className="login-section">
            <CardWrapper>
                <CardView title="Meu Time" header={header} footer={footer}>
                    <div className="flex justify-content-center">
                        <div className='flex flex-column gap-2'>
                            <label htmlFor="username">Chave de Autenticacao</label>
                            <InputText
                                id="username"
                                aria-describedby="username-help"
                                value={credential}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </CardView>
            </CardWrapper>
            <FooterWrapper>
                <Footer />
            </FooterWrapper>
            <Toast ref={toast} />
        </LoginSection>
    );
}

export default Login;