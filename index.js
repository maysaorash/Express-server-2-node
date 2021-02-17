const express = require("express")

const app = express()
const port = 3000;

app.use(express.json()); 
app.use("/api/users", require("./routes/api/users")); 


app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))
