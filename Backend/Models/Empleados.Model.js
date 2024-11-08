import { EsquemaGeneral } from "./Clientes.Model.js";
import { model } from "mongoose";

export const modeloEmpleado = new model("Tabla de empleados", EsquemaGeneral)