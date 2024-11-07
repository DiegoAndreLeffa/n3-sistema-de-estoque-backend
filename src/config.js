import pkg from "mssql";
const { connect } = pkg;

import "dotenv/config";

const config = {
  server: "localhost",
  database: process.env.DB,
  user: process.env.USER,
  password: process.env.PASSWORD,
  options: {
    trustedConnection: true,
    enableArithAbort: true,
    trustServerCertificate: true,
  },
};

let pool;

export const initDBConnection = async () => {
  try {
    pool = await connect(config);
    console.log("Conectado ao SQL Server");
  } catch (err) {
    console.error("Erro ao conectar ao banco de dados:", err);
    throw err;
  }
};

export const execSQLQuery = async (sqlQuery, params = {}) => {
  if (!pool) {
    await initDBConnection();
  }

  const request = pool.request();

  // Adiciona parâmetros ao request de forma segura
  for (const [key, value] of Object.entries(params)) {
    request.input(key, value);
  }

  return request.query(sqlQuery);
};
