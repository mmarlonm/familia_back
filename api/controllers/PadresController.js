/**
 * PadresController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  show : function(req, res){
    Padres.find().populate("hijos").exec(
      function(err,respuesta){
        console.log("registros");
        console.log(respuesta);
        return res.json(respuesta);
      }
    );
  },

   crear : function(req, res){
    console.log(req.body);
     Padres.create(req.body).fetch().exec(
       function(err,res1){
        console.log(res1);
        return res.json(res1);
      }
    );
  },

  eliminar : function(req,res){
    console.log(req.param('id'));
    Padres.destroy(req.param('id')).fetch().exec(
      function(err,respuesta){
        return res.json(respuesta);
      }
    );
  }
};
