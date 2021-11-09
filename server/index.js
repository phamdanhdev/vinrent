import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRoutes from "./routers/product.js";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

app.use("/product", productRoutes);
app.get("/", (req, res) => {
  res.send("Sleep tracking hello");
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`))
  )
  .catch((error) => {
    error.message;
  });

mongoose.set("useFindAndModify", false);
