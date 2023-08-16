const foodsModel = require("../models/foods.model");

module.exports.getFoods = async (req, res) => {
  const foods = foodsModel.find();

  res.status(200).json(foods);
};
