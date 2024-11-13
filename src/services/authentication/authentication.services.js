import pkg from "bcryptjs";
const { compare } = pkg;

import { execSQLQuery } from "../../config.js";

export const authenticationService = async (data) => {
  try {
    const sqlQuery = `
        SELECT * FROM Usuario
        WHERE email = '${data.email}'
    `;

    const result = await execSQLQuery(sqlQuery);

    if (result.recordset.length === 0) {
      throw new Error("Nome de usuário ou senha incorretos.");
    }

    const user = result.recordset[0];

    const matchPassword = await compare(data.senha, user.Senha);
    if (!matchPassword) {
      throw new Error("Nome de usuário ou senha incorretos.");
    }

    delete user.Senha;

    console.log(user);
    return user;
  } catch (err) {
    return { success: false, message: err.message };
  }
};
