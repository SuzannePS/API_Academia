import sqlite3 from 'sqlite3'
sqlite3.verbose()
import { dirname } from'path'
import { fileURLToPath } from 'url'
const filePath = dirname(fileURLToPath(import.meta.url)) + '/database.db'
const db = new sqlite3.Database(filePath);


const SERVIÇOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "SERVIÇOS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "AULA" VARCHAR(100),
    "PROFISSIONAL" VARCHAR(100),
    "TREINO" VARCHAR(100),
    "PERIODO" VARCHAR(100),
    "DIASEMANA" VARCHAR(100),
    "ALUNO" VARCHAR(100)
  );`;

const ADD_SERVIÇOS_DATA = `
INSERT INTO SERVIÇOS (ID, AULA, PROFISSIONAL, TREINO, PERIODO, DIASEMANA, ALUNO)
VALUES 
    (1, 'Musculação', 'Karina', 'A - Iniciante', 'Manhã', 'Segunda-Feira', 'Cinthia'),
    (2, 'Natação', 'Inara', 'B - Intermediário', 'Noite', 'Terça-Feira', 'Felipe'),
    (3, 'Pilates', 'Jeffersom', 'C - Avançado', 'Tarde', 'Quarta-Feira', 'André'),
    (4, 'Musculação', 'Rafaela', 'B- Intermediário', 'Tarde', 'Quinta', 'Luana'),
    (5, 'Pilates', 'Suzanne', 'A- Iniciante', 'Tarde', 'Sexta', 'Carol'),
    (6, 'Box', 'Léo', 'C- Avançado', 'Noite', 'Terça-Feira', 'Thiago') 
`

function criaTabela() {
    db.run(SERVIÇOS_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de serviços");
    });
}


function populaTabela() {
    db.run(ADD_SERVIÇOS_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de serviços");
    });
}

db.serialize( ()=> {
    criaTabela();
    populaTabela();
});