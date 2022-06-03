const Indicacao = require('../models/indicacao.model');

module.exports = {
  async index(req,res){  
    const recommendation = await Indicacao.find(); //find: Encontrar todos os Produtos
    res.json(recommendation);
  },

  async create(req,res){
    const {nome_indicacao, telefone_indicacao, email_indicacao} = req.body;
    let data = {};
    let recommendation =  await Indicacao.findOne({nome_indicacao});
    
    if(!recommendation){
        data = {nome_indicacao, telefone_indicacao, email_indicacao};

        recommendation = await Indicacao.create(data);
        return res.status(200).json(recommendation);
    }else{
        return res.status(500).json(recommendation);
    }
  },

  async details(req,res){  
    const {_id} = req.params;
    const recommendation = await Indicacao.findOne({_id}); //findOne: encontrar apenas um Indicacao
    res.json(recommendation);
  },

  async delete(req,res){
    const { _id } = req.params;
    const recommendation = await Indicacao.findByIdAndDelete({_id});
    return res.json(recommendation);
},

async update(req,res){
  const { _id, nome_indicacao, telefone_indicacao, email_indicacao } = req.body;
  const data = {nome_indicacao, telefone_indicacao, email_indicacao};
  const recommendation = await Indicacao.findOneAndUpdate({_id},data,{new:true}); //new:treu ->vai salvar os dados da nova aquisição
  res.json(recommendation);
},

}
