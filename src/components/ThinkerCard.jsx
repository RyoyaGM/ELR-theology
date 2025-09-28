import React from 'react';
import { getSchoolTheme } from '../data/thinkers';
import './ThinkerCard.css';

function ThinkerCard({ thinker, onSelect }) {
  const theme = getSchoolTheme(thinker.school);

  return (
    <div 
      className={`thinker-card ${theme.className}`} 
      onClick={onSelect}
      style={{ borderLeftColor: theme.color }}
    >
      <h3>{thinker.name}</h3>
      <p className="school-name" style={{ color: theme.color }}>
        {thinker.school}
      </p>
      <p className="catchphrase">「{thinker.catchphrase}」</p>
    </div>
  );
}

export default ThinkerCard;
