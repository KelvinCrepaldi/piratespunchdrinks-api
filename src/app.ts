import express from "express";
import "reflect-metadata";
import "dotenv/config";
import sessionRoutes from "./routes/session.routes";
import userRoutes from "./routes/user.routes";
import errorsMiddleware from "./middleware/errors.middleware";
import productRoutes from "./routes/product.routes";
import categoryRoutes from "./routes/category.routes";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/users", userRoutes);
app.use("/login", sessionRoutes);
app.use("/product", productRoutes);
app.use("/category", categoryRoutes);

app.use(errorsMiddleware);

app.listen(port, () => {
  console.log(`App running on port: ${port}`);
});
