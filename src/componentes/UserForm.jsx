import React, { useState } from 'react';
import {
  TextField,
  Button,
  Paper,
  Typography,
  Box,
} from '@mui/material';

const UserForm = () => {
  const [user, setUser] = useState({
    nome: '',
    email: '',
    telefone: '',
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user.nome || !user.email || !user.telefone) {
      alert('Preencha todos os campos!');
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem('usuarios')) || [];
    storedUsers.push(user);
    localStorage.setItem('usuarios', JSON.stringify(storedUsers));

    setUser({ nome: '', email: '', telefone: '' });
    alert('Usuário cadastrado com sucesso!');
  };

  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>
        Cadastro de Usuário
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Nome"
          name="nome"
          value={user.nome}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={user.email}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Telefone"
          name="telefone"
          value={user.telefone}
          onChange={handleChange}
          fullWidth
        />
        <Button variant="contained" color="primary" type="submit">
          Cadastrar
        </Button>
      </Box>
    </Paper>
  );
};

export default UserForm;
