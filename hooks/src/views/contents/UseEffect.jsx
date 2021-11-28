import './UseEffect.css'
import React, {useState, useEffect} from "react"

const UseEffect = props => {
    
    const [notaFinal, setNotaFinal ] = useState(0)
    const [situacao, setSituacao] = useState("")

    useEffect( () => {
        console.log('useEffect: executa a cada Re-Redenrização \n\n')
     })

     useEffect(  () => {
         console.log('useEffect condicional ao componente:')
         console.log('Executa somente na montagem do componente. \n\n')
     }, [])


     useEffect ( () =>{
         setSituacao( verificaSituacao(notaFinal) )
     }, [notaFinal] )

     UseEffect( () => {
         console.log('useEffect condicional')
        console.log('Nesse caso, executa quando o state notaFinal for alterado. \n\n')
     }, [situacao] )

useEffect( () => {
    console.log('useEffect condicional (com limpeza):')
    console.log('executa enquanto um componente existir. \n\n')

    return () => {
        console.log('useEffect condicional (com limpeza):')
        console.log('executa o return quando o componente for desmontado. \n\n')
    }
    }, [])

     console.log('\n0 componente foi renderizado. \n\n')
     function verificaSituacao(nota) {
        return nota>= 6 ? "Aprovado" : "Reprovado"
    }
return (
    <div>
        <div className="titulo">
            <h1> useEffect</h1>
            <h2>Permite executar efeitos colaterais em componente funcionais</h2>
        </div>

        <div className="conteudo">


            <label className="campo">Nota final:</label> 
            <input
            className="campo"
            type="number"
            min={o}
            man={10}
            value={notaFinal}
            onchange={e => setNotaFinal(e.target.value) }
            />
        <label className="campo"> Situação</label>
        <p className="mensagem" id={situacao}>{situacao} </p>
        </div>
    </div>
)
}
export default useEffect 