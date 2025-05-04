import React from 'react';

const UserItem = ({ id, name, age, email }) => {
    return (
    <li>
        <h3>{name} (ID: {id})</h3>
        <p>
        Age: {age}
        <br />
        Email: <a href={`mailto:${email}`}>{email}</a>
        </p>
    </li>
    );
};

export default UserItem;
