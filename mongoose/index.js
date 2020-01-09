const mongoose = require("mongoose");
const uri = process.env.MONGODB_URI;

mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}, (err) => {
    if (err) {
        console.log("mongodb failed to connect");
    } else {
        console.log("mongodb successfully connect");
    }
});

module.exports = mongoose;