import React from 'react';
import axios from 'axios';

const loginUser = (data) => {
    axios.post('/login', {
        username: data.username,
        password: data.password
    })
    .catch(err => {
        console.log(error);
    })
};

const User = () => {
    let username, password;
    return (<div>
        <form onSubmit={(e) => {
            e.preventDefault();
            loginUser({username: username.value, password: password.value})
        }}>
            <input type="text" placeholder="username" ref={input => username = input}/>
            <input type="text" placeholder="password" ref={input => password = input}/>
            <button type="submit">Sign in</button>
        </form>
    </div>);
}

export default User;