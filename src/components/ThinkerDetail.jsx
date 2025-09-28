import React from 'react';
import { getSchoolTheme } from '../data/thinkers';
import './ThinkerDetail.css';

function ThinkerDetail({ thinker }) {
  if (!thinker) {
    return <div className="detail-container placeholder">神学者を選択してください。</div>;
  }
  
  const theme = getSchoolTheme(thinker.school);

  return (
    <div className="detail-container" style={{ borderColor: theme.color }}>
      <header className="detail-header">
        <span className="school-badge" style={{ backgroundColor: theme.color }}>
          {thinker.school}
        </span>
        <h2>{thinker.name}</h2>
      </header>
      
      <section>
        <h4>思想の概要</h4>
        <p>{thinker.summary}</p>
      </section>

      <section>
        <h4>思想の核心</h4>
        {thinker.principles.map((p, index) => (
          <div key={index} className="principle-card">
            <strong>{p.title}</strong>
            <p>{p.content}</p>
          </div>
        ))}
      </section>

      <section>
        <h4>結論</h4>
        <p className="conclusion-text">{thinker.conclusion}</p>
      </section>
    </div>
  );
}

export default ThinkerDetail;
