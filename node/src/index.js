// creating a server: basics
// const express = require('express');
import express from 'express'; // melhor esse
import bodyParser from 'body-parser';

const server = express();
server.use(bodyParser.urlencoded({
    extended: true
}));
server.use(bodyParser.json());

// server.listen(3000, function(){ // porta 80 eh padrao para localhost
//     console.log("rodando");
// });

// server.get("/",(request, response) => {
//     response.send("<h1>OI<\h1>");

// });

let students;

server.get("/alunos", (req, res) => {});

// server.post("/alunos", {req, res} => {
//      
// });

server.get("/alunos/:id", (req, res) => {
    const id = req.params.id;

    // const students = [{id:1},{id:2}]
    let searchedstudent;

    students.forEach(student => {
        if (student.id === parseInt(id)) {
            searchedstudent = student;
        }
    });
});

server.put("/alunos/id:")


let alunos = [{
        id: 1,
        name: 'Aluno 1',
        age: 14
    }, // pelo id eh garantido que outros atributos nao se repitam
    {
        id: 2,
        name: 'Aluno 2',
        age: 24
    },
    {
        id: 3,
        name: 'Aluno 3',
        age: 53
    }
]