<h1>Academia</h1>


 # API_Academia

Projeto para fins didáticos Resilia Educação - Projeto Final Módulo 4
* Tem como objetivo criar uma API RESTful de uma academia, onde será possível aplicar as operações CRUD na entidade "Serviços", utilizando o Node.js com framework Express.

 # Pré-Requisitos
- Node.js v.16.14.0
- NPM v.8.3.1

Tecnologias, pacotes e frameworks utilizados
* [Express](https://expressjs.com) v.4.17.3
* [Nodemon](https://www.npmjs.com/package/nodemon) v.2.0.15
* [SQLite](https://www.npmjs.com/package/sqlite3) v.5.0.0
* [JavaScript](https://www.javascript.com/)
* [Node.js](https://nodejs.org/en/) v16.14.0
* [NPM](https://www.npmjs.com/) v8.3.1

 
 # Instalação da Aplicação
 
Para clonar o repositório:
 ```sh
   git clone https://github.com/SuzannePS/API_Academia.git
   ```
Acesse a pasta criada:
```sh
cd API_Academia
```
Para iniciar os projetos use o comando abaixo:
```sh
npm run dev

* Método GET para visualizar todos os serviços ( /servicos)

Schema da resposta. 
{
"serviço": [
 {
   "ID"
   "AULA": 
   "PROFISSIONAL"
   "TREINO"
   "PERIODO"
   "DIASEMANA"
   "ALUNO"
  ]
  
  * Método POST para adicionar um novo aluno ( /servicos)

Para adicionar, segue o esquema:
  {
    "aula": 
    "profissional" : 
    "treino" : 
    "periodo" : 
    "diaSemana" : 
    "aluno :
}

Schema da resposta:

  "Mensagem": "O aluno teste foi adicionado com sucesso",
 
  * Método DELETE para apagar por ID ( /servicos/ID/{o número de id})

Schema da resposta:

  "Mensagem": 
	"serviço": " Cadastro aluno 7 deletado com sucesso",
	"erro": false
  
  * Método PUT para atualizar serviços por ID ( /servico/ID/{o número de id})

Schema da resposta:

"serviço": {
	     "aula": 
	     "profissional": 
	     "treino": 
	     "diaSemana": 
	     "aluno": 
	   },
	"erro": false
     }
  
