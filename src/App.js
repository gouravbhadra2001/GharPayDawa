import './App.css';
import AppBar from './components/AppBar/AppBar';

import BottomNavBar from './components/BottomNavBar/BottomNavBar';
import SearchBar from './components/SearchBar/SearchBar';
import { AuthContext } from './AuthContext'; // Adjust the path as necessary
import { useContext } from 'react';
import Body from './components/Body/Body';

function App() {
  const { authData } = useContext(AuthContext);

  

  return (
    <div className='rootApp' id='rootApp'>
      <AppBar />
      <div className='search-container'>
        <SearchBar />
      </div>
      <Body />
      <BottomNavBar />
    </div>
  );
}

export default App;
