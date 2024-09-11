/**
 * info.js -> module with a function getUsers
 * getUsers return the users array from this api
 * https://jsonplaceholder.typicode.com/users
 *
 * in main.js - get the array and log
 *
 * use es6 module
 */

const getUsers = async () => {
    let result = fetch('https://jsonplaceholder.typicode.com/users');
    result = await result;
    let data = await result.json()
    return data;
}

// getUsers()

export { getUsers };

