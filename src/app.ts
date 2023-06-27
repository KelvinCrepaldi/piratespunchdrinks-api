import express from "express";
import listEndpoints from "express-list-endpoints";
import Table from "cli-table3";
import "reflect-metadata";
import "dotenv/config";
import cors from "cors";

import sessionRoutes from "./routes/session.routes";
import userRoutes from "./routes/user.routes";
import errorsMiddleware from "./middleware/errors.middleware";
import verifyAuthTokenMiddleware from "./middleware/verifyAuthToken.middleware";
import productRoutes from "./routes/product.routes";
import categoryRoutes from "./routes/category.routes";
import orderRoutes from "./routes/order.routes";
import addresRoutes from "./routes/address.routes";
import creditCardRoutes from "./routes/creditCard.routes";

const app = express();
const port = process.env.PORT || 3000;

/* app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
}); */
app.use(cors());

app.use(express.json());
app.use("/users", userRoutes);
app.use("/login", sessionRoutes);
app.use("/product", productRoutes);
app.use("/category", categoryRoutes);
app.use("/order", orderRoutes);
app.use("/address", addresRoutes);
app.use("/creditcard", creditCardRoutes);

app.use("/protected", verifyAuthTokenMiddleware, (req, res) => {
  res.status(200).json("protected route");
});

app.use(errorsMiddleware);

// Criação de tabela no console
const routes = listEndpoints(app);
const table = new Table({
  head: ["Método", "Rota"],
});
routes.forEach((route) => {
  table.push([route.methods.join(", "), route.path]);
});

app.listen(port, () => {
  console.log(`App running on port: ${port}`);
  console.log(table.toString());
});
