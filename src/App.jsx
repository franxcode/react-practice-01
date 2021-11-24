// import Frutas from "./components/Frutas";

import FormControlled from "./components/FormControlled";
// import FormUncontrolled from "./components/FormUncontrolled";

const App = () => {

    // const user = true;
    // const SaludoBienvenida = () => (
    //     <h2 className="text-success">Bienvenido!</h2>
    // );
    // const SaludoDespedida = () => (
    //     <h2 className="text-danger">Chao!</h2>
    // );
    return (
        // <div> mi primer componente!
        // {user ? <SaludoBienvenida/> : <SaludoDespedida/>}
        // <Frutas/>
        // <Frutas/>
        // <Frutas/>
        // <Frutas/>
        // </div>
        <div className="container">
        <h1>Formularios</h1>
        {/* <FormUncontrolled/> */}
        <FormControlled/>
        </div>
    );
};

export default App