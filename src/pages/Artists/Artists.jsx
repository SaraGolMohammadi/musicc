import React, { useState } from 'react';
import data from '../../data'; 
import Playlist from '../Playlist/Playlist';


function Artists() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', ...new Set(data.map(item => item.category))];

  const filteredData = selectedCategory === 'All'
    ? data
    : data.filter(item => item.category === selectedCategory);

  return (
    <div>
      <h2>Categories</h2>
      <div>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              marginRight: '10px',
              backgroundColor: selectedCategory === cat ? 'orange' : 'gray',
              color: 'white',
              border: 'none',
              padding: '8px 12px',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <h2>Popular Songs</h2>
      <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap'}}>
        {filteredData.map(song => (
          <div key={song.id} style={{ width: '150px', cursor: 'pointer' }}>
            <img
              src={song.img}
              alt={song.title}
              style={{ width: '100%', height:'180px',borderRadius:'50%' }}
            />            
          </div>
        ))}
      </div>
     
    </div>
   
  );
}

export default Artists;
