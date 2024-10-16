const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const port = 3000;
/* MySQL Connection */

const db = mysql.createConnection({

  host: 'localhost',

  user: 'root',

  password: '',

  database: 'pgrem'

});

  

/* Connect to MySQL */

db.connect(err => {

  if (err) {

    throw err;

  }

  console.log('Connected to MySQL');

});

  

/* Middleware */

app.use(bodyParser.json());

app.use(cors());

  

/* Routes */

/* List all tecnico */

app.get('/tecnico', (req, res) => {

  db.query('SELECT * FROM tecnico', (err, results) => {

    if (err) {

      res.status(500).send('Error fetching tecnico');

      return;

    }

    res.json(results);

  });

});

   

/* Create a new post */

app.post('/tecnico/tecnico-create', (req, res) => {

  const { id_Tecnico, Rut,Nombre,Email,Fecha_contrato } = req.body;
  console.log(req.body)
  db.query('INSERT INTO tecnico (id_Tecnico, Rut,Nombre,Email,Fecha_contrato) VALUES (?,?,?,?,?)', [id_Tecnico, Rut,Nombre,Email,Fecha_contrato], (err, result) => {

    if (err) {
      res.status(500).send('Error creating post');
      return;
    }

    const postId = result.insertId;

    db.query('SELECT * FROM tecnico WHERE id_Tecnico = ?', postId, (err, result) => {

      if (err) {

        res.status(500).send('Error fetching created post');

        return;

      }

      res.status(201).json(result[0]);

    });

  });

});

  

/* Get a specific post */

app.get('/tecnico/:id_Tecnico', (req, res) => {

  const postId = req.params.id_Tecnico;
  console.log(req.params)

  db.query('SELECT * FROM tecnico WHERE id_Tecnico = ?', postId, (err, result) => {

    if (err) {

      res.status(500).send('Error fetching post');

      return;

    }

    if (result.length === 0) {

      res.status(404).send('Post not found');

      return;

    }

    res.json(result[0]);

  });

});

  

/* Update a post */

app.put('/tecnico/:id_Tecnico', (req, res) => {

  const postId = req.params.id_Tecnico;
  console.log(req.body)

  const { Rut,Nombre,Email,Fecha_contrato } = req.body;

  db.query('UPDATE pgrem.tecnico SET Rut = ?, Nombre = ?, Email = ?, Fecha_contrato = ? WHERE id_Tecnico = ?', [ Rut,Nombre,Email,Fecha_contrato,postId], err => {
    if (err) {
      res.status(500).send('Error updating post');
      return;
    }
    db.query('SELECT * FROM tecnico WHERE id_Tecnico = ?', postId, (err, result) => {
      if (err) {
        res.status(500).send('Error fetching updated post');
        return;
      }
      res.json(result[0]);
    });
  });
});

  

/* Delete a post */

app.delete('/tecnico/:id_Tecnico', (req, res) => {

  const postId = req.params.id_Tecnico;

  db.query('DELETE FROM tecnico WHERE id_Tecnico = ?', postId, err => {

    if (err) {

      res.status(500).send('Error deleting post');

      return;

    }

    res.status(200).json({ msg: 'Post deleted successfully' });

  });

});

  

/* Start server */

app.listen(port, () => {

  console.log(`Server running on port ${port}`);

});