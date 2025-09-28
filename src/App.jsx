import React, { useState } from 'react';
import { thinkersData } from './data/thinkers';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import ThinkerDetail from './components/ThinkerDetail';

function App() {
  const [selectedThinker, setSelectedThinker] = useState(thinkersData[0]);

  const handleSelectThinker = (thinker) => {
    setSelectedThinker(thinker);
    // 選択時に詳細表示エリアへスクロール
    const detailElement = document.getElementById('detail-section');
    if (detailElement) {
      detailElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Header />
      <main>
        <Dashboard 
          thinkers={thinkersData} 
          onSelectThinker={handleSelectThinker} 
        />
        <div id="detail-section">
          <ThinkerDetail thinker={selectedThinker} />
        </div>
      </main>
    </div>
  );
}

export default App;
