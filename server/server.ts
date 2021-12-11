import express from "express";

const app = express();
const port = parseInt(process.env.PORT) || 8080;

app.get("/", (req, res) => {
  res.json({ message: "👋 from Expresss!" });
});

app.listen(port, () => console.log(`Server started at port: ${port}`));
