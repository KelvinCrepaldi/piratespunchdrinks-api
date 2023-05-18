import express from "express";
import "reflect-metadata";
import "dotenv/config";
import sessionRoutes from "./routes/session.routes";
import userRoutes from "./routes/user.routes";
import errorsMiddleware from "./middleware/errors.middleware";
import verifyAuthTokenMiddleware from "./middleware/verifyAuthToken.middleware";
import productRoutes from "./routes/product.routes";
import categoryRoutes from "./routes/category.routes";

const app = express();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(express.json());
app.use("/users", userRoutes);
app.use("/login", sessionRoutes);
app.use("/product", productRoutes);
app.use("/category", categoryRoutes);
app.use("/protected", verifyAuthTokenMiddleware, (req, res) => {
  res.status(200).json("protected route");
});

app.use(errorsMiddleware);

app.listen(port, () => {
  console.log(`App running on port: ${port}`);
});
