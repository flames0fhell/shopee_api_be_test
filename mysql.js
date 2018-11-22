var mysql=require('mysql');

if(process.env.IS_PROD || process.argv[2] == 'prod'){
    console.log("using docker mysql");
    
    var connection = mysql.createPool({
    
        host:'shopee-db',
        user:'root',
        password:'secret',
        // database:'shopee_tes_db'
        
    });
}else{
    
    console.log("using danastrie mysql");
    
    var connection = mysql.createPool({
    
        host:'danastrie.com',
        user:'hitoriaf',
        password:'sejatiku3',
        database:'shopee_tes_db'
        
    });
}
module.exports=connection;
