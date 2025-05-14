import { useState } from "react";

function Condicional(){

    function enviarEmail(e){
        e.preventDefault();
        setUserEmail(email);
        console.log("Email enviado com sucesso!");
    }

    function limparEmail(){
        setUserEmail("");
    }

    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();

    return(
        <div>
            <h2>Cadastre o seu email:</h2>
            <form>
                <input type="email" placeholder="Digite o seu email:" 
                onChange={(e) => setEmail(e.target.value)}
                />
                <button onClick = {enviarEmail} type="submit">Enviar</button>
            </form>
            {userEmail && (
                <div>
                    <p>O email cadastrado foi: {userEmail}</p>
                    <button onClick = {limparEmail}>Limpar email</button>
                </div>
            )}
        </div>
    )
}

export default Condicional;