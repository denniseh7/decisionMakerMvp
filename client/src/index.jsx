// the primary render page for the app
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';

// get root
const container = document.createElement('div');
container.setAttribute('id', 'root');
document.body.appendChild(container);

const root = createRoot(container);
root.render(<App />);
