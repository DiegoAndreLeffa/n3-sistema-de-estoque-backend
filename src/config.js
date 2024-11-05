import { connect } from "mssql";
import "dotenv/config";

const config = {
  server: "localhost",
  database: process.env.DB,
  port: 1433,
  user: process.env.USER,
  password: process.env.PASSWORD,
  options: {
    encrypt: true,
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

export const execSQLQuery = (sqlQry) => {
  return pool.request().query(sqlQry);
};
