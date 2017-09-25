import fetch from 'isomorphic-fetch';

export function fetchUserss() {
    return fetch('https://kins-node.herokuapp.com/users', {
        method: 'GET',
       
    }).then(res => res.json())
    .catch(err => err);
}

export function fetchUsers(_id) {
    return fetch('https://kins-node.herokuapp.com/users/' + _id, {
        method: 'GET',
        
    }).then(res => res.json())
    .catch(err => err);
}

export function createUsers(data) {
    return fetch('https://kins-node.herokuapp.com/users', {
        method: 'POST',
        
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res;
    }).catch(err => err);
}

export function updateUsers(_id, data) {
    return fetch('https://kins-node.herokuapp.com/users/' + _id, {
        method: 'PUT',
        
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res;
    }).catch(err => err);
}

export function deleteUsers(_id) {
    return fetch('https://kins-node.herokuapp.com/users/' + _id, {
        method: 'DELETE',
        
    }).then(res => {
        return res;
    }).catch(err => err);
}

