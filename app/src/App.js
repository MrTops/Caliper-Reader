import { useState } from 'react';
import './App.css';
import CreateReadout from './CreateReadout';
import Quiz from './Quiz';
import Settings from './Settings';
import { TopBar, TopBarStates } from './TopBar';
import ForkMeOnGithub from 'fork-me-on-github';

const App = () => {
  const [selectedMenu, setSelectedMenu] = useState({});

  const handleTopbarChange = (selected) => {
    setSelectedMenu(selected);
  };

  return (
    <>
      <div className="app-container">
        <TopBar onChange={handleTopbarChange} /><br/>
        <div className="piece-container"> {/* Just a warning; the css for this is EXTREMELY hacky. */}
          <Quiz isActive={selectedMenu === TopBarStates[0]} />
          <CreateReadout isActive={selectedMenu === TopBarStates[1]} />
        </div><br/>
        <p>Copyright ©️ 2021 Eldon Williams. All Rights Reserved</p> {/* If this is removed you must credit somewhere else. */}
      </div>
      <ForkMeOnGithub
        repo="https://github.com/eldonwilliams/Caliper-Reader"
        text="Check out the source code!"
      />
    </>
  );
}

export default App;
