import React, { useEffect, useState } from 'react';
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
} from '@mui/material';

const UserList = () => {
  const [usuarios, setUsuarios] = useState([]);

  const carregarUsuarios = () => {
    const data = JSON.parse(localStorage.getItem('usuarios')) || [];
    setUsuarios(data);
  };

  const limparUsuarios = () => {
    if (window.confirm('Tem certeza que deseja apagar todos os usuários?')) {
      localStorage.removeItem('usuarios');
      setUsuarios([]);
    }
  };

  useEffect(() => {
    carregarUsuarios();
  }, []);

  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>
        Usuários Cadastrados
      </Typography>

      {usuarios.length === 0 ? (
        <Typography variant="body1">Nenhum usuário cadastrado.</Typography>
      ) : (
        <>
          <List>
            {usuarios.map((u, index) => (
              <React.Fragment key={index}>
                <ListItem>
                  <ListItemText
                    primary={u.nome}
                    secondary={`Email: ${u.email} | Telefone: ${u.telefone}`}
                  />
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
          <Button variant="outlined" color="error" onClick={limparUsuarios}>
            Limpar Lista
          </Button>
        </>
      )}
    </Paper>
  );
};

export default UserList;
