var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "aluno01",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "SELECT * FROM informacoes LIMIT 3";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});