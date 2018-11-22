var db=require('../mysql');
var moment = require('moment');
var Items={
 
    add : function(data,callback){
        var queryString = "Insert Into shopee_tes_db.SH_ITEMS (";
        var fields = "";
        var items = "";
        var counter = 1;
        data.CREATED_ON = moment().format('YYYY-MM-DD HH:mm:ss');
        data.UPDATED_ON = moment().format('YYYY-MM-DD HH:mm:ss');

        dataLength = Object.keys(data).length;
        
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                // const element = data[key];

                fields += key;
                items += '"' + data[key] + '"';
                if(dataLength > counter){
                    fields +=  ",";
                    items += ","; 
                }
                counter++;
            }
        }
        queryString += fields + ") values (" + items + ")";
        
        
        return db.query(queryString,callback);
    },
    getAll : function(callback){
        return db.query("select * from shopee_tes_db.SH_ITEMS",callback);
    },
};
 module.exports=Items;