import React from 'react';
import { Route, Switch } from 'react-router'




import Home from './containers/Home';
import Users from './containers/Users';
import User from './containers/User';



const NoMatch = (props) => {

  return (
    <div>
      404!
    </div>
  )
}


const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/users" component={Users}/>
    <Route exact path="/user/:id" component={User}/>
    <Route component={NoMatch}/>
  </Switch>
)
export default Routes;