const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
  nome_indicacao:String,
  telefone_indicacao:String,
  email_indicacao:String,
},{
  timestamps:true    //comando para salvar a data da criação
});

const indicacoes = mongoose.model('Indicacoes',DataSchema);
module.exports = indicacoes;
