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
      <div className={styles.title}>Топ-5 Пользователей</div>
      <div className={`${styles.profile} ${styles.topUser}`}>
        <img src={users[0].photo} alt={users[0].name} className={styles.photo} />
        <div className={styles.name}>{users[0].name}</div>
      </div>
      {users.slice(1, 3).map(user => (
        <div key={user.id} className={`${styles.profile} ${styles[user.rank]}`}>
          <div className={styles.name}>{user.name}</div>
        </div>
      ))}
      <div className={styles.normalUsersContainer}>
        {users.slice(3).map(user => (
          <div key={user.id} className={`${styles.profile} ${styles[user.rank]}`}>
            <div className={styles.name}>{user.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Leaderboard;
