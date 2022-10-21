import {useEffect, useState}  from 'react';
const Hooks  = () => {

    let idade = 30
    const [novaIdade, setNovaidade] =  useState(40);

    const changeAge = () => {
        idade =  31;
    };


    const changeNewAge = () => {
        setNovaidade(45);
    };

    useEffect(() => {
        console.log("Testando!");
    });
    return (
        <div>
            <p>idade: {idade}</p>
            <button onClick={changeAge}>mudar idade</button>
            <p>idade: {novaIdade}</p>
            <button onClick={changeNewAge}>mudar nova idade</button>
        </div>

    );
};
export default Hooks;