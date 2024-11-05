import {
  createProductsService,
  listProductsService,
  listIdProductsService,
  updateProductsService,
  deleteProductsService,
} from "../../services/index.js";

export const createProductController = async (Request, Response) => {
  try {
    const data = Request.body;
    const result = await createProductsService(data);
    Response.status(201).json(result);
  } catch (err) {
    Response.status(400).json(err);
  }
};

export const listProductController = async (Request, Response) => {
  try {
    const result = await listProductsService();
    Response.json(result);
  } catch (err) {
    Response.status(400).json(err);
  }
};

export const listIdProductController = async (Request, Response) => {
  try {
    const id = parseInt(Request.params.id);
    const result = await listIdProductsService(id);
    Response.json(result);
  } catch (err) {
    Response.status(400).json(err);
  }
};

export const updateProductController = async (Request, Response) => {
  try {
    const id = parseInt(Request.params.id);
    const data = Request.body;
    const result = await updateProductsService(id, data);
    Response.json(result);
  } catch (err) {
    Response.status(400).json(err);
  }
};

export const deleteProductController = async (Request, Response) => {
  try {
    const id = parseInt(Request.params.id);
    const result = await deleteProductsService(id);
    Response.json(result);
  } catch (err) {
    Response.status(400).json(err);
  }
};
