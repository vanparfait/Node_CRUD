// const foodsModel = require("../models/foods.model");

// module.exports.getFoods = async (req, res) => {
//   const foods = await foodsModel.find({});

//   try {
//     res.status(200).json(foods);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// };

// module.exports.postFoods = async (req, res) => {
//   if (!req.body.message || !req.body.author) {
//     res
//       .status(400)
//       .json({ message: "Merci de fournir à la fois un message et un auteur" });
//     return; // Ajout de ce return pour éviter l'exécution du reste de la fonction en cas d'erreur
//   }

//   try {
//     const foods = await foodsModel.create({
//       name: req.body.name,
//       calories: req.body.calories,
//     });
//     res.status(200).json(foods);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

// module.exports.editFoods = async (req, res) => {
//   const foods = await foodsModel.findById(req.params.id);

//   if (!foods) {
//     res.status(400).json({ message: "ce post nexiste pas" });
//   }
//   const updapteFoods = await foodsModel.findByIdAndUpdate(foods, req.body, {
//     new: true,
//   });
//   res.status(200).json(updapteFoods);
// };

// module.exports.deleteFoods = async (req, res) => {
//   const deleteFoods = await foodsModel.findByIdAndDelete(req.params.id);

//   if (!deleteFoods) {
//     res.status(400).json({ message: "ce post nexiste pas" });
//   }

//   res.status(200).json("message supprime avec succes :" + req.params.id);
// };

const foodsModel = require("../models/foods.model");

module.exports.getFoods = async (req, res) => {
  try {
    const foods = await foodsModel.find({});
    res.status(200).json(foods);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports.postFoods = async (req, res) => {
  if (!req.body.name || !req.body.calories) {
    res
      .status(400)
      .json({ message: "Merci de fournir à la fois un nom et des calories" });
    return;
  }

  try {
    const foods = await foodsModel.create({
      name: req.body.name,
      calories: req.body.calories,
    });
    res.status(200).json(foods);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports.editFoods = async (req, res) => {
  try {
    const updatedFoods = await foodsModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedFoods) {
      res.status(400).json({ message: "Ce post n'existe pas" });
      return;
    }
    res.status(200).json(updatedFoods);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports.deleteFoods = async (req, res) => {
  try {
    const deletedFoods = await foodsModel.findByIdAndDelete(req.params.id);
    if (!deletedFoods) {
      res.status(400).json({ message: "Ce post n'existe pas" });
      return;
    }
    res.status(200).json("Message supprimé avec succès : " + req.params.id);
  } catch (error) {
    res.status(500).json(error);
  }
};
