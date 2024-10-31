import {
  createSupplierService,
  listSupplierService,
  listIdSupplierService,
  updateSupplierService,
  deleteSupplierService,
} from "../..services";

export const createSupplierController = async (Request, Response) => {
  try {
    const data = Request.body;
    const result = await createSupplierService(data);
    Response.status(201).json(result);
  } catch (err) {
    Response.status(400).json(err);
  }
};

export const listSupplierController = async (Request, Response) => {
  try {
    const result = await listSupplierService();
    Response.json(result);
  } catch (err) {
    Response.status(400).json(err);
  }
};

export const listIdSupplierController = async (Request, Response) => {
  try {
    const id = parseInt(Request.params.id);
    const result = await listIdSupplierService(id);
    Response.json(result);
  } catch (err) {
    Response.status(400).json(err);
  }
};

export const updateSupplierController = async (Request, Response) => {
  try {
    const id = parseInt(Request.params.id);
    const data = Request.body;
    const result = await updateSupplierService(id, data);
    Response.json(result);
  } catch (err) {
    Response.status(400).json(err);
  }
};
export const deleteSupplierController = async (Request, Response) => {
  try {
    const id = parseInt(Request.params.id);
    const result = await deleteSupplierService(id);
    Response.json(result);
  } catch (err) {
    Response.status(400).json(err);
  }
};
