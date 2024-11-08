import {Schema, model} from "mongoose";

export const EsquemaGeneral = new Schema({
    Name:{
        type:String
    },
    Apepat:{
        type:String
    },
    Edad:{
        type:Number
    },
    Correo:{
        type:String
    }
})

export const modeloCliente = new model("Tabla de Clientes", EsquemaGeneral);