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

    app.get('/serviço/aluno/:aluno', async (req, res) => {
            const aluno = req.params.aluno;
            res.json(await serviçosModel.insereAluno(aluno))
    })

    app.post('/serviços', async (req, res) => {
        const body = req.body
        try {
            const resposta = await serviçosModel.insereAluno(body)
            res.status(201).json({
                "mensagem" : resposta,
                "erro" : false
            })
        } catch (error) {
            res.status(400).json({
                "mensagem": error.message,
                "erro": true
            })
        }   
    })

    app.delete('/serviços/ID/:ID', async (req, res) => {
        const id = req.params.ID
        res.json(await serviçosModel.deletaServiços(id))
    })

    app.put('/serviços/ID/:ID', async (req, res) => {
        const id = req.params.ID
        const body = req.body
        res.json(await serviçosModel.atualizaServiços(id, body))
    })
}

export default serviçosController