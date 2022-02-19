const fetch = require("node-fetch");
const env = require("dotenv");
const Discord = require("discord.js");
const RedditImageFetcher = require("reddit-image-fetcher");

module.exports = async function (message) {
  const categories = [
    "Relationship",
    "School",
    "Dark",
    "Deep Thoughts",
    "Insult",
    "One Liner",
    "Christmas",
    "Sport",
    "Food",
    "Animal",
  ];

  var random = categories[Math.floor(Math.random() * categories.length)];
  const url = `https://api.humorapi.com/memes/random?api-key=${process.env.API_KEY}&keywords=${random},`;
  const response = await fetch(url);
  const json = await response.json();

  // RedditImageFetcher.fetch({
  //   type: "meme",
  // }).then((result) => {
  //   message.channel.send(result[0].image);
  // });

  message.channel.send(json.url);
};
