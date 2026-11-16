"use server";

import { createClient } from "../lib/supServer";
import { revalidatePath } from "next/cache";

export async function eliminarProducto(id) {
    const supabase = await createClient();


    const { error } = await supabase
        .from("productos")
        .delete()
        .eq("id", id)

    if (error) {
        console.error('Error al eliminar producto:', error.message)
        throw new Error('No se pudo eliminar el producto');
    }

    revalidatePath("/productos");
};