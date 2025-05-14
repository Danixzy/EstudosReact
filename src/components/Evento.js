import Button from './Button';
function Evento(){

function MeuEvento(){
    console.log(`Ativou o evento!`);
}

function segundoEvento(){
    console.log(`Ativou o segundo evento!`);
}


    return(
        <div>
            <p>Clique para disparar um evento:</p>
            <Button event={MeuEvento} text="primeiro evento"/>
            <Button event={segundoEvento} text="segundo evento"/>
        </div>
    )
}

export default Evento;