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




//datos de ticket :D

//lista de todos los ticket 
app.get('/ticket', (req, res) => {
  db.query('SELECT * FROM ticket', (err, results) => {
    if (err) {
      res.status(500).send('Error fetching ticket');
      return;
    }
    res.json(results);
  });
});

//Para crear tickets 
app.post('/ticket/ticket-create', (req, res) => {
  const { id_Ticket, Tipo,Detalle,Fecha_Apertura,Fecha_Cierre,Estado,Cliente_id_Cliente,Comentario,Prioridad } = req.body;
  console.log(req.body)
  db.query('INSERT INTO ticket ( id_Ticket, Tipo,Detalle,Fecha_Apertura,Fecha_Cierre,Estado,Cliente_id_Cliente,Comentario,Prioridad ) VALUES (?,?,?,?,?,?,?,?,?)', [ id_Ticket, Tipo,Detalle,Fecha_Apertura,Fecha_Cierre,Estado,Cliente_id_Cliente,Comentario,Prioridad], (err, result) => {
    if (err) {
      res.status(500).send('Error creating post');
      return;
    }

    const postId = result.insertId;
    db.query('SELECT * FROM ticket WHERE id_Ticket = ?', postId, (err, result) => {
      if (err) {
        res.status(500).send('Error fetching created post');
        return;
      }
      res.status(201).json(result[0]);
    });
  });
});

//ir a un ticket especifico 
app.get('/ticket/:id_Ticket', (req, res) => {
  const postId = req.params.id_Ticket;
  console.log(req.params.id_Ticket)
  db.query('SELECT * FROM pgrem.ticket WHERE id_Ticket = ?', postId, (err, result) => {
    if (err) {
      res.status(500).send('Error fetching post');
      return;
    }
    if (result.length === 0) {
      res.status(404).send('ticket no encontrado');
      return;
    }
    res.json(result[0]);
  });
});

// actualizar el estado del ticket
app.put('/ticket_update/:id_Ticket', (req, res) => {
  const postId = req.params.id_Ticket;
  console.log(req.body,' ' ,req.params.id_Ticket)
  const { Fecha_Cierre, Estado, Comentario, Prioridad } = req.body;
  db.query('UPDATE pgrem.ticket SET Fecha_Cierre = ?, Estado = ?, Comentario = ?, Prioridad=?  WHERE id_Ticket = ? ' ,[ Fecha_Cierre,Estado,Comentario,Prioridad ,postId], err => {
   console.log (err )
    if (err) {
      res.status(500).send('Error updating post');
      return;
    }
    db.query('SELECT * FROM ticket WHERE id_Ticket = ?', postId, (err, result) => {
      if (err) {
        res.status(500).send('Error fetching updated post');
        return;
      }
      res.json(result[0]);
    });
  });
});
  

/* Start server */
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});