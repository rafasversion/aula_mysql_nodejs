var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "aluno01",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO amizades (nome, endereco) VALUES ?";
  var values = [
    ['Carla', 'Boa Esperança'],
    ['Henrique', 'Guarita'],
    ['Karen', 'Centro'],
    ['Móira', 'Sanga Negra'],
    ['Gabriel', 'Torres'],
    ['João', 'Santa Rosa']
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Números inseridos: " + result.affectedRows);
  });
});