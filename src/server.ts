import 'reflect-metadata';
import  express, { response } from "express";
import "./database";
const app = express();


/**
 * GET => Buscar
 * POST => Salvar
 * PUT => Alterar
 * DELETE => Deletar
 * PATCH => Alteração específica */

 app.get("/", (request, response)=>{
    return response.json({message: "Olá terra plana"});
 });
app.listen(3003, () => console.log("Servidor ativo"));