
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();
if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "/react-client/build")));
    app.get("/", (req, res)=>{
        res.sendFile(path.join(__dirname, "/react-client/build/index.html"))
    });
}

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
});