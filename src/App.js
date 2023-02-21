// pages
import Login from './pages/Login';
import Chat from './pages/Chat';

// components
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Chat />
      {/* <Login /> */}
    </div>
  );
}

export default App;
