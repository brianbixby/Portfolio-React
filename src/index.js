import './style/main.scss';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom"

import App from './components/app';
import appCreateStore from './lib/app-create-store.js';
// import reportWebVitals from './reportWebVitals';

const rootEl = document.getElementById('root');
const root = createRoot(rootEl);


let AppContainer = () => {
    return (
        <React.StrictMode>
            <Provider store={appCreateStore()}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        </React.StrictMode>
    );
};

root.render(<AppContainer />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();