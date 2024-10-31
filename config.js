import { connect } from "mssql";

const config = {
  server: "localhost",
  database: "<nome_do_database>",
  port: 1433,
  user: "<usuario>",
  password: "<senha>",
  trustServerCertificate: true,
  options: {
    cryptoCredentialsDetails: {
      minVersion: "TLSv1",
      trustServerCertificate: true,
    },
  },
};

connect(config)
  .then((conn) => {
    console.log("conectou");
  })
  .catch((err) => {
    console.log(err);
  });

export const execSQLQuery = (sqlQry, res) => {
  global.conn
    .request()
    .query(sqlQry)
    .then((result) => res.json(result.recordset))
    .catch((err) => res.json(err));
};
