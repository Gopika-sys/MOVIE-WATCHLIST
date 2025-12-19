const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

const cors = require("cors");
app.use(cors());

const PORT = 5000;
app.use(express.json());

const moviesPath = path.join(__dirname, "Movie.json");

// ------------------- GET all movies -------------------
app.get("/api/movies", (req, res) => {
  fs.readFile(moviesPath, "utf-8", (err, data) => {
    if (err) return res.status(500).json({ error: "Cannot read file" });
    res.json(JSON.parse(data));
  });
});

// ------------------- GET movie by ID -------------------
app.get("/api/movies/:id", (req, res) => {
  fs.readFile(moviesPath, "utf-8", (err, data) => {
    if (err) return res.status(500).json({ error: "Cannot read file" });
    const movies = JSON.parse(data);
    const movie = movies.find((m) => m.id === Number(req.params.id));
    if (!movie) return res.status(404).json({ error: "Movie not found" });
    res.json(movie);
  });
});

// ------------------- POST new movie -------------------
app.post("/api/movies", (req, res) => {
  fs.readFile(moviesPath, "utf-8", (err, data) => {
    if (err) return res.status(500).json({ error: "Cannot read file" });
    const movies = JSON.parse(data);

    const newMovie = {
      id: Date.now(),
      ...req.body,
    };

    movies.push(newMovie);

    fs.writeFile(moviesPath, JSON.stringify(movies, null, 2), (err) => {
      if (err) return res.status(500).json({ error: "Cannot write file" });
      res.status(201).json(newMovie);
    });
  });
});

// ------------------- PUT update movie -------------------
app.put("/api/movies/:id", (req, res) => {
  fs.readFile(moviesPath, "utf-8", (err, data) => {
    if (err) return res.status(500).json({ error: "Cannot read file" });
    let movies = JSON.parse(data);
    const index = movies.findIndex((m) => m.id === Number(req.params.id));
    if (index === -1) return res.status(404).json({ error: "Movie not found" });

    movies[index] = { ...movies[index], ...req.body };

    fs.writeFile(moviesPath, JSON.stringify(movies, null, 2), (err) => {
      if (err) return res.status(500).json({ error: "Cannot write file" });
      res.json(movies[index]);
    });
  });
});

// ------------------- DELETE movie -------------------
app.delete("/api/movies/:id", (req, res) => {
  fs.readFile(moviesPath, "utf-8", (err, data) => {
    if (err) return res.status(500).json({ error: "Cannot read file" });
    let movies = JSON.parse(data);
    const index = movies.findIndex((m) => m.id === Number(req.params.id));
    if (index === -1) return res.status(404).json({ error: "Movie not found" });

    const deletedMovie = movies.splice(index, 1)[0];

    fs.writeFile(moviesPath, JSON.stringify(movies, null, 2), (err) => {
      if (err) return res.status(500).json({ error: "Cannot write file" });
      res.json(deletedMovie);
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});