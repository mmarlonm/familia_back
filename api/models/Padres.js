/**
 * Padres.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
        Nombre : {
          type : 'string'
        },
        Apellido : {
          type : 'string'
        },


        //relacion padre a hijo
        //
        hijos : {
          collection : "hijos",
          via : "owner"
        }
  },

};
