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
        list_price:'text',
        nested:'text',
        nodeid:'text',
        price:'text',
        save_price:'text',
        size:'text',
        smallimage: {
            type: "list",
            typeDef: "<text>",   
        },
        star:"text",
        style:'text',
        timestamp: {
            type: "timestamp",
            default: {"$db_function": "toTimestamp(now())"}
        },
        title:"text"
    },
    key:["dealid"]
}