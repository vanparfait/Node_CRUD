const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    //mongoose.set("strictQuery", false);
    await mongoose.connect(
      "mongodb+srv://nabil:1998@clustername.pkazkh7.mongodb.net/",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connexion à MongoDB réussie !");
  } catch (error) {
    console.error("Erreur de connexion à MongoDB :", error);
    process.exit();
  }
};

module.exports = connectDB;
