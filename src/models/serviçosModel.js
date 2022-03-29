import ServiçosDAO from "../DAO/ServiçosDAO.js";
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

insereAluno = async (servico) => {
    try {
        const novoAluno = new ServiçosSchema(servico.aula, servico.profissional, servico.treino, servico.periodo, servico.diaSemana, servico.aluno)
        
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

atualizaServiços = async (aluno, servico) => {
    try {
        const serviçoAtualizado = new ServiçosSchema(servico.aula, servico.profissional, servico.treino, servico.período, servico.diaSemana, servico.aluno)
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
