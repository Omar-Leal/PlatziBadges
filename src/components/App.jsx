import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import BadgeNew from '../pages/BadgeNew.jsx';
import Badges from '../pages/Badges.jsx';


function App(){
    return (
      <BrowserRouter>
        <div>
            <Route path="/badges" component={Badges} />
            <Route path="/badges/new" component={BadgeNew} />
        </div>
      </BrowserRouter>
    )
}

export default App;