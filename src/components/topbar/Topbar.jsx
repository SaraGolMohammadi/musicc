import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SettingsIcon from '@mui/icons-material/Settings';
export default function topbar() {
  return (
    <div>
        <div>
            <input type="text" placeholder='Search for a song'/>
            <SearchOutlinedIcon/>
            
        </div>
        <div>
            <img src=""/>
            <p>Molly Hunter
                <span>premium</span>
            </p>
        <div>
            <FavoriteBorderIcon/>
            <SettingsIcon/>
        </div>
        </div>
    </div>
  )
}
