import express from 'express';
import connect from './database/connection.js';

async function startServer() {
    const app = express();
    const PORT = process.env.PORT || 5050;
    try {
        console.clear();
        await connect();
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    } catch (error) {
        console.error(error);
    }
}

export default startServer;