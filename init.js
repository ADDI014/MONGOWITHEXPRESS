const mongoose = require("mongoose");
const Chat = require("./models/chat.js");


main().then(() => {
    console.log("connection successfull");
}).catch((err) => {
    console.log(err);
});

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp'); 
}

let allChats =[
    {
        from: "neha",
        to: "priya",
        msg: "send me your exam sheets",
        created_at:new Date()
    },
    {
        from: "ankit",
        to: "shreya",
        msg: "hello i am ankit",
        created_at:new Date()
    },
    {
        from: "aniket",
        to: "avinash",
        msg: "kindly collect your notebook",
        created_at:new Date()
    },
    {
        from: "akshay",
        to: "deepak",
        msg: "what is your name",
        created_at:new Date()
    },
    {
        from: "anamika",
        to: "chintu",
        msg: "mom give me one roti",
        created_at:new Date()
    }
]

Chat.insertMany(allChats);



