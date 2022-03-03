// import logo from './logo.svg';
// import styled from 'styled-components/macro';
import 'normalize.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from './views/routerConfig';
// import Login from './components/Login';

// const Appli = styled.div`
//     text-align: center;

//     .App-logo {
//         height: 40vmin;
//         pointer-events: none;
//     }

//     @media (prefers-reduced-motion: no-preference) {
//         .App-logo {
//             animation: App-logo-spin infinite 20s linear;
//         }
//     }

//     .App-header {
//         background-color: #282c34;
//         min-height: 100vh;
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         justify-content: center;
//         font-size: calc(10px + 2vmin);
//         color: white;
//     }

//     .App-link {
//         color: #61dafb;
//     }

//     @keyframes App-logo-spin {
//         from {
//             transform: rotate(0deg);
//         }
//         to {
//             transform: rotate(360deg);
//         }
//     }
// `;

// function Lalala() {
//     return (
//         <Appli>
//             <header className='App-header'>
//                 <img src={logo} className='App-logo' alt='logo' />
//                 <p>
//                     Edit <code>src/App.js</code> and save to reload.
//                 </p>
//                 <a
//                     className='App-link'
//                     href='https://reactjs.org'
//                     target='_blank'
//                     rel='noopener noreferrer'
//                 >
//                     Learn React
//                 </a>
//             </header>
//         </Appli>
//     );
// }

function App() {
    console.log(routes);
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<Lalala />}/> */}
                {routes.map(routeObj => (
                    <Route key={routeObj.path} {...routeObj} />
                ))}
                {/* <Route path='/login' element={<Login />}></Route> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
