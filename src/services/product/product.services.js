import { execSQLQuery } from "../../config.js";

export const createProductsService = async (data) => {
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

    if (result && result.error) {
      throw new Error(
        result.error.message || "Erro desconhecido ao incluir o produto"
      );
    }

    return result;
  } catch (error) {
    const errorMessage =
      error.originalError?.info?.message ||
      error.message ||
      "Erro desconhecido";
    throw new Error(errorMessage);
  }
};

export const listProductsService = async (data) => {
  const sqlQuery = `SELECT * FROM Produto`;
  try {
    const result = await execSQLQuery(sqlQuery);

    if (result && result.error) {
      throw new Error(
        result.error.message || "Erro desconhecido ao incluir o produto"
      );
    }

    return result.recordsets[0];
  } catch (error) {
    const errorMessage =
      error.originalError?.info?.message ||
      error.message ||
      "Erro desconhecido";
    throw new Error(errorMessage);
  }
};

export const listIdProductsService = async (data) => {
  const sqlQuery = `SELECT * FROM Produto WHERE Id_produto = id_produto`;

  const params = {
    id_produto: data.id_produto,
  };

  try {
    const result = await execSQLQuery(sqlQuery, params);

    if (result && result.error) {
      throw new Error(
        result.error.message || "Erro desconhecido ao incluir o produto"
      );
    }

    return result.recordsets[0][0];
  } catch (error) {
    const errorMessage =
      error.originalError?.info?.message ||
      error.message ||
      "Erro desconhecido";
    throw new Error(errorMessage);
  }
};

export const updateProductsService = async (id, data) => {
  const sqlQuery = `
		EXEC sp_AlterarProduto 
		@Id_produto = @id_produto,
		@nome = @nome, 
		@id_categoria = @id_categoria, 
		@preco = @preco, 
		@quantidade = @quantidade;
	`;

  const params = {
    id_produto: id,
    nome: data.nome,
    id_categoria: data.id_categoria,
    preco: data.preco,
    quantidade: data.quantidade,
  };

  try {
    const result = await execSQLQuery(sqlQuery, params);

    if (result && result.error) {
      throw new Error(
        result.error.message || "Erro desconhecido ao incluir o produto"
      );
    }

    return result;
  } catch (error) {
    const errorMessage =
      error.originalError?.info?.message ||
      error.message ||
      "Erro desconhecido";
    throw new Error(errorMessage);
  }
};

export const deleteProductsService = async (id) => {
  const sqlQuery = `EXEC sp_DeletarProduto
		@Id_produto = @id_produto
	;`;
  const params = {
    id_produto: id,
  };
  try {
    const result = await execSQLQuery(sqlQuery, params);

    if (result && result.error) {
      throw new Error(
        result.error.message || "Erro desconhecido ao incluir o produto"
      );
    }

    return result;
  } catch (error) {
    const errorMessage =
      error.originalError?.info?.message ||
      error.message ||
      "Erro desconhecido";
    throw new Error(errorMessage);
  }
};
