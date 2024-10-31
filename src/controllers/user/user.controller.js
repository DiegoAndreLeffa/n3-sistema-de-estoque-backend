import {
  createUserService,
  listUserService,
  listIdUserService,
  updateUserService,
  deleteUserService,
} from "../../services";

export const createUserController = async (Request, Response) => {
  try {
    const data = Request.body;
    const result = await createUserService(data);
    Response.status(201).json(result);
  } catch (err) {
    Response.status(400).json(err);
  }
};

export const listUserController = async (Request, Response) => {
  try {
    const result = await listUserService();
    Response.json(result);
  } catch (err) {
    Response.status(500).json(err);
  }
};

export const listIdUserController = async (Request, Response) => {
  try {
    const id = parseInt(Request.params.id);
    const result = await listIdUserService(id);
    Response.json(result);
  } catch (err) {
    Response.status(404).json(err);
  }
};

export const updateUserController = async (Request, Response) => {
  try {
    const id = parseInt(Request.params.id);
    const data = Request.body;
    const result = await updateUserService(id, data);
    Response.json(result);
  } catch (err) {
    Response.status(404).json(err);
  }
};

export const deleteUserController = async (Request, Response) => {
  try {
    const id = parseInt(Request.params.id);
    const result = await deleteUserService(id);
    Response.json(result);
  } catch (err) {
    Response.status(404).json(err);
  }
};
