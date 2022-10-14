const axios = require("axios");

const greet = (name) => `hello ${name}`;

const users = async () => {
  const res = await axios.get(
    "https://jsonplaceholder.typicode.com/photos?_limit=5"
  );
  const photos = await res.data;

  return photos;
};

module.exports = {
  users,
  greet,
};
