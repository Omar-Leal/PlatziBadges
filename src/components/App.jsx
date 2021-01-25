import React from 'react';
import { BrowserRouter, Switch ,Route } from 'react-router-dom';

import Home from '../pages/Home';
import BadgeNew from '../pages/BadgeNew.jsx';
import BadgeEdit from '../pages/BadgeEdit.jsx';
import Badges from '../pages/Badges.jsx';
import Layout from '../components/Layout.jsx';
import NotFound from '../pages/NotFound'
import BadgeDetails from '../pages/BadgeDetailsContainer.jsx'
 

function App(){
    return (
      <BrowserRouter>
        <Layout>
              <Switch>
                <Route exact path="/badges" component={Badges} />
                <Route exact path="/badges/new" component={BadgeNew} />
                <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
                <Route exact path="/badges/:badgeId" component={BadgeDetails} />
                <Route exact path="/" component={Home} />
                <Route component={NotFound} />
              </Switch>
        </Layout>
      </BrowserRouter>
    )
}

export default App;