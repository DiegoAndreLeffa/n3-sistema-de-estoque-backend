import pkg from "bcryptjs";
const { compare } = pkg;

import { execSQLQuery } from "../../config.js";

export const authenticationService = async (data) => {
  try {
    const sqlQuery = `
        SELECT * FROM users
        WHERE email = '${data.email}'
    `;
    const result = await execSQLQuery(sqlQuery);

    if (result.recordset.length === 0) {
      throw new Error("Invalid credentials");
    }

    const user = result.recordset[0][0];

    const matchPassword = await compare(data.password, user.password);
    if (!matchPassword) {
      throw new Error("Invalid credentials");
    }

    delete user.password;
    return user;
  } catch (err) {
    return { error: err.message };
  }
};
