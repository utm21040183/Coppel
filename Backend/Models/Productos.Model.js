import { Schema, model } from "mongoose";

const EsquemaProducto = new Schema({
    Name:{
        type:String
    },
    Precio:{
        type:Number
    },
    Categoría:{
        type:String
    }
})

export const modeloProducto = new model ("Tabla de productos", EsquemaProducto)