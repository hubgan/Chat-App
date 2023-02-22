// pages
import Login from './pages/Login';
import Chat from './pages/Chat';

// components
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './routes/PrivateRoute';

// auth context
import { AuthProvider } from './context/authContext';

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/chat'
          element={
            <PrivateRoute>
              <Chat />
            </PrivateRoute>}
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
