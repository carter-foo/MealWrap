import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'normalize.css';
import { createGlobalStyle } from 'styled-components/macro';

import axios from 'axios';

// axios.defaults.baseURL = 'https://164.92.116.243:18080';
axios.defaults.baseURL = process.env.REACT_APP_staticPath;

const GlobalStyle = createGlobalStyle`
    /* body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    } */

    *{
        box-sizing: border-box;
    }

    html,body{
        height: 100%;
    }

    body{
        margin: 0 auto;
        background-color: rgb(245, 243, 241);
    }
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    #root{
        height:100%;
    }
`;

ReactDOM.render(
    <React.StrictMode>
        <Fragment>
            <App></App>
            <GlobalStyle />
        </Fragment>
    </React.StrictMode>,
    document.getElementById('root'),
);

/* Test components */

/* ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
); */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
