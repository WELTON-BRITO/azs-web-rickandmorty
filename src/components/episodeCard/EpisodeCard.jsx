// components/episodeCard/EpisodeCard.jsx
import React from 'react';
import { Card, CardContent, Typography, Button, IconButton } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const EpisodeCard = ({ episode, toggleFavorite, isFavorite, toggleWatched, isWatched }) => {
  return (
    <Card elevation={3} style={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6">{episode.episode} - {episode.name}</Typography>
        <Typography variant="body2" color="textSecondary">
          Data de exibição: {new Date(episode.air_date).toLocaleDateString('pt-BR')}
        </Typography>
        <Typography variant="body2">Personagens: {episode.characters.length}</Typography>

        <div style={{ marginTop: 10, display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="outlined" href={`/episodio/${episode.id}`}>
            Ver detalhes
          </Button>

          <Button size="small" variant="contained" color={isWatched ? 'success' : 'secondary'}
            onClick={() => toggleWatched(episode)}>
            {isWatched ? 'Visto' : 'Não Visto'}
          </Button>

          <IconButton onClick={() => toggleFavorite(episode)} color="secondary">
            {isFavorite ? <StarIcon /> : <StarBorderIcon />}
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
};

export default EpisodeCard;
