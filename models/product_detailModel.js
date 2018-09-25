module.exports={
    fields:{
        dealid : "text",
        category:'text',    
        description : "text",
        hugeimage: {
            type: "list",
            typeDef: "<text>"
        },
        largeimage: {
            type: "list",
            typeDef: "<text>"
        },
        nodeid:'text', 
        smallimage: {
            type: "list",
            typeDef: "<text>",   
        },
        star:"text",
        title:"text"
    },
    key:["dealid"]
}