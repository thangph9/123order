module.exports={
    fields:{
        dealid : "text",
        asin :'text',
        base_price:"text",
        dealstate:'text',
        dealtype :'text',
        death_clock:"text",
        img:"text",
        legacydealid:'text',
        link:"text",
        offerid :'text',
        position: 'int',
        price:"text",
        review_link: 'text',
        reviews:'int',
        sale:"text",
        smid:'text',
        star:'text',
        stt:'int',
        timestamp: {
            type: "timestamp",
            default: {"$db_function": "toTimestamp(now())"}
        },
        title: "text",
        widgetid: 'int'
    },
    key:["dealid"]
}