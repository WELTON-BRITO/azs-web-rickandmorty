import React from 'react';

function CharacterCard({ character }) {
  return (
    <div className="character-card">
      <img
        src={character.image}
        alt={character.name}
        className="w-24 h-24 mx-auto rounded-full mb-2"
      />
      <h3 className="text-md font-semibold">{character.name}</h3>
      <p className="text-sm text-gray-600">{character.species}</p>
      <p className={`text-sm ${character.status === 'Alive' ? 'text-green-600' : 'text-red-600'}`}>
        {character.status}
      </p>
    </div>
  );
}

export default CharacterCard;
