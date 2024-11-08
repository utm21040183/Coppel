import { modeloCliente } from "../Models/Clientes.Model.js";

modeloCliente.create({
    Name:"Salma",
    Apepat:"Padilla",
    Edad:"20",
    Correo:"salmapadillat6.1@gmail.com"
})

export const testCliente=()=>{
    console.log("funciona el controlador")
}