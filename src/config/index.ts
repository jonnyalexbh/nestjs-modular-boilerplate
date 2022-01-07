export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  apiKey: process.env.API_KEY || '',
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  },
  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  },
});
