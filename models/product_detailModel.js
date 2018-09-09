module.exports={
    fields:{
        dealid : "text",
        description : "text",
        largeimage: {
            type: "list",
            typeDef: "<text>"
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