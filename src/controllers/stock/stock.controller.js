import {
  createStockService,
  listStockService,
  listIdStockService,
  updateStockService,
  deleteStockService,
} from "../../services";

export const createStockController = async (Request, Response) => {
  try {
    const data = Request.body;
    const result = await createStockService(data);
    Response.status(201).json(result);
  } catch (err) {
    Response.status(400).json(err);
  }
};

export const listStockController = async (Request, Response) => {
  try {
    const result = await listStockService();
    Response.status(201).json(result);
  } catch (err) {
    Response.status(400).json(err);
  }
};

export const listIdStockController = async (Request, Response) => {
  try {
    const id = parseInt(Request.params.id);
    const result = await listIdStockService(id);
    Response.status(201).json(result);
  } catch (err) {
    Response.status(400).json(err);
  }
};

export const updateStockController = async (Request, Response) => {
  try {
    const id = parseInt(Request.params.id);
    const data = Request.body;
    const result = await updateStockService(id, data);
    Response.status(201).json(result);
  } catch (err) {
    Response.status(400).json(err);
  }
};

export const deleteStockController = async (Request, Response) => {
  try {
    const id = parseInt(Request.params.id);
    const result = await deleteStockService(id);
    Response.status(201).json(result);
  } catch (err) {
    Response.status(400).json(err);
  }
};
