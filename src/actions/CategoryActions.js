import fetch from 'isomorphic-fetch';

export function fetchCategoriess() {
    return fetch('https://kins-node.herokuapp.com/categories', {
        method: 'GET',
       
    }).then(res => res.json())
    .catch(err => err);
}

export function fetchCategories(_id) {
    return fetch('https://kins-node.herokuapp.com/categories/' + _id, {
        method: 'GET',
        
    }).then(res => res.json())
    .catch(err => err);
}

export function createCategories(data) {
    return fetch('https://kins-node.herokuapp.com/categories', {
        method: 'POST',
        
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res;
    }).catch(err => err);
}

export function updateCategories(_id, data) {
    return fetch('https://kins-node.herokuapp.com/categories/' + _id, {
        method: 'PUT',
        
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res;
    }).catch(err => err);
}

export function deleteCategories(_id) {
    return fetch('https://kins-node.herokuapp.com/categories/' + _id, {
        method: 'DELETE',
        
    }).then(res => {
        return res;
    }).catch(err => err);
}

