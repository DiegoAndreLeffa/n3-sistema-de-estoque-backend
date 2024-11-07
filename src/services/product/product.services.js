import { execSQLQuery } from "../../config.js";

export const createProductsService = async (data) => {
  console.log("Dados recebidos para criação do produto:", data);

  const sqlQuery = `
    EXEC sp_IncluirProduto 
      @nome = @nome, 
      @id_categoria = @id_categoria, 
      @preco = @preco, 
      @quantidade = @quantidade;
  `;

  const params = {
    nome: data.nome,
    id_categoria: data.id_categoria,
    preco: data.preco,
    quantidade: data.quantidade,
  };

  try {
    const result = await execSQLQuery(sqlQuery, params);
    return result;
  } catch (err) {
    console.error("Erro ao executar a stored procedure:", err);
    return err;
  }
};

export const listProductsService = async (data) => {
  const sqlQuery = ``;
  try {
    const result = await execSQLQuery(sqlQuery);
    return result;
  } catch (err) {
    return err;
  }
};
export const listIdProductsService = async (data) => {
  const sqlQuery = ``;
  try {
    const result = await execSQLQuery(sqlQuery);
    return result;
  } catch (err) {
    return err;
  }
};
export const updateProductsService = async (data) => {
  const sqlQuery = ``;
  try {
    const result = await execSQLQuery(sqlQuery);
    return result;
  } catch (err) {
    return err;
  }
};
export const deleteProductsService = async (data) => {
  const sqlQuery = ``;
  try {
    const result = await execSQLQuery(sqlQuery);
    return result;
  } catch (err) {
    return err;
  }
};
