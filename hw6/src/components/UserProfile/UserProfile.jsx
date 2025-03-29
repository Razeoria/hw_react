import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './UserProfile.module.css';

const initialState = {
    name: { first: '', last: '' },
    picture: { large: '' },
    email: '',
    phone: ''
};

const UserProfile = () => {
    const [user, setUser] = useState(initialState);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchUser = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get('https://randomuser.me/api');
            const newUser = response.data.results[0];
            setUser(newUser);
        } catch (err) {
            setError('Failed to load user. Please try again.');
            console.error('Error fetching user:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <div className={styles.container}>
            {loading ? (
                <p className={styles.loading}>Loading...</p>
            ) : error ? (
                <p className={styles.error}>{error}</p>
            ) : (
                <div className={styles.profileCard}>
                    <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} className={styles.avatar} />
                    <h2 className={styles.name}>{`${user.name.first} ${user.name.last}`}</h2>
                    <p className={styles.info}>Email: {user.email}</p>
                    <p className={styles.info}>Phone: {user.phone}</p>
                    <button className={styles.button} onClick={fetchUser}>Load New User</button>
                </div>
            )}
        </div>
    );
};

export default UserProfile;