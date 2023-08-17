const express = require("express");
const {
  getFoods,
  postFoods,
  editFoods,
  deleteFoods,
} = require("../controllers/foods.contrllers");

const router = express.Router();

router.get("/", getFoods);
router.post("/", postFoods);
router.put("/:id", editFoods);
router.delete("/:id", deleteFoods);

module.exports = router;
