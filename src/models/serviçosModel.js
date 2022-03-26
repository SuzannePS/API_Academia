import ServiçosDAO from "../DAO/serviçosDAO.js";
import ServiçosSchema from "./schema/ServiçosSchema.js";

class Serviços {
    constructor(db){
        this.dao = new ServiçosDAO(db);

    }

    todosServiços =  async () => {
        try{
            return await this.dao.todosServiços()
        }catch(error) {
            throw new Error (error.mensagem);

        }
    }


insereAluno = async (serviço) => {
    try {
        const novoAluno = new ServiçosSchema(serviço.aula, serviço.profissional, serviço.treino, serviço.período, serviço.diaSemana, serviço.aluno)
        return await this.dao.insereAluno(novoAluno)
    } catch (error) {
        throw new Error (error.mensagem)
    }
}


deletaAluno = async (ID) => {
    try {
        return await this.dao.deletaAluno(ID)  
    } catch (error) {
        return {
            "mensagem" : error.message,
            "erro" : true
        }
    }
}

atualizaServiços = async (aluno, serviço) => {
    try {
        const serviçoAtualizado = new ServiçosSchema(serviço.aula, serviço.profissonal, serviço.treino, serviço.período, serviço.diaSemana, serviço.aluno)
        return await this.dao.atualizaServiços(aluno, serviçoAtualizado)
    } catch (error) {
        return ({
            "mensagem" : error.message,
            "erro" : true
        })
    }
}
}
export default Serviços
