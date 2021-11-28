import './UseState.css'
import React, { useState, useContext } from "react"

import {AppContexto} from '../../data/Store'

const UseState = props => {

const {contextoNome, setContextoNome} = useContext(AppContexto)

const [nome, setNome ] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [mensagem, setMensagem] = useState("")

    function alteraNomeContexto(nome){
        setContextoNome(nome)
    }

return (
    <div>
        <div className="titulo">
         <h1>UseState</h1>
         <h2> Manipula Estados em componentes funcionais</h2>
        </div>

        <div className = "conteudo">
            
            <input 
            className="campo"
            type="text" value={nome}
            placeholder="digite seu nome"
            onChange={ e => setNome(e.target.value)}
        />
        <input 
        classname="campo"
        type="text"
        value={sobrenome}
        placeholder="Digite seu sobrenome"
        onChange={e => setSobrenome(e.target.value)}
    />

            <button 
            classname="botao"
            onClick={ () => setMensagem('Olá ${nome} ${sobrenome}, seja bem-vindo')}
            >ok</button>

            <p className="mensagem">{mensagem}</p>
        
        <button 
        className="botao"
        onClick={ () => alteraNomeContexto(nome) }
        > Altera contexto (Store)</button>
             </div>
    </div>
    )
}
export default UseState