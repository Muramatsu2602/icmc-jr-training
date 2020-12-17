import express from 'express';
import bodyParser from 'body-parser';

import studentsRouter from './routers/studentsRouter';

const server = express(); // 0080

server.use(bodyParser.urlencoded({
    extended: true
}));

server.use(bodyParser.json())

server.use('/alunos', studentsRouter);

server.listen(80, function () {
    console.log("Rodando");
});