const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const userRoutes = require("./routes/userRoutes");

const PORT = process.env.PORT || 3000;
app.use("/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
