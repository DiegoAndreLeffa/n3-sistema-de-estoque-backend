import { execSQLQuery } from "../../config.js";

export const createCategorieService = async (data) => {
  const sqlQuery = `
    EXEC SP_InserirCategoria
      @Nome = @nome;
  `;
  const params = {
    nome: data.nome,
  };

  try {
    const result = await execSQLQuery(sqlQuery, params);
    return { success: true, message: "Categoria criada com sucesso!" };
  } catch (err) {
    console.error("Erro ao inserir categoria:", err);

    const errorMessage =
      err.originalError?.info?.message ||
      "Erro ao inserir categoria no banco de dados.";

    return { success: false, message: errorMessage };
  }
};

export const listCategorieService = async () => {
  const sqlQuery = `
    SELECT c.Nome AS categoria, COUNT(p.Id_produto) AS quantidade
    FROM Categoria c
    LEFT JOIN Produto p ON c.Id_categoria = p.Id_categoria
    GROUP BY c.Nome;
  `;

  try {
    const result = await execSQLQuery(sqlQuery);
    return result.recordsets[0];
  } catch (err) {
    return err;
  }
};

export const listIdCategorieService = async (categoryId) => {
  const sqlQuery1 = `
    SELECT Id_categoria
    FROM Categoria
    WHERE Nome = '${categoryId}'
  `;

  try {
    const resultName = await execSQLQuery(sqlQuery1);

    const categoryIdFound = resultName.recordsets[0][0]?.Id_categoria;
    if (!categoryIdFound) {
      throw new Error("Categoria não encontrada");
    }

    const sqlQuery2 = `
      SELECT
        p.Id_produto AS codigo,
        p.Nome AS nome,
        p.Preco AS preco,
        p.Quantidade AS estoque,
        e.Data_entrada AS dataEntrada,
        e.Data_saida AS dataSaida,
        e.Tipo_movimentacao AS tipoMovimentacao,
        u.Nome AS usuario,
        c.Nome AS categoria
      FROM
        Produto p
      JOIN
        Categoria c ON p.Id_categoria = c.Id_categoria
      LEFT JOIN
        Estoque e ON e.Id_produto = p.Id_produto
      LEFT JOIN
        Usuario u ON e.Id_usuario = u.Id_usuario
      WHERE
        c.Id_categoria = ${categoryIdFound};
    `;

    const result = await execSQLQuery(sqlQuery2);
    return result.recordsets[0];
  } catch (err) {
    console.error("Erro ao listar produtos por categoria:", err);
    return err;
  }
};

export const updateCategorieService = async (data) => {
  const sqlQuery = ``;
  try {
    const result = await execSQLQuery(sqlQuery);
    return result;
  } catch (err) {
    return err;
  }
};

export const deleteCategorieService = async (data) => {
  const sqlQuery1 = `
    SELECT Id_categoria
    FROM Categoria
    WHERE Nome = '${data}'
  `;

  const resultName = await execSQLQuery(sqlQuery1);
  const categoryIdFound = resultName.recordset[0].Id_categoria;

  const sqlQuery = `
    EXEC SP_DeletarCategoria
      @Id_categoria = @id_categoria
  `;

  const params = {
    id_categoria: categoryIdFound,
  };

  try {
    const result = await execSQLQuery(sqlQuery, params);
    return { success: true, message: "Categoria deletada com sucesso!" };
  } catch (err) {
    console.error("Erro ao inserir categoria:", err);
    const errorMessage =
      err.originalError?.info?.message ||
      "Erro ao inserir categoria no banco de dados.";

    return { success: false, message: errorMessage };
  }
};
