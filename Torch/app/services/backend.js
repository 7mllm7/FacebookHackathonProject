/**
 * Created by MLmediapps on 23/06/2016.
 */

const API_ADDR = "http://ridd.li:7777/";

// TODO
const POST = 'POST';
const GET = 'GET';
const PUT = 'PUT';

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        var error = new Error(response.statusText);
        error.response = response;
        throw error
    }
}

function parseJSON(response) {
    return response.json();
}

async function fetchWithBody(method, endpoint, body) {
    return fetch(`${API_ADDR}${endpoint}`, {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
        .then(checkStatus)
        .then(parseJSON);
}

export async function fetchPOST(endpoint, body) {
    return fetchWithBody(POST, endpoint, body);
}

export async function fetchPUT(endpoint, body) {
    return fetchWithBody(PUT, endpoint, body);
}

export async function fetchGET(endpoint, params) {
    var paramsStr = Object.keys(params).map(function(key) {
        return key + '=' + params[key];
    }).join('&');
    return fetch(`${API_ADDR}${endpoint}?${paramsStr}`, {
        method: GET,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(checkStatus)
        .then(parseJSON);
}