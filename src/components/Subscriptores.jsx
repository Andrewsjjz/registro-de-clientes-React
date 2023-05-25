import { useState, useEffect } from "react";

function Subscriptores({ cliente, setEditarsubscriptor, eliminarSubscriptor}) {

const {nombre, servicio, telefono, correo, contratacion, corte, id} = cliente

const HandleEliminar = ()  => {
    const eliminar = confirm("¿Estas seguro que deseas eliminar?")

    if (eliminar){
        eliminarSubscriptor(id)
    }
}

    return (

        <>
            <div className="bg-slate-50 ml-5 mr-5 mt-5 mb-1 rounded-xl shadow-lg">
                <p className="px-4 py-2 uppercase font-bold">
                    Nombre y Apellido: {""}<span className="font-normal normal-case">{nombre}</span>
                </p>
                <p className="px-4 py-2 uppercase font-bold">
                    Servicio contratado: {""}<span className="font-normal normal-case">{servicio}</span>
                </p>
                <p className="px-4 py-2 uppercase font-bold">
                    Telefono: {""}<span className="font-normal normal-case">{telefono}</span>
                </p>
                <p className="px-4 py-2 uppercase font-bold">
                    Correo Electronico: {""}<span className="font-normal normal-case">{correo}</span>
                </p>
                <p className="px-4 py-2 uppercase font-bold">
                    Fecha de contratacion: {""}<span className="font-normal normal-case">{contratacion}</span>
                </p>
                <p className="px-4 py-2 uppercase font-bold">
                    Fecha de corte: {""}<span className="font-normal normal-case">{corte}</span>
                </p>

                <div className="flex justify-between">
                    <button
                    onClick={() => setEditarsubscriptor(cliente)}
                    type="button"
                    className="bg-sky-600 py-2 px-10 mb-5 mt-5 ml-5 rounded-xl text-white font-bold uppercase hover:bg-sky-700"
                    >Editar</button>

                    <button
                    type="button"
                    className="bg-red-600 py-2 px-10 mb-5 mt-5 mr-5 rounded-xl text-white font-bold uppercase hover:bg-red-700"
                    onClick={HandleEliminar}
                    >Eliminar</button>
                </div>
            </div>
        </>

    )
}

export default Subscriptores;