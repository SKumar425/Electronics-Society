const mongoose = require("mongoose");

module.exports = async () => {
  const connectionParameters = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  try {
    await mongoose.connect(process.env.MONGODB_URL, connectionParameters);
    console.log("mongodb database connected huehuee");
  } catch (error) {
    console.log("error connecting to database : ", error);
  }
};
