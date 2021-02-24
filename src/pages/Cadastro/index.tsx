import axios from 'axios'
import React, { useState } from 'react'
import { useRef } from 'react'
import { Redirect } from 'react-router-dom'
import './cadastro.scss'
import toast, { Toaster } from 'react-hot-toast'



function Cadastro () {

    let nomeInput = useRef<HTMLInputElement>(null)
    let emailInput = useRef<HTMLInputElement>(null)
    let passwordInput = useRef<HTMLInputElement>(null)
    let idadeInput = useRef<HTMLInputElement>(null)

    const [logado, setLogado] = useState<Boolean>(false)
    
    const enviaForm = () => {
         
        const nome = nomeInput.current?.value
        const email = emailInput.current?.value
        const password = passwordInput.current?.value
        const idade = idadeInput.current?.value
        
       
           if (Number(idadeInput.current?.value) >= 18 ) {
            axios.post("http://localhost:4000/register", {
            nome: nome,
            email: email,
            password: password,
            idade: idade
        })
            .then(resposta => {
                localStorage.setItem("token", resposta.data.accessToken)
                setLogado(true)
            })} else {
                toast.error("O consumo de bebidas alcóolicas é proibido para menores de 18 anos. Seja consciente!")
            }
    };

    return (
        <div className="container">
           
            <img src="https://www.cupomvalido.com.br/wp-content/uploads/emporio-da-cerveja-logo-1.png" className="App-logo" alt="cerveja" />
           
            <div className="login">

                <h1 className='cadastro'>Cadastre-se aqui</h1>

                <input type="text" placeholder="Digite seu nome" ref={nomeInput} /> <br />
                <input type="number" placeholder="Digite sua idade" ref={idadeInput} /> <br />
                <input type="email" placeholder="Digite seu e-mail" ref={emailInput} /> <br />
                <input type="password" placeholder="Digite sua senha" ref={passwordInput} /> <br />

                <button onClick={enviaForm} className="btn-enviar">enviar</button>

                <Toaster />
            </div>
            <div className="shadow"></div>


            {logado && <Redirect to="/home" />}
        </div>
    )
};

export default Cadastro;