module.exports={
    fields:{
        asin :'text',
        base_price:"text",
        category:'text',
        death_clock:"text",
        img:"text",
        nodeid:'text',
        price:"text",
        reviews:'text',
        sale:"text",
        star:'text',
        timestamp: {
            type: "timestamp",
            default: {"$db_function": "toTimestamp(now())"}
        },
        title: "text",
        type:"text"
    },
    key:["asin"]
}