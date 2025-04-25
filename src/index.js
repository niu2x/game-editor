import ReactDOM from 'react-dom/client';
import {createApp} from "./app.js"
import toolsConfig from "./tools-config.js"
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(createApp(toolsConfig));
