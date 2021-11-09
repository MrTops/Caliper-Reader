import { useState } from 'react';
import './App.css';
import Caliper from './Caliper';
import CreateReadout from './CreateReadout';
import Quiz from './Quiz';
import Settings from './Settings';
import { TopBar, TopBarStates } from './TopBar';

const App = () => {
  const [selectedMenu, setSelectedMenu] = useState({});

  const handleTopbarChange = (selected) => {
    setSelectedMenu(selected);
  };

  return (
    <div className="app-container">
      <TopBar onChange={handleTopbarChange} />
      <div className="piece-container">
        <Quiz isActive={selectedMenu === TopBarStates[0]} />
        <CreateReadout isActive={selectedMenu === TopBarStates[1]} />
        <Settings isActive={selectedMenu === TopBarStates[2]} />
      </div>
      <p>Copyright ©️ 2021 Eldon Williams. All Rights Reserved</p> {/* If this is removed you must credit somewhere else. */}
    </div>
  );
}

export default App;
