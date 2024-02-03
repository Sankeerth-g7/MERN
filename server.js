const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const data = require("./STUDENTS_MOCK_DATA.json");


app.get('/api/students', (req, res) => {
    res.json(data);
})


app.listen(4000, () => {
    console.log("Server is Running on port 4000")
})
