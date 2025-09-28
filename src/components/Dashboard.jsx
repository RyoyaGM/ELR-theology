import React from 'react';
import ThinkerCard from './ThinkerCard';
import './Dashboard.css';

function Dashboard({ thinkers, onSelectThinker }) {
  return (
    <div className="dashboard-grid">
      {thinkers.map(thinker => (
        <ThinkerCard 
          key={thinker.id} 
          thinker={thinker} 
          onSelect={() => onSelectThinker(thinker)}
        />
      ))}
    </div>
  );
}

export default Dashboard;
