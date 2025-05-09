import React, { useEffect, useState } from 'react';
import EpisodeCard from '../../components/episodeCard/EpisodeCard';
import { Card, CardContent, TextField } from '@mui/material';
import Favorites from '../../pages/favorites/Favorites';

function EpisodeList() {
  const [episodes, setEpisodes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredEpisodes, setFilteredEpisodes] = useState([]);
  const [favorites, setFavorites] = useState([]); // Estado de favoritos
  const [watched, setWatched] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/episode')
      .then(res => res.json())
      .then(data => {
        setEpisodes(data.results);
        setFilteredEpisodes(data.results);
      });
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = episodes.filter(ep => ep.name.toLowerCase().includes(term));
    setFilteredEpisodes(filtered);
  };

  // Função para alternar entre adicionar/remover favorito
  const toggleFavorite = (episode) => {
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.some(fav => fav.id === episode.id);
      if (isFavorite) {
        return prevFavorites.filter(fav => fav.id !== episode.id);
      } else {
        return [...prevFavorites, episode];
      }
    });
  };

  const toggleWatched = (episode) => {
    setWatched((prevWatched) => {
      const isWatched = prevWatched.some(w => w.id === episode.id);
      if (isWatched) {
        return prevWatched.filter(w => w.id !== episode.id);
      } else {
        return [...prevWatched, episode];
      }
    });
  };

  return (
    <Card sx={{ backgroundColor: '#e8f5e9' }}>
      <CardContent>
        <div>
          <TextField  placeholder="Buscar episódio por nome..." variant="outlined" value={searchTerm}
            onChange={handleSearch}fullWidth/>              
          <h2>Lista de Episódios</h2>
          <div className="episode-list">
            {filteredEpisodes.map(ep => (
              <EpisodeCard
                key={ep.id}
                episode={ep}
                toggleFavorite={toggleFavorite}
                toggleWatched={toggleWatched}
                isFavorite={favorites.some(fav => fav.id === ep.id)}
                isWatched={watched.some(w => w.id === ep.id)}
              />
            ))}
          </div>
          
          <Favorites favorites={favorites} />

        </div>
      </CardContent>
    </Card>
  );
}

export default EpisodeList;
