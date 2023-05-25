import { useState, useEffect } from "react";



function Formulario({ subscriptore, setSubscriptore, editarsubscriptor, setEditarsubscriptor }) {

    const [nombre, setNombre] = useState('');
    const [servicio, setServicio] = useState('');
    const [telefono, setTelefono] = useState('');
    const [correo, setCorreo] = useState('');
    const [contratacion, setContratacion] = useState('');
    const [corte, setCorte] = useState('');

    const [error, setError] = useState(false);

    //Mostrando los datos en el formulario utilizando useEffect

    useEffect(() => {
        if (Object.keys(editarsubscriptor).length > 0) {
            setNombre(editarsubscriptor.nombre)
            setServicio(editarsubscriptor.servicio)
            setTelefono(editarsubscriptor.telefono)
            setCorreo(editarsubscriptor.correo)
            setContratacion(editarsubscriptor.contratacion)
            setCorte(editarsubscriptor.corte)
        }
    }, [editarsubscriptor])

    //Validacion de que el formulario este lleno
    const ValidarFormulario = (e) => {
        e.preventDefault();

        if ([nombre, servicio, telefono, correo, contratacion, corte].includes('')) {

            console.log("Verificar que los campos esten llenos")

            setError(true);
            return;
        }
        setError(false)


        //Creacion de ID en caso de no tener BDD
        const GenerarId = () => {
            const random = Math.random().toString(36).substr(2);
            const fecha = Date.now().toString(36);

            return random + fecha;
        }



        //Sirve para mostrar todos los datos del formulario
        const ObjetoSubscriptor = {
            nombre,
            servicio,
            telefono,
            correo,
            contratacion,
            corte,
        }

        //Verificacion de ID a modificar y modificacion
        if (editarsubscriptor.id){
            ObjetoSubscriptor.id = editarsubscriptor.id
            const subscriptorActualizado = subscriptore.map (subscriptoresState => subscriptoresState.id ===
                editarsubscriptor.id ? ObjetoSubscriptor : subscriptoresState)

                setSubscriptore(subscriptorActualizado)
                setEditarsubscriptor({})
        } else {
            ObjetoSubscriptor.id = GenerarId()
            //Llamado y creacion de la copia del original
            setSubscriptore([...subscriptore, ObjetoSubscriptor])
        }

        //Dejar en vacio el formulario
        setNombre('');
        setServicio('');
        setTelefono('');
        setCorreo('');
        setContratacion('');
        setCorte('');
    }

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="text-3xl mb-10 ml-10 text-center">Formulario para registro {""}
                <span className="text-slate-950 font-black">clientes</span>
            </h2>

            <form
                onSubmit={ValidarFormulario}
                className="rounded-xl py-6 px-6 shadow-2xl ml-5 mr-5 bg-slate-50">
                {error &&
                    <div className="bg-red-700 text-center text-white font-bold rounded-lg mb-5 p-2 uppercase">
                        <h2>Todos los campos deben estar llenos</h2>
                    </div>
                }

                <label htmlFor="nombre" className="block uppercase">
                    Nombre y Apellido
                </label>

                <input
                    id="nombre"
                    type="text"
                    placeholder="Nombre y Apellido del cliente"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    className="mt-2 block w-full rounded-md border-cyan-600 border-2 shadow-md h-7 py-4 px-2"
                />

                <label htmlFor="servicio" className="block uppercase mt-5">
                    Servicio contratado
                </label>

                <input
                    id="servicio"
                    type="text"
                    placeholder="Servicio contratado"
                    value={servicio}
                    onChange={(e) => setServicio(e.target.value)}
                    className="mt-2 block w-full rounded-md border-cyan-600 border-2 shadow-md h-7 py-4 px-2"
                />

                <label htmlFor="telefono" className="block uppercase mt-5">
                    Telefono
                </label>

                <input
                    id="telefono"
                    type="text"
                    placeholder="Telefono"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    className="mt-2 block w-full rounded-md border-cyan-600 border-2 shadow-md h-7 py-4 px-2"
                />

                <label htmlFor="correo" className="block uppercase mt-5">
                    Correo Electronico
                </label>

                <input
                    id="correo"
                    type="email"
                    placeholder="Correo Electronico"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    className="mt-2 block w-full rounded-md border-cyan-600 border-2 shadow-md h-7 py-4 px-2"
                />

                <label htmlFor="contratacion" className="block uppercase mt-5">
                    Fecha de contratacion
                </label>

                <input
                    id="contratacion"
                    type="date"
                    value={contratacion}
                    onChange={(e) => setContratacion(e.target.value)}
                    className="mt-2 block w-full rounded-md border-cyan-600 border-2 shadow-md"
                />

                <label htmlFor="Corte" className="block uppercase mt-5">
                    Fecha de corte
                </label>

                <input
                    id="Corte"
                    type="date"
                    value={corte}
                    onChange={(e) => setCorte(e.target.value)}
                    className="mt-2 block w-full rounded-md border-cyan-600 border-2 shadow-md"
                />

                <input
                    type="submit"
                    value={editarsubscriptor.id ? 'Editar Cliente' : 'Agregar cliente'}
                    className="bg-blue-600 w-full mt-8 text-white hover:bg-blue-900 rounded-md h-10"
                />

            </form>


        </div>
    )
}

export default Formulario;