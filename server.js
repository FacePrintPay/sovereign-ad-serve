const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.get('/', (req, res) => res.json({ status: 'online', project: 'sovereign-ad-serve', system: 'Constellation25' }));
app.get('/health', (req, res) => res.json({ status: 'healthy' }));

app.listen(PORT, () => console.log(`sovereign-ad-serve running on port ${PORT}`));

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=server.js
