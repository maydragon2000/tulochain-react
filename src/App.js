import './App.css';
import Home from './pages/home/Home';
import { AppProvider } from './context/appProvider';
function App() {
  return (
    <div className="App" >
      <AppProvider>
        <Home />
      </AppProvider>
    </div>
  );
}
export default App;
