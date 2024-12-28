import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// the root element in the index.html will render the App.js file that we export
root.render(
    <StrictMode>
        <App/>
    </StrictMode>,
);