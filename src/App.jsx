import { useState, useEffect } from 'react';
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoClientes from "./components/ListadoClientes"

function App() {

const [subscriptore, setSubscriptore] = useState([])
const [editarsubscriptor, setEditarsubscriptor] = useState ({})

useEffect (() => {
  const obtenerLS = () => {
    const subscriptorLS = JSON.parse(localStorage.getItem('subscriptore')) ?? [];
    
    setSubscriptore(subscriptorLS);
  }
  obtenerLS();
}, []);

useEffect (() => {
  localStorage.setItem('subscriptore', JSON.stringify (subscriptore))
},[subscriptore])


const eliminarSubscriptor = (id) =>{
  const Eliminarsubscriptor = subscriptore.filter( subscriptor => subscriptor.id !== id);

  setSubscriptore(Eliminarsubscriptor)
  
}



  return (
    <div className="container mx-auto">
      <Header      
      />

      <div className="mt-16 md:flex">

      <Formulario
      subscriptore={subscriptore}
      setSubscriptore={setSubscriptore}
      editarsubscriptor={editarsubscriptor}
      setEditarsubscriptor={setEditarsubscriptor}
      />

      <ListadoClientes
      subscriptore={subscriptore}
      setEditarsubscriptor={setEditarsubscriptor}
      eliminarSubscriptor={eliminarSubscriptor}
      />

      </div>

    </div>
  )
}

export default App
