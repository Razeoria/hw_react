import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { getSinglePostById } from '../../api/posts';
import styles from '../../pages/SinglePostPage/SinglePostPage.module.css';

const PostDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const [item, setItem] = useState(null);
    const [busy, setBusy] = useState(true);
    const [issue, setIssue] = useState('');

    useEffect(() => {
    async function fetchItem() {
        setBusy(true);
        try {
        const result = await getSinglePostById(id);
        setItem(result);
        } catch (err) {
        setIssue(err.message || 'Не удалось загрузить пост');
        } finally {
        setBusy(false);
        }
    }
    if (id) {
        fetchItem();
    }
    }, [id]);

    if (busy) {
    return <p>Загрузка...</p>;
    }

    if (issue) {
    return <p className={styles.error}>{issue}</p>;
    }

    if (!item) {
    return <p>Пост не найден.</p>;
    }

    const { title, text } = item;

    return (
    <>
        <button onClick={() => navigate(-1)} className={styles.backBtn}>
        Назад
        </button>
        <div className={styles.postBox}>
        <h1 className={styles.h1}>{title}</h1>
        <p className={styles.postText}>{text}</p>
        <p>Текущий путь: {pathname}</p>
        </div>
    </>
    );
};

export default PostDetail;
