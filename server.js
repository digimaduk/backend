const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/links", (req, res) => {
  res.json({
    streaming: [
      { name: "Netflix", url: "https://www.netflix.com" },
      { name: "Amazon Prime Video", url: "https://www.primevideo.com" },
      { name: "Disney+", url: "https://www.disneyplus.com/" },
      { name: "YouTube", url: "https://www.youtube.com" },
      { name: "Channel 4", url: "https://www.channel4.com" },
      { name: "Channel 5", url: "https://www.channel5.com" },
      { name: "BBC iPlayer", url: "https://www.bbc.co.uk/iplayer" },
      { name: "itvX", url: "https://www.itv.com" }
    ],
    music: [
      { 
        name: "BBC Asian Network (Live)", 
        url: "https://www.bbc.co.uk/sounds/play/live/bbc_asian_network" 
      }
    ]
  });
});

app.listen(5000, () => console.log("Backend running on port 5000"));