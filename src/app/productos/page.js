
import TarjetaProducto from "../componentes/tarjeta";
import { createClient } from "../lib/supServer";

async function getProductos() {
    const supabase = await createClient();

    const { data: productos, error } = await supabase
        .from("productos")
        .select("id, nombre, descripcion, precio, img");

    if (error) {
        console.error("Error al obtener productos:", error.message);
        return [];
    }

    return productos;
}

export default async function ProductosPage() {
    const productos = await getProductos();

    return (
        <section>
            <h2 className="text-2xl font-bold mb-7">
                CATALOGO
            </h2>

            {productos.map((item) => (
                <TarjetaProducto
                    key={item.id+1}
                    producto={item}
                />
            ))}
        </section>
    );
}
