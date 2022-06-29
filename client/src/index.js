import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import UseStore from './store/UseStore';
import reportWebVitals from './reportWebVitals';
import DeviceStore from './store/DeviceStore';
import './assets/styles/main.scss';
export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
        <Context.Provider value={{
            user: new UseStore(),
            device: new DeviceStore(),
        }}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Context.Provider>
    // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
