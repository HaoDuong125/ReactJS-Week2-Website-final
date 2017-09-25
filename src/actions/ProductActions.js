import fetch from 'isomorphic-fetch';

export function fetchProducts() {
    return fetch('https://kins-node.herokuapp.com/products', {
        method: 'GET',
       
    }).then(res => res.json())
    .catch(err => err);
}

export function fetchProduct(_id) {
    return fetch('https://kins-node.herokuapp.com/products/' + _id, {
        method: 'GET',
        
    }).then(res => res.json())
    .catch(err => err);
}

export function createProduct(data) {
    return fetch('https://kins-node.herokuapp.com/products', {
        method: 'POST',
        
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res;
    }).catch(err => err);
}

export function updateProduct(_id, data) {
    return fetch('https://kins-node.herokuapp.com/products/' + _id, {
        method: 'PUT',
        
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res;
    }).catch(err => err);
}

export function deleteProduct(_id) {
    return fetch('https://kins-node.herokuapp.com/products/' + _id, {
        method: 'DELETE',
        
    }).then(res => {
        return res;
    }).catch(err => err);
}

