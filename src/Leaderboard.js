import React from 'react';
import styles from './Leaderboard.module.css';

const users = [
  { id: 1, name: 'Иван Иванов', photo: 'path/to/photo1.jpg', rank: 'topUser' },
  { id: 2, name: 'Петр Петров', photo: 'path/to/photo2.jpg', rank: 'secondUser' },
  { id: 3, name: 'Алексей Алексеев', photo: 'path/to/photo3.jpg', rank: 'thirdUser' },
  { id: 4, name: 'Ольга Семенова', rank: 'normalUser' },
  { id: 5, name: 'Мария Лопухова', rank: 'normalUser' }
];

const Leaderboard = () => {
  return (
    <div className={styles.leaderboard}>
      {users.map(user => (
        <div key={user.id} className={`${styles.profile} ${styles[user.rank]}`}>
          {user.photo && <img src={user.photo} alt={user.name} className={styles.photo} />}
          <div className={styles.name}>{user.name}</div>
        </div>
      ))}
    </div>
  );
}

export default Leaderboard;
