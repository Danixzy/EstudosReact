import { useState } from 'react';


function Form() {

    function cadastrarUsuario(e){
        e.preventDefault();
        console.log(`Nome: ${name} e Senha: ${password}`);
    }

    const [name, setNome] = useState();
    const [password, setSenha] = useState();

    return (
        <div>
            <h1>Meu Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Digite o seu nome:" 
                    onChange={(e) => setNome(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha: </label>
                    <input type="password" 
                    id="password" 
                    name="password" 
                    placeholder="Digite sua senha" 
                    onChange={(e) => setSenha(e.target.value)}
                    />
                </div>
                <div>
                    <button type="submit">Cadastrar</button>
                </div>
            </form>
        </div>
    )
}

export default Form