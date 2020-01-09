const app = require("../app");
const http = require("http").createServer(app);
const PORT = process.env.PORT;

http.listen(PORT, () => {
    console.log("server listening on port", PORT);
});