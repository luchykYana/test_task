import './App.css';

import {BrowserRouter, BrowserRouter as Router} from 'react-router-dom';

import UsersPage from '../src/components/usersPage/UsersPage';

function App() {

    return (
        <BrowserRouter>
            <Router>
                <UsersPage/>
            </Router>
        </BrowserRouter>
    );
}

export default App;
