import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import UserComponent from "./components/user/UserComponent";
import GroupComponent from "./components/group/GroupComponent";
import CreateUser from "./components/user/CreateUser";
import UpdateUser from "./components/user/UpdateUser";
import CreateGroup from "./components/group/CreateGroup";
import UpdateGroup from "./components/group/UpdateGroup";


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to={'/users'}>Users</Link></li>
                        <li><Link to={'/groups'}>Group</Link></li>
                    </ul>
                </div>
                <Switch>
                    <Route path={'/users'} render={(props) => {
                        return <UserComponent/>
                    }}/>
                    <Route path={'/user/create'} render={(props) => {
                        return <CreateUser/>
                    }}/>
                    <Route path={'/user/:userId/update'} render={(props) => {
                        return <UpdateUser/>
                    }}/>
                    <Route path={'/groups'} render={(props) => {
                        return <GroupComponent/>
                    }}/>
                    <Route path={'/group/create'} render={(props) => {
                        return <CreateGroup/>
                    }}/>
                    <Route path={'/group/:groupId/update'} render={(props) => {
                        return <UpdateGroup/>
                    }}/>

                </Switch>
            </Router>
        );
    }
}

export default App;