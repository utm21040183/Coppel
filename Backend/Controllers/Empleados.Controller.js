import {modeloEmpleado} from "../Models/Empleados.Model.js"

modeloEmpleado.create ({
    Name:"Patricia",
    Apepat:"Gonzalez",
    Edad:53,
    Correo:"patricia@copel.com"
})

export const testEmpleados=()=>{
    console.log("funciona el controlador")
}