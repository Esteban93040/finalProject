import express from 'express';
import fs from 'fs/promises';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3001;

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const data = await fs.readFile('users.txt', 'utf8');
    const users = data.split('\n').map(line => line.trim());

    const isValidUser = users.some(user => {
      const [storedUser, storedPassword] = user.split(',');
      return storedUser === username && storedPassword === password;
    });

    if (isValidUser) {
      res.json({ success: true, message: 'Inicio de sesión exitoso' });
    } else {
      res.status(401).json({ success: false, message: 'Credenciales inválidas' });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: 'Error al leer el archivo.' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
