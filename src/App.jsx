import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Committees from './routes/Committees.jsx';
import Home from './routes/Home.jsx';
import Team from './routes/Team.jsx';
import Events from './routes/Events.jsx';
import DNE from './routes/DNE.jsx';


const App = () => {
    return(
        <Routes>
            <Route path='/' element = {<Home/>} />
            <Route path='/committees' element = {<Committees/>} />
            <Route path='/team' element = {<Team/>} />
            <Route path='/events' element = {<Events/>} />
            <Route path='/404' element = {<DNE/>} />

        </Routes>
    )
}

export default App;