import Redis from "ioredis";

const redisClient = new Redis({
  host: process.env.REDIS_HOST || "redis",
});
const expirationTime = 60 * 60 * 30;

const sendOrStore = async (key, callback) => {
  return new Promise(async (resolve, reject) => {
    const data = await redisClient.get(key);

    if (data !== null) {
      resolve(JSON.parse(data));
    } else {
      try {
        const newData = await callback();
        await redisClient.setex(key, expirationTime, JSON.stringify(newData));
        resolve(newData);
      } catch (error) {
        reject(error);
      }
    }
  });
};

export default sendOrStore;
