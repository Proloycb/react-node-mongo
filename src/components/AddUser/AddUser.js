import React from 'react';

const AddUser = () => {
    const handleSubmit = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;

        const user = {name, email};

        // send data to the server
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log('success', data);
            alert('user added successfully');
            event.target.reset();
        })
    }
    return (
        <div>
            <h1>Add a new user</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='Your name' required/>
                <br />
                <input type="email" name='email' placeholder='Your email' required/>
                <br />
                <input type="submit" value="Add user" />
            </form>
        </div>
    );
};

export default AddUser;