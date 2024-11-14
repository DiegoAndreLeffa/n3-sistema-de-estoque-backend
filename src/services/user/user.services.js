import pkg from "bcryptjs";
const { hash } = pkg;

import { execSQLQuery } from "../../config.js";

export const createUserService = async (data) => {
  try {
    const hashedPassword = await hash(data.senha, 10);
    const sqlQuery = `EXEC SP_InserirUsuario
      @nome = @nome,
      @email = @email,
      @senha = @senha,
      @cargo = @cargo;
    `;

    const params = {
      nome: data.nome,
      email: data.email,
      senha: hashedPassword,
      cargo: data.cargo,
    };

    const result = await execSQLQuery(sqlQuery, params);
    return { success: true, message: "Usuário registrado com sucesso!" };
  } catch (err) {
    console.error("Erro ao inserir usuario:", err);

    const errorMessage =
      err.originalError?.info?.message ||
      "Erro ao inserir usuario no banco de dados.";

    return { success: false, message: errorMessage };
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

export const updateUserService = async (id, data) => {
  const sqlQueryGetUser = `SELECT Senha FROM Usuario WHERE Id_usuario = @id_usuario`;
  const paramsUser = { id_usuario: id };
  const resultGetUser = await execSQLQuery(sqlQueryGetUser, paramsUser);

  if (data.senha) {
    const hashedPassword = await hash(data.senha, 10);
    data.senha = hashedPassword;
  } else {
    data.senha = resultGetUser.recordset[0].Senha;
  }

  const sqlQuery = `
    EXEC SP_AlterarUsuario
      @Id_Usuario = @Id_usuario,
      @Nome = @nome,
      @Email = @email,
      @Senha = @senha,
      @Cargo = @cargo;
  `;

  const params = {
    Id_usuario: id,
    nome: data.nome,
    email: data.email,
    senha: data.senha,
    cargo: data.cargo,
  };

  try {
    const result = await execSQLQuery(sqlQuery, params);
    return { success: true, message: "Usuário alterado com sucesso!" };
    return result;
  } catch (err) {
    console.error("Erro ao alterar usuario:", err);

    const errorMessage =
      err.originalError?.info?.message ||
      "Erro ao alterar usuario no banco de dados.";

    return { success: false, message: errorMessage };
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
