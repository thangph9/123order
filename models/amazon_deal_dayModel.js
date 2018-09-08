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
        robot_label_track: "text",
        sale:"text",
        stt;"int",
        timestamp: {
            type: "timestamp",
            default: {"$db_function": "toTimestamp(now())"}
        },
        title               : "text"
    },
    key:["dealid"]
}