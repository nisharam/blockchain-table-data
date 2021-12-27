import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RouterComponent  from './routes/Route.js';
import { Provider } from 'react-redux'
import { createStore,applyMiddleware } from 'redux'
import reducer from './reducers/table.reducer';
import thunk from 'redux-thunk';

const tableReducer = createStore(reducer,applyMiddleware(thunk))

function App() {
  return (
    <Provider store={tableReducer} >
    <BrowserRouter>
    <RouterComponent />
    </BrowserRouter>
    </Provider>
  );
}

export default App;
