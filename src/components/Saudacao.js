function Saudacao({nome}) {

    function gerarSaudacao(nome) {
        return `Olá ${nome}, tudo bem ?`
    }


    return (
    <>
    {nome && <p>{gerarSaudacao(nome)}</p>}
    </>
    )
}


export default Saudacao;