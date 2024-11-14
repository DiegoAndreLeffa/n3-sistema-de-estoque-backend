import { execSQLQuery } from "../../config.js";

export const createProductsService = async (data) => {
  const sqlQueryCategory = `
    SELECT Id_categoria 
    FROM Categoria 
    WHERE Nome = @nome;
  `;
  const paramsCategory = { nome: data.categoria };

  const sqlQueryProduct = `
    EXEC sp_IncluirProduto 
      @nome = @nome, 
      @id_categoria = @id_categoria, 
      @preco = @preco, 
      @quantidade = @quantidade;
  `;
  const paramsProduct = {
    nome: data.nome,
    preco: data.preco,
    quantidade: data.quantidade,
  };

  const sqlQueryEstoque = `
    EXEC SP_InserirEstoque
      @Id_produto = @id_produto,
      @Id_usuario = @id_usuario,
      @Quantidade = @quantidade,
      @Data_entrada = @dataEntrada,
      @Tipo_movimentacao = @tipoMovimentacao;
  `;

  try {
    const categoryResult = await execSQLQuery(sqlQueryCategory, paramsCategory);

    if (categoryResult.recordset.length === 0) {
      throw new Error("Categoria não encontrada.");
    }

    const id_categoria = categoryResult.recordset[0].Id_categoria;
    paramsProduct.id_categoria = id_categoria;

    await execSQLQuery(sqlQueryProduct, paramsProduct);
    const sqlQueryGetProductId = `
      SELECT Id_produto
      FROM Produto
      WHERE Nome = '${data.nome}'
    `;
    const productResult = await execSQLQuery(sqlQueryGetProductId);
    const id_produto = productResult.recordset[0].Id_produto;

    const paramsEstoque = {
      id_produto: id_produto,
      id_usuario: data.usuarioId,
      quantidade: data.quantidade,
      dataEntrada: data.dataEntrada,
      tipoMovimentacao: data.tipoMovimentacao,
    };
    const resultEstoque = await execSQLQuery(sqlQueryEstoque, paramsEstoque);

    if (resultEstoque && resultEstoque.error) {
      throw new Error(
        resultEstoque.error.message || "Erro desconhecido ao incluir o estoque"
      );
    }

    return { success: true, message: "Produto adicionado com sucesso!" };
  } catch (error) {
    const errorMessage =
      error.originalError?.info?.message ||
      error.message ||
      "Erro desconhecido";
    return { success: false, message: errorMessage };
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
  const sqlQuery = `SELECT * FROM Produto WHERE Id_produto = ${data}`;

  try {
    const result = await execSQLQuery(sqlQuery);

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
  const sqlQueryCategory = `
    SELECT Id_categoria 
    FROM Categoria 
    WHERE Nome = @nome;
  `;
  const paramsCategory = { nome: data.categoria };

  const sqlQueryProductUpdate = `
    EXEC sp_AlterarProduto 
    @Id_produto = @id_produto,
    @nome = @nome, 
    @Id_categoria = @id_categoria, 
    @preco = @preco, 
    @quantidade = @quantidade;
  `;
  const paramsProductUpdate = {
    id_produto: id,
    nome: data.nome,
    preco: data.preco,
    quantidade: data.quantidade,
  };

  const sqlQueryGetEstoque = `
    SELECT * FROM Estoque WHERE Id_produto = @id_produto;
  `;
  const paramsGetEstoque = { id_produto: id };

  const sqlQueryEstoqueUpdate = `
    EXEC SP_AlterarEstoque
    @Id_estoque = @id_estoque,
    @Id_produto = @id_produto,
    @Id_usuario = @id_usuario,
    @Quantidade = @quantidade,
    @Data_entrada = @dataEntrada,
    @Data_saida = @dataSaida,
    @Tipo_movimentacao = @tipoMovimentacao;
  `;

  try {
    const categoryResult = await execSQLQuery(sqlQueryCategory, paramsCategory);
    if (categoryResult.recordset.length === 0) {
      throw new Error("Categoria não encontrada.");
    }
    const id_categoria = categoryResult.recordset[0].Id_categoria;
    paramsProductUpdate.id_categoria = id_categoria;

    const productResult = await execSQLQuery(
      sqlQueryProductUpdate,
      paramsProductUpdate
    );
    if (productResult && productResult.error) {
      throw new Error(
        productResult.error.message || "Erro desconhecido ao alterar o produto"
      );
    }

    const estoqueResult = await execSQLQuery(
      sqlQueryGetEstoque,
      paramsGetEstoque
    );
    if (estoqueResult.recordset.length === 0) {
      throw new Error("Registro de estoque não encontrado.");
    }

    const idEstoque = estoqueResult.recordset[0].Id_estoque;
    const dataEntradaAtual = estoqueResult.recordset[0].Data_entrada;

    const paramsEstoqueUpdate = {
      id_estoque: idEstoque,
      id_produto: id,
      id_usuario: data.usuarioId,
      quantidade: data.quantidade,
      dataEntrada:
        data.tipoMovimentacao === "Entrada"
          ? data.dataEntrada
          : dataEntradaAtual,
      dataSaida: data.tipoMovimentacao === "Saída" ? data.dataSaida : null,
      tipoMovimentacao: data.tipoMovimentacao,
    };

    const updateEstoqueResult = await execSQLQuery(
      sqlQueryEstoqueUpdate,
      paramsEstoqueUpdate
    );
    if (updateEstoqueResult && updateEstoqueResult.error) {
      throw new Error(
        updateEstoqueResult.error.message ||
          "Erro desconhecido ao atualizar o estoque"
      );
    }

    return {
      success: true,
      message: "Produto e estoque alterados com sucesso!",
    };
  } catch (error) {
    const errorMessage =
      error.originalError?.info?.message ||
      error.message ||
      "Erro desconhecido";
    return { success: false, message: errorMessage };
  }
};

export const deleteProductsService = async (id) => {
  const sqlQueryDeleteEstoque = `
    DELETE FROM Estoque 
    WHERE Id_produto = @id_produto;
  `;

  const sqlQueryDeleteProduct = `
    EXEC sp_DeletarProduto
      @Id_produto = @id_produto;
  `;

  const params = { id_produto: id };

  try {
    const estoqueResult = await execSQLQuery(sqlQueryDeleteEstoque, params);

    if (estoqueResult && estoqueResult.error) {
      throw new Error(
        estoqueResult.error.message || "Erro desconhecido ao deletar o estoque"
      );
    }

    const productResult = await execSQLQuery(sqlQueryDeleteProduct, params);

    if (productResult && productResult.error) {
      throw new Error(
        productResult.error.message || "Erro desconhecido ao deletar o produto"
      );
    }

    return {
      success: true,
      message: "Produto e estoque deletados com sucesso!",
    };
  } catch (error) {
    const errorMessage =
      error.originalError?.info?.message ||
      error.message ||
      "Erro desconhecido";
    return { success: false, message: errorMessage };
  }
};
