import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import UserService from "./UserServices";
import GroupServices from "../group/GroupServices";
import GroupName from "./GroupName";
// export const {Consumer, Provider} = React.createContext();
class UserComponent extends Component {
    state = {users: [], groups: []};
    userService = new UserService();
    groupService = new GroupServices();

    componentDidMount() {
        this.userService.getUsers()
            .then(res => {
                const users = res.data;
                this.setState({users})
            })
        this.groupService.getGroup()
            .then(res => {
                const groups = res.data;
                this.setState({groups})
            })
    }
    // group = () => this.state.groups.filter(value => )



    render() {
        const {users} = this.state;
        return (
            <div>
                <Link to={'/user/create'}>
                    <button>Add User</button>
                </Link>
                    {users.map(value => <GroupName item={value} key={value.id}/>)}



            </div>
        );
    }
}

export default UserComponent;