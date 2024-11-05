import {
  createRequestService,
  listRequestService,
  listIdRequestService,
  updateRequestService,
  deleteRequestService,
} from "../../services/index.js";

export const createRequestController = async (Request, Response) => {
  try {
    const data = Request.body;
    const result = await createRequestService(data);
    Response.status(201).json(result);
  } catch (err) {
    Response.status(400).json(err);
  }
};

export const listRequestController = async (Request, Response) => {
  try {
    const result = await listRequestService();
    Response.json(result);
  } catch (err) {
    Response.status(500).json(err);
  }
};

export const listIdRequestController = async (Request, Response) => {
  try {
    const id = parseInt(Request.params.id);
    const result = await listIdRequestService(id);
    Response.json(result);
  } catch (err) {
    Response.status(500).json(err);
  }
};

export const updateRequestController = async (Request, Response) => {
  try {
    const id = parseInt(Request.params.id);
    const data = Request.body;
    const result = await updateRequestService(id, data);
    Response.json(result);
  } catch (err) {
    Response.status(400).json(err);
  }
};

export const deleteRequestController = async (Request, Response) => {
  try {
    const id = parseInt(Request.params.id);
    const result = await deleteRequestService(id);
    Response.json(result);
  } catch (err) {
    Response.status(400).json(err);
  }
};
