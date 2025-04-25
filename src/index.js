import ReactDOM from 'react-dom/client';
import {createApp} from "./app.jsx"
import toolsConfig from "./tools-config.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(createApp(toolsConfig));
