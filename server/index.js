const express = require("express");
const axios = require("axios"); // Import axios to make API requests
const PORT = 5000;
const app = express();

app.get("/api/v1", async (req, res) => {
  try {
    const response = await axios.get("https://zenquotes.io/api/random");
    res.json(response.data); // Send the quote data back to the client
  } catch (error) {
    console.error("Error fetching quote:", error);
    res.status(500).send("Error fetching quote");
  }
});

app.listen(PORT, () => console.log(`Start listening on port: ${PORT}`));
