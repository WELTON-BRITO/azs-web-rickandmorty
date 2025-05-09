import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const Favorites = ({ favorites }) => {
  if (favorites.length === 0) {
    return <Typography variant="body1">Nenhum episódio favorito ainda.</Typography>;
  }

  return (
    <div>
      <Typography variant="h5" gutterBottom>Favoritos</Typography>
      <Grid container spacing={2}>
        {favorites.map(fav => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={fav.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{fav.episode} - {fav.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  Data de exibição: {new Date(fav.air_date).toLocaleDateString('pt-BR')}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Favorites;
