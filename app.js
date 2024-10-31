import express from "express";

import {
  categoriesRouter,
  productsRouter,
  requestsRouter,
  stockRouter,
  supplierRouter,
  userRouter,
} from "./src/routes";

const app = express();

app.use(express.json());

app.use("/categories", categoriesRouter);
app.use("/products", productsRouter);
app.use("/requests", requestsRouter);
app.use("/stock", stockRouter);
app.use("/supplier", supplierRouter);
app.use("/user", userRouter);

export default app;
