import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route} from 'react-router-dom';

const router = (
    <Router>
        <Route path="/" component={App}></Route>
    </Router>
)

ReactDOM.render(router, document.getElementById('root'));