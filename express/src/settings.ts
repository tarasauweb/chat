export const SETTINGS = {
  port: process.env.PORT || 3000,
  jwt_secret: 'qwerty',
  mongoURL: `mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.9`,
};
