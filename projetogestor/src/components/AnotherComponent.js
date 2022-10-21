const AnotherComponent = () => {
    const handleclick =() => {
        console.log("Clickou no botao!");
    }; 
    

    return (
        <div>
            <p>segundo Componente</p>
            <button onClick={handleclick}>Evento de click </button>
            <hr />
            <button onClick={() => console.log("teste")}>Evento no Elemento</button>
        </div>
    );
};

export default AnotherComponent;
