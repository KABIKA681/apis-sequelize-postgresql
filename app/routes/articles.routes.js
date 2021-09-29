const { articles } = require("../models/index.js");
const router = require("express").Router();

module.exports = app => {
const articles = require("../controllers/articles.controller.js");
  
router.post("/", articles.create);
router.get("/", articles.findAll);
router.get("/published", articles.findAllPublished);
router.get("/:id", articles.findOne);
router.put("/:id", articles.update);
router.delete("/:id", articles.delete);
router.delete("/", articles.deleteAll);

app.use('/api/articles', router);
};