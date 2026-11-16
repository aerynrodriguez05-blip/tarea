
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { eliminarProducto } from "../actions/productosAction";

function Boton() {
    const [text, setTexto] = useState("Agregar al carrito");
    const [color, setColor] = useState("bg-blue-500");

    function agregado() {
        setTexto("Agregado");
        setColor("bg-green-500");
    }

    return (
        <button
            onClick={agregado}
            className={"p-2 rounded text-white " + color}
        >
            {text}
        </button>
    );
}

export default function TarjetaProducto({ producto }) {
    const [cargando, setCargando] = useState(false);

    const handleEliminar = async () => {
        const confirmacion = window.confirm(
            `¿Estás seguro de eliminar "${producto.nombre}"?`
        );

        if (confirmacion) {
            setCargando(true);

            try {
                await eliminarProducto(producto.id);

            } catch (error) {
                alert("Ocurrió un error al eliminar producto");
                setCargando(false);
            }
        }
    };

   return (
        <section className="p-6">
            <div className="flex gap-3">
                <div className="border p-4 rounded w-48">

                    <img
                        src={producto.img}
                        alt={producto.nombre}
                        className="w-full h-32 object-contain mb-3"
                    />

                    <h3 className="font-bold">
                        {producto.nombre}
                    </h3>

                    <h3>{producto.descripcion}</h3>

                    <p className="mb-3">
                        ${producto.precio}
                    </p>

                    <Boton />
                    <button
                        onClick={handleEliminar}
                        disabled={cargando}
                        className="bg-red-500 text-white p-2 rounded"
                    >
                    {cargando ? "Eliminando..." : "Eliminar"}
                    </button>

                   

                </div>
            </div>
        </section>
    );
};

    


