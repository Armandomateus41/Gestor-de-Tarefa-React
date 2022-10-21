import AnotherComponent from "./AnotherComponent";

function FirstComponents() {
    //Algum comentario
    const name = "Armando";

    return (
        <div className="firstcomponent">
            {/*Comentario no JSX */}
            <p>primeiro Componente</p>
            {2 + 2}
            <p>Nome: {name} </p>
            <AnotherComponent />
        </div>
    );
}


export default FirstComponents;