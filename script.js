const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public')); // Serve static files from 'public' directory

app.get('/api/gadgets', (req, res) => {
    // Logic to return gadget data based on filters
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
