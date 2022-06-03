const Usuario = require('../models/usuario.model');
module.exports = {
  async index(req,res){  
    const user = await Usuario.find(); //find: Encontrar todos os Produtos
    res.json(user);
  },

  async create(req,res){
    const {login_usuario,senha_usuario} = req.body;
    let data = {};
    let user =  await Usuario.findOne({login_usuario});
    
    if(!user){
        data = {login_usuario,senha_usuario};

        user = await Usuario.create(data);
        return res.status(200).json(user);
    }else{
        return res.status(500).json(user);
    }
  },

  async details(req,res){  
    const {_id} = req.params;
    const user = await Usuario.findOne({_id}); //findOne: encontrar apenas um Usuario
    res.json(user);
  },

  async delete(req,res){
    const { _id } = req.params;
    const user = await Usuario.findByIdAndDelete({_id});
    return res.json(user);
},

async update(req,res){
  const { _id, login_usuario,senha_usuario } = req.body;
  const data = {login_usuario,senha_usuario};
  const user = await Usuario.findOneAndUpdate({_id},data,{new:true}); //new:treu ->vai salvar os dados da nova aquisição
  res.json(user);
},

}
