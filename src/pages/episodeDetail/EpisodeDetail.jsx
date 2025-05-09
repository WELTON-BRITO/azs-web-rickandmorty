// components/EpisodeDetail.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {  Card, CardContent, Button } from '@mui/material';

function EpisodeDetail() {

  const { id } = useParams();
  const [episode, setEpisode] = useState(null);
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/episode/${id}`)
      .then(res => res.json())
      .then(data => {
        setEpisode(data);
        return Promise.all(data.characters.map(url => fetch(url).then(res => res.json())));
      })
      .then(setCharacters);
  }, [id]);

  if (!episode) return <p>Carregando...</p>;

  return (
    <Card>
      <CardContent>
          <div>
            <Button onClick={() => navigate('/')} variant="contained" color="primary" className="mb-4">
              Voltar
            </Button>
            <h2>{episode.episode} - {episode.name}</h2>
            <p>Data: {new Date(episode.air_date).toLocaleDateString('pt-BR')}</p>
            <h3>Personagens:</h3>
            <div className="character-list">
              {characters.map(char => (
                <div key={char.id} className="character-card">
                  <img src={char.image} alt={char.name} />
                  <h4>{char.name}</h4>
                  <p>Espécie: {char.species}</p>
                  <p>Status: {char.status}</p>
                </div>
              ))}
            </div>
          </div>
      </CardContent>
    </Card>
  );
}

export default EpisodeDetail;
