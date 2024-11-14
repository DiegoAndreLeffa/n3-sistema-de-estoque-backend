import { categoriesRouter } from "./categorie/categorie.routes.js";
import { productsRouter } from "./product/product.routes.js";
import { requestsRouter } from "./request/request.routes.js";
import { stocksRouter } from "./stock/stok.routes.js";
import { suppliersRouter } from "./supplier/supplier.routes.js";
import { userRouter } from "./user/user.routes.js";

import { authRouter } from "./authentication/authentication.routes.js";

export {
  categoriesRouter,
  productsRouter,
  requestsRouter,
  stocksRouter,
  suppliersRouter,
  userRouter,
  authRouter,
};
