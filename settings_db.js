const models= require("express-cassandra");

console.log(__dirname+"/models");
models.setDirectory(__dirname+"/models").bind(
    {
        clientOptions:  {
            contactPoints   :   ['127.0.0.1'],
            protocalOptions :   {  port: 9042  },
            keyspace        :   'd_123order',
            queryOptions: { consistency: models.consistencies.one   },
            //authProvider: new models.driver.auth.PlainTextAuthProvider('my_user', 'my_password')

        },
        ormOptions: {
            defaultReplicationStrategy: { 
                    class: 'SimpleStrategy',
                    replication_factor: 1
            },
            migration: 'safe'
        }
    },
    function(err){  
        if(err) throw err;   
    });
module.exports=models; 