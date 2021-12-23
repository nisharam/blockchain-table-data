import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RouterComponent  from './routes/Route.js';

function App() {
  return (
    <BrowserRouter>
    <RouterComponent />
    </BrowserRouter>
  );
}

export default App;
