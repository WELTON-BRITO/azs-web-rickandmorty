import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EpisodeDetail from './pages/episodeDetail/EpisodeDetail';
import EpisodesList from './pages/episodeList/EpisodeList';
import Header from './components/header/Header';

function App() {

  const [favorites, setFavorites] = useState([]);
  const [watched, setWatched] = useState([]);
  const [setSelectedEpisode] = useState(null);

  const toggleFavorite = (episode) => {
    setFavorites((prevFavorites) => {
      // Verifica se o episódio já está na lista de favoritos
      const isFavorite = prevFavorites.some(fav => fav.id === episode.id);
      if (isFavorite) {
       // Se já está favoritado, remove da lista
        return prevFavorites.filter(fav => fav.id !== episode.id);
      } else {
        // Se não está favoritado, adiciona à lista
        return [...prevFavorites, episode];
      }
    });
  };

  const markAsWatched = (id) => {
    setWatched((prev) => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  return (
    <Router>      
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={
            <EpisodesList
              onSelect={setSelectedEpisode}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
              markAsWatched={markAsWatched}
              watched={watched}
            />} />
          <Route path="/episodio/:id" element={<EpisodeDetail />} />
        </Routes>
      </main>      
    </Router>
  );
}

export default App;
