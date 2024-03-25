import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './states/index.js';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <App />
    </Provider>,
);