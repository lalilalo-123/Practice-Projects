import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <UserContextProvider>
        <h1 className="text-center text-3xl font-bold pt-8 text-cyan-400">React Practice</h1>
        <Login />
        <Profile />
      </UserContextProvider>
    </div>
  );
}

export default App;
