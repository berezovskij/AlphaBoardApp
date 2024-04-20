import React from 'react';
import styles from './Leaderboard.module.css';

import CerussiteImage from './images/Cerussite.png';
import CharoitImage from './images/Charoit.png';
import ZinciteImage from './images/Zincite.png';

const users = [
  { id: 1, name: 'Иван Иванов', photo: CerussiteImage , rank: 'topUser' },
  { id: 2, name: 'Петр Петров', photo: CharoitImage, rank: 'secondUser' },
  { id: 3, name: 'Алексей Алексеев', photo: ZinciteImage, rank: 'thirdUser' },
  { id: 4, name: 'Ольга Семенова', rank: 'normalUser' },
  { id: 5, name: 'Мария Лопухова', rank: 'normalUser' }
];

const Leaderboard = () => {
  return (
    <div className={styles.leaderboard}>
      <h1 className={styles.title}>Топ-5 Пользователей</h1>
      {users.map((user, index) => {
        let userPhoto = user.photo ? (
          <img src={user.photo} alt={user.name} className={styles.photo} />
        ) : null;

        if (index === 0) {
          return (
            <div key={user.id} className={`${styles.profile} ${styles[user.rank]}`}>
              {userPhoto}
              <div className={styles.name}>{user.name}</div>
            </div>
          );
        }

        return (
          <div key={user.id} className={`${styles.profile} ${styles[user.rank]}`}>
            <div className={styles.userContainer}>
              {userPhoto}
              <div className={styles.name}>{user.name}</div>
            </div>
          </div>
        );
      })}
      <div className={styles.normalUsersContainer}>
        {users.slice(3).map((user) => (
          <div key={user.id} className={`${styles.profile} ${styles[user.rank]}`}>
            <div className={styles.name}>{user.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};



export default Leaderboard;
