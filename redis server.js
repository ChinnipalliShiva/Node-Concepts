const express = require("express");
const Redis = require("redis");
const axios = require("axios");
const app = express();
const redisClient = Redis.createClient();

redisClient
  .connect()
  .then(() => console.log("Connected to Redis"))
  .catch((err) => console.error("Redis connection error:", err));

app.get(`/photos`, async (req, res) => {
  let albumId = req.query.id;
  console.log("album id", albumId);
  console.log("inside api");
  let result = await getCacheData(
    `https://jsonplaceholder.typicode.com/photos`,
    "photos",
    albumId
  );
  return res.json(result);
});

const getCacheData = async (url, key, albumId) => {
  let data = await redisClient.get(`photos?albumId=${albumId}`);
  if (data !== null) {
    console.log("from redis");
    return JSON.parse(data);
  } else {
    let { data } = await axios.get(url, {
      params: { albumId },
    });
    console.log("not redis", albumId);
    try {
      redisClient.setEx(
        `photos?albumId=${albumId}`,
        3600,
        JSON.stringify(data)
      );
      return data;
    } catch (e) {
      console.log("e", e);
    }
  }
};
app.listen("4600", (err) => {
  if (err) console.error("error while starting server", err);
  console.log("server started sucessfully");
});

// let url = `https://jsonplaceholder.typicode.com/photos/${req.params.id}`;
