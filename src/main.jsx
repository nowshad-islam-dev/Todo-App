import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

// component imports
import App from './App.jsx';

// eslint-disable-next-line no-unused-vars
const DATA = [
  { id: 'todo-0', name: 'Eat', completed: true },
  { id: 'todo-1', name: 'Sleep', completed: false },
  { id: 'todo-2', name: 'Repeat', completed: false },
];

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App tasks={DATA} />
  </StrictMode>
);
