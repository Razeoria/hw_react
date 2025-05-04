import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from '../../api/posts';
import styles from '../../pages/AllPostsPage/AllPostsPage.module.css';

const PostsOverview = () => {
    const [items, setItems] = useState([]);
    const [busy, setBusy] = useState(true);
    const [issue, setIssue] = useState('');

    useEffect(() => {
    async function retrieve() {
        setBusy(true);
        try {
        const fetched = await getPosts();
        setItems(fetched);
        } catch (err) {
        setIssue(err.message || 'Ошибка при загрузке');
        } finally {
        setBusy(false);
        }
    }
    retrieve();
    }, []);

    if (busy) {
    return <p>Загрузка данных...</p>;
    }

    if (issue) {
    return <p className={styles.error}>{issue}</p>;
    }

    return (
    <ul className={styles.postsList}>
        {items.map(({ id, title }) => (
        <li key={id}>
            <Link to={`/posts/${id}`} className={styles.postLink}>
            {title}
            </Link>
        </li>
        ))}
    </ul>
    );
};

export default PostsOverview;
