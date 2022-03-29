class serviçosDAO {
    constructor(db) {
        this.db = db
    }

    todosServiços = () => {

        return new Promise((resolve, reject) => {
            this.db.all('SELECT * FROM SERVIÇOS', (error, rows) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(rows)
                }
            })
        })
    }

    insereAluno = (novoAluno) => {

        return new Promise((resolve, reject) => {
            console.log(novoAluno)
            this.db.run('INSERT INTO SERVIÇOS (AULA, PROFISSIONAL, TREINO, PERIODO, DIASEMANA, ALUNO) VALUES(?,?,?,?,?,?)', novoAluno.aula, novoAluno.profissional, novoAluno.treino, novoAluno.periodo, novoAluno.diaSemana, novoAluno.aluno,
            ),
                
                resolve(`O aluno ${novoAluno.aluno} foi adicionado com sucesso`)
            try {
                if (!error) {
                    resolve(`O aluno ${novoAluno.aluno} foi adicionado com sucesso`)
                } else {
                    throw new Error
                }
            } catch (error) {
                reject(error)
            }

        })
    }


    deletaAluno = (ID) => {
        return new Promise((resolve, reject) => {
            this.db.run('DELETE FROM SERVIÇOS WHERE ID = ?',
                ID,
                (error) => {
                    if (error) {
                        reject(error)
                    } else {
                        resolve({
                            "serviço": ` Cadastro aluno ${ID} deletado com sucesso`,
                            "erro": false
                        })
                    }
                })
        })
    }

    atualizaServiços = (ID, serviço) => {
        return new Promise((resolve, reject) => {
            this.db.run('UPDATE SERVIÇOS SET AULA = ?, PROFISSIONAL = ?, TREINO = ?, PERIODO = ?, DIASEMANA = ?, ALUNO = ? WHERE ID = ?',
                serviço.aula, serviço.profissional, serviço.treino, serviço.periodo, serviço.diaSemana, serviço.aluno,
                ID,
                (error) => {
                    if (error) {
                        reject(error)
                    } else {
                        resolve({
                            "serviço": serviço,
                            "erro": false
                        })
                    }
                })
        })
    }

}



export default serviçosDAO