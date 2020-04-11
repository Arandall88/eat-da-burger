

var orm = require("../config/orm.js");

var burger = {
selectAll: function(cb) {
    orm.selectAll("burger", function(res){
        cb(res);
    });
},
     updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burger", objColVals, condition, function(res) {
      cb(res);
    });
  },

  deleteOne: function(condition, cb) {
    orm.deleteOne("burger", condition, function(res) {
      cb(res);
    });
  }

};
module.exports = burger;