import './App.css'; 
import { Saludo } from './Saludo/Saludo.jsx';
export const App = () =>{
  return(
    <div>
      <Saludo mensaje={"Hola, buenos dias"}/>
    </div>
  )
}
//2:17

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
