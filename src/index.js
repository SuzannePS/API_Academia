import express from "express";
import serviçosController from "./controller/serviçosController.js";
import database from "./database/sqlite-db.js"


const app = express()
const porta = 3005

app.use(express.json())

serviçosController(app, database)


app.listen(porta, () => {
    console.log('o servidor no localhost está ok!')
})