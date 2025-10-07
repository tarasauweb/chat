import { SETTINGS } from './settings';
import { app } from './app';
import { client } from './mongoDB';

async function startServer(port: string | number) {
  try {
    await client.connect();
    console.log('Connected successfully to MongoDB');

    app.listen(port, () => {
      console.log(`Server is running on port ${SETTINGS.port}`);
    });
  } catch (error) {
    console.error('MongoDB connection error:', error);
    await client.close();
    process.exit(1);
  }
}
startServer(SETTINGS.port);
