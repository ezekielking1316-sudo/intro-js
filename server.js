require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// JSON Parsing Middleware
app.use(express.json());

// Bonus: Custom Logging Middleware
app.use((req, res, next) => {
    console.log(`${req.method} request made to: ${req.url} at ${new Date().toISOString()}`);
    next();
});

// Static Files (Requirement: Serve static HTML at /)
app.use(express.static('public'));

// Routes
// GET / -> "My Week 2 API!"
app.get('/', (req, res) => {
    res.send('My Week 2 API!');
});

// POST /user -> Accepts {name, email}; responds "Hello, [name]!"
app.post('/user', (req, res) => {
    const { name, email } = req.body;

    // Error handling (Requirement: 400 for missing data)
    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }

    res.send(`Hello, ${name}!`);
});

// GET /user/:id -> "User [id] profile"
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ${userId} profile`);
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});