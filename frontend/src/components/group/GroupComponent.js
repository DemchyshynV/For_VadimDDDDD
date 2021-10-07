import React, {Component} from 'react';
import GroupServices from "./GroupServices";
import {Link} from "react-router-dom";


class GroupComponent extends Component {
    state = {groups: []};
    groupService = new GroupServices();

    componentDidMount() {
        this.groupService.getGroup()
            .then(res => {
                const groups = res.data;
                this.setState({groups})
            })
    }

    deleteGroup = async (id) => {
        try {
            await this.groupService.deleteGroup(id)
        } catch (er) {
            alert('спочатку видали користувачів з цієї групи')
        }
    }


    render() {
        const {groups} = this.state
        return (
            <div>
                <Link to={'/group/create'}>
                    <button>Add Group</button>
                </Link>
                {groups.map(value => (<div>{value.id} {value.name} {value.description}
                    <Link to={`group/${value.id}/update`}>
                        <button>edit</button>
                    </Link>
                    <button onClick={() => this.deleteGroup(value.id)}>delete</button>
                </div>))}
            </div>
        );
    }
}

export default GroupComponent;