import express from 'express';

import { config } from 'dotenv';

config();

const { PORT } = process.env;
const app = express();

app.listen(PORT, () => {
    console.clear();
    console.log(`Server listening on port ${PORT}`);
});