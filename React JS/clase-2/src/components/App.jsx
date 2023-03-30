import './App.css'; 
import { Saludo } from './Saludo/Saludo.jsx';
import { Count } from './Count/Count.jsx'

export const App = () =>{
  return(
    <div>
      <Count />
      <Saludo mensaje1={"Hola, buenos dias"} mensaje2={"Hola, buenas noches"}/>
    </div>
  )
}

// export const App = ()  =>{

//  const valor = 5
//   return (
//     <div className='divGeneral' style={{color:"red"}}>
//       <h1>Hola!</h1>
//       <p>{valor}</p>
//       <input type="text" />

//     </div>
//   );
// }
