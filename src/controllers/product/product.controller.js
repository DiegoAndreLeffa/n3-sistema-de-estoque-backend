import {
  createProductService,
  listProductService,
  listIdProductService,
  updateProductService,
  deleteProductService,
} from "../../services";

export const createProductController = async (Request, Response) => {
  try {
    const data = Request.body;
    const result = await createProductService(data);
    Response.status(201).json(result);
  } catch (err) {
    Response.status(400).json(err);
  }
};

export const listProductController = async (Request, Response) => {
  try {
    const result = await listProductService();
    Response.json(result);
  } catch (err) {
    Response.status(400).json(err);
  }
};

export const listIdProductController = async (Request, Response) => {
  try {
    const id = parseInt(Request.params.id);
    const result = await listIdProductService(id);
    Response.json(result);
  } catch (err) {
    Response.status(400).json(err);
  }
};

export const updateProductController = async (Request, Response) => {
  try {
    const id = parseInt(Request.params.id);
    const data = Request.body;
    const result = await updateProductService(id, data);
    Response.json(result);
  } catch (err) {
    Response.status(400).json(err);
  }
};

export const deleteProductController = async (Request, Response) => {
  try {
    const id = parseInt(Request.params.id);
    const result = await deleteProductService(id);
    Response.json(result);
  } catch (err) {
    Response.status(400).json(err);
  }
};
