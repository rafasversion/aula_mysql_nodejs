var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "aluno01",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM informacoes WHERE nome = 'Rafaela'", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});