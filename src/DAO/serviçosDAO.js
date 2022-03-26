class serviçosDAO{
    constructor(db){
        this.db = db
}

todosServiços = ()=>{

    return new Promise((resolve, reject)=>{
        this.db.all('SELECT * FROM SERVIÇOS', (error, rows)=>{
            if(error){
                reject(error)
            }else{
                resolve(rows)
            }
        })
    })
}

insereAluno = (aluno)=>{
     
    return new Promise((resolve, reject)=>{
        this.db.run('INSERT INTO (SERVIÇOS AULA, PROFISSIONAL, TREINO, PERÍODO, DIASEMANA, ALUNO) VALUES(?,?,?,?,?,?)'), 
        aluno.aula, aluno.profissional, aluno.treino, aluno.período, aluno.diaSemana, aluno.aluno, (erro)=>{
            if(erro){
                reject (erro)
            } else {
                resolve (erro)
            }
        }
    })
}
           
     
        



        
deletaAluno = (ID)=>{
    return new Promise((resolve, reject)=>{
        this.db.run('DELETE FROM SERVIÇOS WHERE ID = ?',
        ID,
        (error)=>{
            if(error){
                reject(error)
            }else{
                resolve({
                    "serviço": ` Cadastro aluno ${ID} deletado com sucesso`,
                    "erro": false
                })
            }
        })
    })
}

atualizaServiços = (ID, serviço)=>{
    return new Promise((resolve, reject)=>{
        this.db.run('UPDATE SERVIÇOS SET AULA = ?, PROFISSIONAL = ?, TREINO = ?, PERÍODO = ?, DIASEMANA = ?, ALUNO = ?, = ? WHERE ID = ?',
        serviço.aula, serviço.profissional, serviço.treino, serviço.período, serviço.diaSemana, serviço.aluno,
        ID,
        (error)=>{
            if(error){
                reject(error)
            }else{
                resolve({
                    "mensagem": `Olá ${ID}, seu agendamento de ${serviço} foi atualizado com sucesso`,
                    "serviço": serviço,
                    "erro": false
                })
            }
        })
    })
}

}



export default serviçosDAO
