import { Routes, Route } from 'react-router-dom';
import NavBar from './components/Common/NavBar';
import Home from './pages/Home';
import UsersList from './pages/Users';
import PostsList from './pages/Posts';
import "./App.css";

function App(): JSX.Element {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/posts" element={<PostsList />} />
      </Routes>
    </div>
  );
}

export default App;
