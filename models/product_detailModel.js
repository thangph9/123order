module.exports={
    fields:{
        dealid : "text",
        description : "text",
        hugeimage: {
            type: "list",
            typeDef: "<text>"
        },
        largeimage: {
            type: "list",
            typeDef: "<text>"
        },
        size: {
            type: "list",
            typeDef: "<text>",   
        }, 
        smallimage: {
            type: "list",
            typeDef: "<text>",   
        },       
        star:"text",
        title:"text"
    },
    key:["dealid"]
}