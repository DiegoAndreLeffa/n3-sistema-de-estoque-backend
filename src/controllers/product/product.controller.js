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
    const errorMessage = err.message || "Erro ao processar a solicitação";
    Response.status(400).json({ error: errorMessage });
  }
};

export const listProductController = async (Request, Response) => {
  try {
    const result = await listProductsService();
    Response.json(result);
  } catch (err) {
    const errorMessage = err.message || "Erro ao processar a solicitação";
    Response.status(400).json(errorMessage);
  }
};

export const listIdProductController = async (Request, Response) => {
  try {
    const id = parseInt(Request.params.id);
    const result = await listIdProductsService(id);
    Response.json(result);
  } catch (err) {
    const errorMessage = err.message || "Erro ao processar a solicitação";
    Response.status(400).json(errorMessage);
  }
};

export const updateProductController = async (Request, Response) => {
  try {
    const id = parseInt(Request.params.id);
    const data = Request.body;
    const result = await updateProductsService(id, data);
    Response.json(result);
  } catch (err) {
    const errorMessage = err.message || "Erro ao processar a solicitação";
    Response.status(400).json(errorMessage);
  }
};

export const deleteProductController = async (Request, Response) => {
  try {
    const id = parseInt(Request.params.id);
    const result = await deleteProductsService(id);
    Response.json(result);
  } catch (err) {
    const errorMessage = err.message || "Erro ao processar a solicitação";
    Response.status(400).json(errorMessage);
  }
};
