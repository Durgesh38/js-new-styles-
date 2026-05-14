const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Windows API Running");
});

app.get("/api/user", (req, res) => {
    res.json({
        name: "Durgesh",
        skill: "Cybersecurity"
    });
});

app.post("/api/data", (req, res) => {
    res.json({
        message: "POST request received",
        data: req.body
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});