import express from "express";
import cors from "cors";
import "dotenv/config";

import {
  categoriesRouter,
  productsRouter,
  requestsRouter,
  stocksRouter,
  suppliersRouter,
  userRouter,
  authRouter,
} from "../src/routes/index.js";

import { initDBConnection } from "./config.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use("/categories", categoriesRouter);
app.use("/products", productsRouter);
app.use("/user", userRouter);
app.use("/authentication", authRouter);

app.use("/stock", stocksRouter);
app.use("/requests", requestsRouter);
app.use("/supplier", suppliersRouter);

initDBConnection()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to start the server:", err);
  });

export default app;
