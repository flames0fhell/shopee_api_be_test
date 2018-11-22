var mysql=require('mysql');

if(process.env.IS_PROD || process.argv[2] == 'prod'){
    console.log("using docker mysql 2");
    
    var connection = mysql.createPool({
    
        host:'shopee-mysql',
        user:'root',
        password:'secret',
        insecureAuth : true,
        database:'shopee_tes_db'
        
    });
}else{
    
    console.log("using danastrie mysql");
    
    var connection = mysql.createPool({
    
        host:'danastrie.com',
        user:'hitoriaf',
        password:'sejatiku3',
        insecureAuth : true,
        database:'shopee_tes_db'
        
    });
}
module.exports=connection;
