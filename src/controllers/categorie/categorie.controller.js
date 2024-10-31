import {
  createCategorieService,
  listCategorieService,
  listIdCategorieService,
  updateCategorieService,
  deleteCategorieService,
} from "../../services";

export const createCategorieController = async (Request, Response) => {
  try {
    const data = Request.body;
    const result = await createCategorieService(data);
    Response.status(201).json(result);
  } catch (err) {
    Response.status(400).json(err);
  }
};

export const listCategorieController = async (Request, Response) => {
  try {
    const result = await listCategorieService();
    Response.json(result);
  } catch (err) {
    Response.status(500).json(err);
  }
};

export const listIdCategorieController = async (Request, Response) => {
  try {
    const id = parseInt(Request.params.id);
    const result = await listIdCategorieService(id);
    Response.json(result);
  } catch (err) {
    Response.status(404).json(err);
  }
};

export const updateCategorieController = async (Request, Response) => {
  try {
    const id = parseInt(Request.params.id);
    const data = Request.body;
    const result = await updateCategorieService(id, data);
    Response.json(result);
  } catch (err) {
    Response.status(404).json(err);
  }
};

export const deleteCategorieController = async (Request, Response) => {
  try {
    const id = parseInt(Request.params.id);
    const result = await deleteCategorieService(id);
    Response.json(result);
  } catch (err) {
    Response.status(404).json(err);
  }
};
