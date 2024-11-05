import express from "express";
import "dotenv/config";

import {
  categoriesRouter,
  productsRouter,
  requestsRouter,
  stockRouter,
  supplierRouter,
  userRouter,
  authRouter,
} from "./routes";

import { initDBConnection } from "./config";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/categories", categoriesRouter);
app.use("/products", productsRouter);
app.use("/requests", requestsRouter);
app.use("/stock", stockRouter);
app.use("/supplier", supplierRouter);
app.use("/user", userRouter);
app.use("/authentication", authRouter);

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
