import { useState, useEffect } from 'react';
import Answer from './Answer/Answer';
import styles from './MathQuiz.module.css';

// Функция для получения случайного числа от 0 до 10
const getRandomNumber = () => Math.floor(Math.random() * 11);

const MathQuiz = () => {
  const [points, setPoints] = useState(0);
  const [numbers, setNumbers] = useState({ a: 0, b: 0 });

  // Функция обновления очков и задания нового примера
  const updatePoints = (correct) => {
    setPoints((prev) => (correct ? prev + 1 : Math.max(0, prev - 1)));
    setNumbers({ a: getRandomNumber(), b: getRandomNumber() });
  };

  // Устанавливаем случайные числа при первом рендере
  useEffect(() => {
    setNumbers({ a: getRandomNumber(), b: getRandomNumber() });
  }, []);

  // Показываем сообщение каждые 10 правильных ответов
  useEffect(() => {
    if (points > 0 && points % 10 === 0) {
      alert(`Уже решено правильно ${points} задач!`);
    }
  }, [points]);

  return (
    <div className={styles.container}>
      <p>Ваши очки: {points}</p>
      <p>
        {numbers.a} + {numbers.b} = ?
      </p>
      <Answer updatePoints={updatePoints} a={numbers.a} b={numbers.b} />
    </div>
  );
};

export default MathQuiz;
