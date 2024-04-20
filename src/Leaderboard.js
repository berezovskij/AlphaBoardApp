import React from 'react';
import styles from './Leaderboard.module.css';

import CerussiteImage from './images/Cerussite.png';
import CharoitImage from './images/Charoit.png';
import ZinciteImage from './images/Zincite.png';

const users = [
  { id: 1, name: 'Иван Иванов', photo: CerussiteImage },
  { id: 2, name: 'Петр Петров', photo: CharoitImage },
  { id: 3, name: 'Алексей Алексеев', photo: ZinciteImage },
  { id: 4, name: 'Ольга Семенова' },
  { id: 5, name: 'Мария Лопухова' }
];

const Leaderboard = () => {
  return (
    <div className={styles.leaderboard}>
      <section id={`user-${users[0].id}`} className={styles.topUserContainer}>
        <img src={users[0].photo} alt={users[0].name} className={styles.topUserPhoto} />
        <div className={styles.topUserName}>{users[0].name}</div>
      </section>
      
      {users.slice(1, 3).map(user => (
        <section id={`user-${user.id}`} key={user.id} className={styles.secondThirdUserContainer}>
          <img src={user.photo} alt={user.name} className={styles.smallPhoto} />
          <div className={styles.secondThirdUserName}>{user.name}</div>
        </section>
      ))}

      <section className={styles.fourthFifthUserContainer}>
        <div id={`user-${users[3].id}`} className={styles.fourthFifthUserName}>{users[3].name}</div>
        <div id={`user-${users[4].id}`} className={styles.fourthFifthUserName}>{users[4].name}</div>
      </section>
    </div>
  );
};

export default Leaderboard;
