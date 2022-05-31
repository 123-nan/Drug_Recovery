import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore} from 'redux';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './reducers';




const store = createStore(rootReducer,composeWithDevTools());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  
  <BrowserRouter>
  <React.StrictMode>
    <Provider store={store}>
     
    <App />
    
    </Provider>
  </React.StrictMode>
  </BrowserRouter>
);
reportWebVitals();
