const express = require('express'); 
const routes = express.Router();

const Usuario = require('./controllers/usuarios.controller');
const Indicacao = require('./controllers/indicacoes.controller');
const Feedback = require('./controllers/feedbacks.controller');

routes.get('/',Usuario.index);

//Rotas de Usuarios
routes.post('/api/usuarios',Usuario.create);
routes.get('/api/usuarios',Usuario.index);
routes.get('/api/usuarios.details/:_id',Usuario.details);
routes.delete('/api/usuarios/:_id',Usuario.delete);
routes.put('/api/usuarios',Usuario.update);

//Rotas de Indicações
routes.post('/api/indicacoes',Indicacao.create);
routes.get('/api/indicacoes',Indicacao.index);
routes.get('/api/indicacoes.details/:_id',Indicacao.details);
routes.delete('/api/indicacoes/:_id',Indicacao.delete);
routes.put('/api/indicacoes',Indicacao.update);

//Rotas de Feedbacks
routes.post('/api/feedbacks',Feedback.create);
routes.get('/api/feedbacks',Feedback.index);
routes.get('/api/feedbacks.details/:_id',Feedback.details);
routes.delete('/api/feedbacks/:_id',Feedback.delete);
routes.put('/api/feedbacks',Feedback.update);

module.exports = routes;