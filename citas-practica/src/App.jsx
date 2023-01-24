/*importar modulos*/
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPaciente from "./components/ListadoPaciente"
import {useState} from "react"

/*Funcion creadora de la aplicación */ 
function App() {
  const [pacientes, setPacientes] = useState([]);
  //extraer valores con la tarjeta para editar y eliminar
  const [paciente, setPaciente] = useState({});

  return (
    /*Etiqueta padre y el body de la página*/
    <div className="container mx-auto mt-20"> 
      <Header />
      <div className="mt-12 md:flex">
        <Formulario 
          pacientes = {pacientes}
          setPacientes = {setPacientes}
          paciente = {paciente}
        />
        <ListadoPaciente 
          pacientes = {pacientes}
          setPaciente = {setPaciente}
        />
      </div>
    </div>
  )
}
/*Export para importar el módulo a otras partes de la app*/
export default App


