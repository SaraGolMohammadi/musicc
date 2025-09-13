// src/App.js
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import { Routes, Route } from 'react-router-dom';
import routes from './routes';
import data from './data';
import Playlist from './pages/Playlist/Playlist';

function App() {
  return (
    <div className="App">
      
      <Sidebar />
      <div className="content">
        <Routes>
          {routes.map((route, index) => (
            <Route 
              key={index}
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default App;
