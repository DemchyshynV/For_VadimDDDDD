import React, {useState, useEffect} from 'react';
import GroupServices from "../group/GroupServices";
import UserService from "./UserServices";
import {Link, useParams} from "react-router-dom";

function UpdateUser() {
    const [username, setUsername] = useState('');
    const [group, setGroup] = useState();
    const [password] = useState('password');
    // const [groupError, setGroupError] = useState('');
    const [groups, setGroups] = useState([]);
    // const [groupDirty, setGroupDirty] = useState(false);
    const [groupId, setGroupId] = useState();
    const {userId} = useParams()

    // const blurHandler = (e) => e.target ? setGroupDirty(true) : setGroupDirty(false);

    const usernameHandler = (e) => setUsername(e.target.value);

    const groupHandler = (e) => {
        console.log(e.target.value)
        setGroup(e.target.value);
        groups.filter(value => {
            if (value.name === e.target.value) {
                setGroupId(value.id)
            }
        })
    }


    // const passwordHandler = (e) => setPassword(e.target.value);

    useEffect(() => {
        new GroupServices().getGroup()
            .then(res => setGroups(res.data));
        new UserService().getUsers()
            .then(res => console.log(res.data));
    }, []);

    const updateUser = () => {
        new UserService().updateUser(username, password, groupId, userId).then(res => console.log(res));
    }
    return (
        <div>
            <form>

                <label>Enter your username<input onChange={event => usernameHandler(event)} value={username} type="text"
                                                 placeholder={'...'}/></label>
                {/*{(groupError && groupDirty) && (<div>{groupError}</div>)}*/}
                {/*<input onBlur={event => blurHandler(event)} onChange={event => groupHandler(event)} value={group}*/}
                {/*       placeholder={'Enter your group...'} type="text"/>*/}
                <label>select your group <select value={group} onChange={event => groupHandler(event)}>{groups.map(value => (
                    <option value={value.name}>{value.name}</option>))}</select>
                </label>
                {/*<input onChange={event => passwordHandler(event)} value={password}*/}
                {/*       placeholder={'Enter your password...'} type="password"/>*/}

            </form>
            <Link to={'/users'}>
                <button onClick={() => updateUser()} type={"submit"}>save user</button>
            </Link>
        </div>
    );
}

export default UpdateUser;