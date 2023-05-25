import Subscriptores from "./Subscriptores";


function ListadoClientes ({subscriptore, setEditarsubscriptor, eliminarSubscriptor}) {


    return(
        <div className="md:w-1/2 lg:w-3/5 md:h-screen">
        <h2 className="text-3xl text-center mb-10">
            Lista de <span className="text-slate-950 font-black">clientes</span> 
            </h2>

        { subscriptore.map ( cliente => (
        <Subscriptores
            key={cliente.id}
            cliente={cliente}
            setEditarsubscriptor={setEditarsubscriptor}
            eliminarSubscriptor={eliminarSubscriptor}
        />
            
        )) }



        </div>
    )
}

export default ListadoClientes;