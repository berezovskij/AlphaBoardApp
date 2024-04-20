import React from 'react';
import styles from './Leaderboard.module.css';

const users = [
  { id: 1, name: 'Иван Иванов', photo: 'path/to/photo1.jpg', rank: 'topUser' },
  { id: 2, name: 'Петр Петров', rank: 'secondUser' },
  { id: 3, name: 'Алексей Алексеев', rank: 'thirdUser' },
  { id: 4, name: 'Ольга Семенова', rank: 'normalUser' },
  { id: 5, name: 'Мария Лопухова', rank: 'normalUser' }
];

const Leaderboard = () => {
  return (
    <div className={styles.leaderboard}>
      <h1 className={styles.title}>Топ-5 Пользователей</h1>
      {/* Топ-1 пользователь */}
      {/* ... */}

      {/* Топ-2 и Топ-3 пользователи */}
      {users.slice(1, 3).map((user) => (
        <div key={user.id} className={`${styles.profile} ${styles[user.rank]}`}>
          {/* ... */}
        </div>
      ))}

      {/* Контейнер для Топ-4 и Топ-5 пользователей */}
      <div className={styles.normalUsersContainer}>
        {/* ... */}
      </div>
    </div>
  );
};

export default Leaderboard;
