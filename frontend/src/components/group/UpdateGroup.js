import React, {useState} from 'react';
import GroupServices from "../group/GroupServices";
import {Link, useParams} from 'react-router-dom'

function UpdateGroup()  {
    const [name, setName] = useState('');
    const [description, setDescription] = useState();
    const {groupId} = useParams()
    const nameHandler = (e) => setName(e.target.value);

    const descriptionHandler = (e) => setDescription(e.target.value);


    const updateGroup = async () => {
        new GroupServices().updateGroup(name, description, groupId).then(res => console.log(res));
    }

    return (
        <div>
            <form>

                <label>Enter group name<input onChange={event => nameHandler(event)} value={name} type="text"
                                                 placeholder={'...'}/></label>
                <label>Enter group`s description<input onChange={event => descriptionHandler(event)} value={description} type="text"
                                                 placeholder={'...'}/></label>

            </form>
            <Link to={'/groups'}>
                <button onClick={() => updateGroup()} type={"submit"}>save group</button>
            </Link>
        </div>
    );
}


export default UpdateGroup;