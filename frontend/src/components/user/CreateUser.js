import React, {useEffect, useState} from 'react';
import GroupServices from "../group/GroupServices";
import UserService from "./UserServices";
import {Link} from 'react-router-dom'

function CreateUser()  {
    const [username, setUsername] = useState('');
    const [group, setGroup] = useState();
    const [password] = useState('password');
    // const [groupError, setGroupError] = useState('');
    const [groups, setGroups] = useState([]);
    // const [groupDirty, setGroupDirty] = useState(false);
    const [groupId, setGroupId] = useState();

    // const blurHandler = (e) => e.target ? setGroupDirty(true) : setGroupDirty(false);


    const usernameHandler = (e) => setUsername(e.target.value);

    const groupHandler = (e) => {
        setGroup(e.target.value);

        groups.filter(value => {
            if (value.name === e.target.value) {
                setGroupId(value.id)
            }
        })
    }



    useEffect(() => {
        new GroupServices().getGroup()
            .then(res => setGroups(res.data));
    }, []);

    const createUser = async () => {
        new UserService().createUser(username, password, groupId).then(res => console.log(res));
    }

    return (
        <div>
            <form>

                <label>Enter your username<input onChange={event => usernameHandler(event)} value={username} type="text"
                                                 placeholder={'...'}/></label>
                <label> select your group <select value={group} onChange={event => groupHandler(event)}>{groups.map(value => (
                    <option value={value.name}>{value.name}</option>))}</select>
                </label>

            </form>
            <Link to={'/users'}>
                <button onClick={() => createUser()} type={"submit"}>add user</button>
            </Link>
        </div>
    );
}


export default CreateUser;