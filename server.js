const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/register', (req, res) => {
    const { name, email, age, address, phone } = req.body;
    res.send(`Student Registered: ${name}, ${email}, ${age}, ${address}, ${phone}`);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
