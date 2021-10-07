import axios from 'axios'

export default class GroupServices {

    url = 'http://127.0.0.1:8000/groups'

    getGroup() {
        return axios.get(this.url);
    }

    createGroup(name, description) {
        return axios.post(this.url, {
            name: name,
            description: description
        }).catch();
    }

    updateGroup(name, description, id) {
        return axios.put(`${this.url}/${id}/update`,{name: name, description: description});
    }

    deleteGroup(id) {
        return axios.delete(`${this.url}/${id}/delete`);
    }
}
;