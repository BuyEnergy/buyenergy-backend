const Feedback = require('../models/Feedback.model');

module.exports = {
  async index(req,res){  
    const feedback = await Feedback.find(); //find: Encontrar todos os Produtos
    res.json(feedback);
  },

  async create(req,res){
    const {atendimento, plataforma,performace} = req.body;
    let data = {};
    let feedback =  await Feedback.findOne({atendimento});
    
    if(!feedback){
        data = {atendimento, plataforma,performace};

        feedback = await Feedback.create(data);
        return res.status(200).json(feedback);
    }else{
        return res.status(500).json(feedback);
    }
  },

  async details(req,res){  
    const {_id} = req.params;
    const feedback = await Feedback.findOne({_id}); //findOne: encontrar apenas um Feedback
    res.json(feedback);
  },

  async delete(req,res){
    const { _id } = req.params;
    const feedback = await Feedback.findByIdAndDelete({_id});
    return res.json(feedback);
},

async update(req,res){
  const { _id, atendimento, plataforma,performace } = req.body;
  const data = {atendimento, plataforma,performace};
  const feedback = await Feedback.findOneAndUpdate({_id},data,{new:true}); //new:treu ->vai salvar os dados da nova aquisição
  res.json(feedback);
},

}
