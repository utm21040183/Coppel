import { modeloProducto } from "../Models/Productos.Model.js";

modeloProducto.create({
    Name:"Tenis",
    Precio:800,
    Categoría:"calzado"
})

export const testProducto=()=>{
    console.log("funciona el controlador")
}