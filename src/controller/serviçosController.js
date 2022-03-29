import Serviços from "../models/serviçosModel.js"

const serviçosController = (app, bancoDeDados) => {

    const serviçosModel = new Serviços (bancoDeDados)

    app.get('/servicos', async (req, res) => {
        try {
            const resposta = await serviçosModel.todosServiços()
            res.status(200).json({
                "serviço" : resposta,
                "erro" : false
            })
        } catch (error) {
            res.status(400).json ({
                "mensagem" : error.message,
                "erro" : true
            })
        }    
    })

    app.post('/servicos', async (req, res) => {
        const body = req.body
        
        res.json (await serviçosModel.insereAluno(body))
     })

    app.delete('/servicos/ID/:ID', async (req, res) => {
        const id = req.params.ID
        res.json(await serviçosModel.deletaAluno(id))
    })

    app.put('/servicos/ID/:ID', async (req, res) => {
        const id = req.params.ID
        const body = req.body
        res.json(await serviçosModel.atualizaServiços(id, body))
    })
}

export default serviçosController