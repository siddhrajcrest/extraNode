import express from "express";

const app = express();

const users = [
  { id: 1, name: "user1" },
  { id: 2, name: "user2" },
  { id: 3, name: "user3" },
  { id: 4, name: "user4" },
  { id: 5, name: "user5" },
  { id: 6, name: "user6" },
  { id: 7, name: "users" },
  { id: 8, name: "users" },
  { id: 9, name: "users" },
  { id: 10, name: "users" },
  { id: 11, name: "users" },
  { id: 12, name: "users" },
  { id: 13, name: "users" },
  { id: 14, name: "users" },
  { id: 15, name: "users" },
  { id: 16, name: "users" },
  { id: 17, name: "users" },
];

app.get("/users", (req, res) => {
  const page = req.query.page;
  const limit = req.query.limit;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const result = users.slice(startIndex, endIndex);
  res.json(result);
});

app.listen(4000, () => {
  console.log("losting on 3000");
});
