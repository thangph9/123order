module.exports={
    fields:{
        dealid : "text",
        asin:'text',
        category:'text',
        color:'text',
        deal_of_day:'text',       
        description : "text",
        hugeimage: {
            type: "list",
            typeDef: "<text>"
        },
        largeimage: {
            type: "list",
            typeDef: "<text>"
        },
        nested:'text',
        nodeid:'text',
        price:'text',
        save_price:'text',
        smallimage: {
            type: "list",
            typeDef: "<text>",   
        },
        star:"text",
        style:'text',
        title:"text"
    },
    key:["dealid"]
}