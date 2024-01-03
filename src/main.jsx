import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

//disabled React.StrictMode because 429 (Too Many Requests) problem with API
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
