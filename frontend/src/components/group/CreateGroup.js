import React, {useState} from 'react';
import GroupServices from "../group/GroupServices";
import {Link} from 'react-router-dom'

function CreateGroup()  {
    const [name, setName] = useState('');
    const [description, setDescription] = useState();

    const nameHandler = (e) => setName(e.target.value);

    const descriptionHandler = (e) => setDescription(e.target.value);


    const createGroup = async () => {
        new GroupServices().createGroup(name, description).then(res => console.log(res));
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
                <button onClick={() => createGroup()} type={"submit"}>add group</button>
            </Link>
        </div>
    );
}


export default CreateGroup;