import React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SettingsIcon from '@mui/icons-material/Settings';
import './Home.css';
import Categories from '../categories/Categories';

export default function Home() {

  return (
    <div className="home-container">
      <div className='container-div'>

      <div className="search-bar">
  <input type="text" placeholder="Search for a song" className="search-input" style={{position:'absolute'}} />
  <SearchOutlinedIcon className="search-icon" style={{position:'fixed', marginLeft:'500px'}}/>

  <div className="profile-section" style={{marginRight:'-150px'}}>
    <p className="profile-name">
      Molly Hunter <span className="premium-badge">premium</span>
    </p>
    <div className="icons-wrapper">
      <FavoriteBorderIcon className="icon" />
      <SettingsIcon className="icon" />
    </div>
  </div>
</div>

        </div>
        <div className='categories'>
               <Categories/>
            </div>
     
      </div>
    
  );
}
