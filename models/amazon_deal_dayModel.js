module.exports={
    fields:{
        dealid                 : "text",
        base_price:"text",
        death_clock:"text",
        img:"text",
        link:"text",
        price:"text",
        review:"int",
        reviewlink:"text",
        sale:"text",
        timestamp: {
            type: "timestamp",
            default: {"$db_function": "toTimestamp(now())"}
        },
        title               : "text"
    },
    key:["dealid"]
}