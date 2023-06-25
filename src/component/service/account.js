import { API_BASE_URL } from "./env";

const API_URL_ACC = API_BASE_URL + 'acc/';

const request = async (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    const response = await fetch(options.url, options);
    const json = await response.json();

    if (!response.ok) {
        return Promise.reject(json);
    }

    return json;
}

// Login Customer
export function login(username, password) {
    var raw = JSON.stringify({
        "username": username,
        "password": password
    });

    return request({
        url: API_URL_ACC + "login-customer",
        method: 'POST',
        body: raw,
        redirect: 'follow'
    });
}

// Register Customer
export function register(username, email, password) {
    var raw = JSON.stringify({
        'username': username,
        'email': email,
        'password': password
    })

    return request({
        // url: API_URL_ACC + 'register-customer',
        url: "http://127.0.0.1:8000/api/acc/register-customer",
        method: 'POST',
        body: raw,
        redirect: 'follow'
    })
}