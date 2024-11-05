import { execSQLQuery } from "../../config";

export const createUserService = async (data) => {
  try {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const sqlQuery = ``;
    const result = await execSQLQuery(sqlQuery);
    return result;
  } catch (err) {
    return err;
  }
};

export const listUserService = async (data) => {
  const sqlQuery = ``;
  try {
    const result = await execSQLQuery(sqlQuery);
    return result;
  } catch (err) {
    return err;
  }
};

export const listIdUserService = async (data) => {
  const sqlQuery = ``;
  try {
    const result = await execSQLQuery(sqlQuery);
    return result;
  } catch (err) {
    return err;
  }
};

export const updateUserService = async (data) => {
  const sqlQuery = ``;
  try {
    const result = await execSQLQuery(sqlQuery);
    return result;
  } catch (err) {
    return err;
  }
};

export const deleteUserService = async (data) => {
  const sqlQuery = ``;
  try {
    const result = await execSQLQuery(sqlQuery);
    return result;
  } catch (err) {
    return err;
  }
};
