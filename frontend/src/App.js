import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomeScreen from './Screen/HomeScreen';
import Header from './Layout/Header';
import CreateLeaderboardScreen from './Screen/Leaderboard/CreateLeaderboardScreen';
import UserListScreen from './Screen/User/UserListScreen';

function App() {
  return (
    <div className="content-wrapper">
      <Router>
        <Header/>
        <main className="container">
          <Routes>
            <Route path="/leaderboard/create" element={<CreateLeaderboardScreen />} exact />
            <Route path="/explore" element={<UserListScreen />} exact />
            <Route path="/" element={<HomeScreen />} exact />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
