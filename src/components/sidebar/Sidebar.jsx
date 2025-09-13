import { Link } from 'react-router-dom';
import React,{useState} from 'react'
import HomeIcon from '@mui/icons-material/Home';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LogoutIcon from '@mui/icons-material/Logout';
import './Sidebar.css'



export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
      };

      
  return (
    <div className='sider'>
      <div className='sidebarWrapper'>

          <h1>RhythmoTune</h1>

        <div className='sider-ul'>
          <ul>
            <li className="link" >
              <Link to="/" style={{color:'#fff'}}>
              <HomeIcon />
                Home
              </Link>
            </li>

            <li className="link">
              <Link to="/categories" style={{color:'#fff'}}>
               <CategoryOutlinedIcon />
                Categories
              </Link>
            </li>

            <li className="link">
              <Link to="/Artists" style={{color:'#fff'}}>
               <PersonOutlineIcon />
                Artists
               </Link>
            </li>



            <div style={{ width: "200px", padding: "10px", borderRadius: "8px" }}> 
                <div onClick={toggleDropdown}style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", cursor: "pointer" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "4px", marginLeft:'5px' }}>
                  <QueueMusicIcon />
                   Playlists
                  </span>
                  <span style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0deg)", transition: "transform 0.3s" }}>
                  <KeyboardArrowDownIcon style={{display: "flex", alignItems: "center"}}/>
                  </span>
                 </div>

    
              {isOpen && (
                 <div style={{ marginTop: "10px" ,marginLeft:'20px' }}>
                   <div style={{ padding: "5px 0", display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                    Vibes & Chill
                    </div>
                  <div style={{ padding: "5px 0", display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                  Morning Boost
                  </div>
                 <div style={{ padding: "5px 0", display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                    Rhythm & Energy
                 </div>
                 </div>
                 )}</div>
            </ul>
           
            <div style={{position: "absolute",bottom: "120px", display: "flex",alignItems: "center",gap: "-2px",cursor: "pointer",paddingLeft: "40px",color: "white",  }}>
              <LogoutIcon />
              <p style={{ margin: 0 }}>Logout</p>
            </div>
             
           
             
        </div>
      </div>
    </div>
  )
}
